//
// defines and globals
//

var isInside = 0;                                  // inside firewall ?
var php_dir = "./src/php/";

var PHP_ERROR = "PHP_ERROR";
var IGNORE_STR = "#IGNORE";                        // special (just ignore)
var PING_STR = "ping";                             // special (just ignore) - should not get through
var SCROLL_STR_IGNORE1 = "redan sist i lista";     // filter away scroll texts containing this
var URL_SSE = "feeder_sse.php";
var FEEDER_PORT = 1050;                            // port to webfeeder app
var CMD_NEW_DATA = "n";                            // command to get new switch data
var currScrollRowsLimit = WEBSTEP_DEFAULT_SCROLL;  // current max in scroll area (can be re-set)
var TOPURL = "switchlog.html";
var aliveTimestampSSE = 0;                         // latest timestamp when SSE was known to be alive
var ALIVE_SSE_CHECK_INTERVAL = 20000;              // time between checking SSE alive (milliseconds)
var ALIVE_SSE_TIMEOUT = 70000;                     // when to consider contact with SSE is broken (milliseconds)

var DEBUG = "debug";
var FIELD_SCROLL = "fieldScroll";
var FIELD_SOUND = "fieldSound";
var FIELD_LATESTDATA = "fieldLatestdata";
var FIELD_TESTDATA = "fieldTestdata";
var FIELD_OBJID = "fieldObjId";
var FIELD_OBJTYPE = "fieldObjType";
var FIELD_OBJNAME = "fieldObjName";

var currSource = 0;                        // data link to feeder app
var currConnected = 1;                     // are we connected ? - note initial state (connected)
var currConnectionNr = "";
var STATUS_DISCONNECTED = "Kontakten bruten";
var STATUS_RECONNECTED = "Kontakten återskapad";

//
// for history stepping
//
var FIELD_CLOCK = "fieldClock";
var FIELD_STEP_TIME = "fieldStepTime";
var FIELD_PLAY_SPEED = "fieldPlaySpeed";
var BUTTON_STEP_TOGGLE = "bStepToggle";
var BLOCK_STEP_FUNCTIONS = "blockStepFunctions";
var BLOCK_CLOCK = "blockClock";
var clockTimeout = 0;
var isStepMode = 0;
var stepCurrNumFile = 0;
var CALLER_STEP_TIME = 1;
var CALLER_STEP_NEXT = 2;
var CALLER_STEP_PREV = 3;
var CALLER_STEP_JUMPFORWARD = 4;
var CALLER_STEP_JUMPBACK = 5;
var isPlaying = 0;
var playTimeout = 0;
var PLAY_SPEED_DEFAULT = 1; // times per second
var playSpeed = PLAY_SPEED_DEFAULT;
var LOGSTART_TIME = "03:00:00";
var lastWantedDatetime = 0;

//
// for data handling
//

var DATATYPE_NONE = 0;
var DATATYPE_CREATE = 1;
var DATATYPE_CHANGE = 2;
var DATATYPE_REMOVE = 3;

var DATA_STR_DELIM = ";";

var DATATOKEN_A = "A";
var DATATOKEN_AA = "lA";
var DATATOKEN_AB = "lB";
var DATATOKEN_AC = "lC";
var DATATOKEN_AD = "lD";
var DATATOKEN_CNR = "c";
var DATATOKEN_EA = "EA";
var DATATOKEN_ED = "ED";
var DATATOKEN_EK = "EK";
var DATATOKEN_EU = "EU";
var DATATOKEN_COMP = "F";
var DATATOKEN_IMGBITS = "G";
var DATATOKEN_MOXABITS = "b"; // img bits for punktsignal
var DATATOKEN_NAME = "N";
var DATATOKEN_COLBITS = "O";
var DATATOKEN_SCROLL = "-";
var DATATOKEN_TIMESTAMP = "T";
var DATATOKEN_STATUS = "u";
var DATATOKEN_V = "V";
var DATATOKEN_TYPE = "Y";

var DATACOMP_0 = "0";
var DATACOMP_1 = "1";

var TAG_CLICKDATA = "#DATACLICK";
var TAG_ENDDATA = "#END";

function isData(data, tag)
{
  var ret = 0;
  var ix1 = data.indexOf(tag);
  if (ix1 >= 0)
  {
    ret = 1;
  }
  return ret;
}

function initCommon()
{
  document.getElementById(FIELD_CLOCK).value = "";
  document.getElementById(FIELD_SCROLL).value = "";
  document.getElementById(FIELD_SOUND).checked = false;
  document.getElementById(FIELD_STEP_TIME).value = "";
  document.getElementById(FIELD_PLAY_SPEED).value = PLAY_SPEED_DEFAULT;
  document.getElementById(FIELD_LATESTDATA).value = "";
  document.getElementById(FIELD_TESTDATA).value = "";
}

function putTestdata()
{
  // get data
  var data = document.getElementById(FIELD_TESTDATA).value;
  handleData(data);
}

function formatBold(str)
{
  return "<b>" + str + "</b>";
}

function handleCreate(data, datetime)
{
  // get object type
  var objType = getDataToken(data, DATATOKEN_TYPE, 0);

  // set type field
  document.getElementById(FIELD_OBJTYPE).innerHTML = objType;

  // get object name
  var objName = getDataToken(data, DATATOKEN_NAME, 0);

  // set name field
  document.getElementById(FIELD_OBJNAME).innerHTML = objName ? formatBold(objName) : "";

  // get connection number
  currConnectionNr = getDataToken(data, DATATOKEN_CNR, 0);
}

function handleRemove(data, datetime)
{
  // object was disconnected

  // check if it has already been re-connected
  var tmpConnectionNr = getDataToken(data, DATATOKEN_CNR, 0);
  if (!(tmpConnectionNr === currConnectionNr))
  {
    // the connection number is not the same -> object has been reconnected (ignore)
    return 0;
  }

  // object is disconnected -> signal disconnected state ?
  currConnected = 0;

  // keep connection open (waiting for reconnect)

  // do not clear any fields
  return 0;
}


//
// utility functions
//

function isPhpError(str)
{
  var n = str.search(PHP_ERROR);
  return (n >= 0);
}

function isIgnore(str)
{
  var ret = 0;
  if (str == IGNORE_STR || str == PING_STR)
  { 
    ret = 1;
  }
  return ret;
}

function topurlGo()
{
  window.location = TOPURL;
}

function createDateObjFromStepDatetime(datetimeStr)
{
  var year = parseInt(datetimeStr.substring(1, 5));
  var month = parseInt(datetimeStr.substring(6, 8));
  month--;
  var day = parseInt(datetimeStr.substring(9, 11));
  var hour = parseInt(datetimeStr.substring(12, 14));
  var minute = parseInt(datetimeStr.substring(15, 17));
  var theDate = new Date(year, month, day, hour, minute, 0, 0);
  return theDate;
}

function getDateTime(theDate)
{
  var currentdate = theDate;
  if (!currentdate)
  {
    currentdate = new Date();
  }
 
  var datetime = "";

  datetime += currentdate.getFullYear();
  datetime += "-";

  var tmp = "" + parseInt(currentdate.getMonth() + 1);
  if (tmp.length < 2)
    tmp = "0" + tmp;
  datetime += tmp;
  datetime += "-";

  tmp = "" + currentdate.getDate();
  if (tmp.length < 2)
    tmp = "0" + tmp;
  datetime += tmp;

  datetime += " ";

  tmp = "" + currentdate.getHours();
  if (tmp.length < 2)
    tmp = "0" + tmp;
  datetime += tmp;

  datetime += ":";

  tmp = "" + currentdate.getMinutes();
  if (tmp.length < 2)
    tmp = "0" + tmp;
  datetime += tmp;

  datetime += ":";

  tmp = "" + currentdate.getSeconds();
  if (tmp.length < 2)
    tmp = "0" + tmp;
  datetime += tmp;

  return datetime;
}

function setClock()
{
  var datetimeStr = getDateTime(0);
  document.getElementById(FIELD_CLOCK).value = datetimeStr;
  clockTimeout = setTimeout(function () { setClock(); }, 1000);
}

function stopClock()
{
  if (clockTimeout)
  {
    clearTimeout(clockTimeout);
    clockTimeout = 0;
  }
}

function gup(name, url)
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
}

function setBackgroundColor(color)
{
  document.body.style.backgroundColor = color;
}

function setButtonToggleNormal()
{
  document.getElementById(BUTTON_STEP_TOGGLE).value = "Historik";
}

function setButtonToggleStep()
{
  document.getElementById(BUTTON_STEP_TOGGLE).value = "Realtid";
}

//
// for history stepping
//

function addKeyListener()
{
  window.addEventListener("keydown", function (event)
  {
    if (event.defaultPrevented)
    {
      return; // Do nothing if the event was already processed
    }

    if (!isStepMode ||
        (document.getElementById(FIELD_STEP_TIME) == document.activeElement) ||
        (document.getElementById(FIELD_TESTDATA) == document.activeElement) 
       )
    {
      return; // ignore if not in step more or if time field or testdata field has focus
    }

    switch (event.key)
    {
      case "ArrowLeft":
        stepPrev(0);
        break;
      case "ArrowRight":
        stepNext(0);
        break;
      default:
        return; // ignore
    }

    // cancel default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // last option dispatches event to listener first, then dispatches event to window
}

// called on double click in scroll area
function dcScroll()
{
  var elem = document.getElementById(FIELD_SCROLL);
  if (!isStepMode || typeof elem.selectionStart == 'undefined')
  {
    return 1;
  }

  var selectedPos = elem.selectionStart;
  var rowNumber = elem.value.substr(0, selectedPos).split("\n").length-1;
  var selectedRow = elem.value.split("\n")[rowNumber];

  // get timestamp
  var datetimeValue = selectedRow.substr(0, 23);
  return stepToDatetime(datetimeValue, CALLER_STEP_TIME);
}

function stepToggle()
{
  if (!isStepMode)
  {
    // stepmode on
    if (currSource)
    {
      currSource.close();
      currSource = 0;
    }
    isStepMode = 1;
    stepCurrNumFile = 0;
    stopClock();
    setBackgroundColor(BGCOLOR_STEP);
    setButtonToggleStep();
    document.getElementById(BLOCK_STEP_FUNCTIONS).style.visibility = "visible";
    document.getElementById(BLOCK_CLOCK).style.visibility = "hidden";
    stepToDatetime(getDateTime(0), CALLER_STEP_TIME);
  }
  else
  {
    // stepmode off
    isStepMode = 0;
    location.reload();
  }
}

function stepToDatetime(datetimeValue, caller)
{
  playStop();
  if (!isStepMode)
    return 1;

  var switchId = document.getElementById(FIELD_OBJID).innerHTML;
  var datetimeStr = "T" + datetimeValue;
  if (datetimeStr.length < 20)
  {
    alert("Ange korrekt tidsformat: (YYYY-MM-DD HH:MI:SS[.sss])");
    return 1;
  }
  lastWantedDatetime = datetimeValue;

  var force = 0;
  var wantedDate = createDateObjFromStepDatetime(datetimeStr);
  var nowDate = new Date();
  var logstartDate = new Date(nowDate.valueOf()); // a copy of nowDate

  var diff = nowDate - wantedDate; // milliseconds
  if (diff <= 3600000*24)
  {
    // the wanted datetime is not more than 24 hours back in time
    // we might want to force creation of a new step file
    logstartDate.setHours(03);
    logstartDate.setMinutes(00);
    logstartDate.setSeconds(00);
    logstartDate.setMilliseconds(00);

    if (!(wantedDate < logstartDate && nowDate >= logstartDate))
    {
      // use the force flag to be sure to get a frech step file
      force = 1;
    }
  }

  if (caller == CALLER_STEP_JUMPFORWARD || caller == CALLER_STEP_JUMPBACK)
  {
    // do not force a new step file when executing jump commands
    force = 0;
  }

  // call handler through php to get rows for specified time
  // p1: switchId, p2: datetimeStr, p3: force, p4: scrollRows
  // put params together
  // force creation of new step file only if needed - use default scroll rows
  var paramStr = switchId + WEBSTEP_PARAMS_DELIM + datetimeStr + WEBSTEP_PARAMS_DELIM +
                 force + WEBSTEP_PARAMS_DELIM + WEBSTEP_DEFAULT_SCROLL;

  // use row number as signal to do a jump forward (a page)
  if (caller == CALLER_STEP_JUMPFORWARD && stepCurrNumFile > 0)
  {
    paramStr += (WEBSTEP_PARAMS_DELIM + stepCurrNumFile);
  }

  var port = isInside ? WEBSTEP_PORT_GETTER : WEBSTEP_PORT_HANDLER;
  socketExecuteCmd(caller, port, WEBSTEP_ENDTAG, WEBSTEP_ERRTAG,
                   WEBSTEP_CMD_GET_STEP_TIME, paramStr, 0, 0, 0, 0, 0, 0, 0);
  return 0;
}

function stepTime()
{
  playStop();
  if (!isStepMode)
  {
    return 1;
  }
  var datetimeValue = document.getElementById(FIELD_STEP_TIME).value;
  return stepToDatetime(datetimeValue, CALLER_STEP_TIME);
}

function stepNext(playing)
{
  if (!playing)
  {
    playStop();
  }

  if (!isStepMode || stepCurrNumFile <= 0)
  {
    playStop();
    alert("Kan inte gå framåt. Historik är inte korrekt initierad.");
    return 1;
  }

  var switchId = document.getElementById(FIELD_OBJID).innerHTML;
  var datetimeStr = "T" + document.getElementById(FIELD_STEP_TIME).value;
  // call handler through php to get rows for specified time
  // p1: switchId, p2: datetimeStr, p3: force, p4: scrollRows, p5: currRowNum
  // put params together
  // do not force creation of new step file - try to use default scroll rows
  var paramStr = switchId + WEBSTEP_PARAMS_DELIM + datetimeStr + WEBSTEP_PARAMS_DELIM +
                 "0" + WEBSTEP_PARAMS_DELIM + WEBSTEP_DEFAULT_SCROLL;

  // try to use row number in step file for better search
  if (stepCurrNumFile > 0)
  {
    paramStr += (WEBSTEP_PARAMS_DELIM + stepCurrNumFile);
  }

  var port = isInside ? WEBSTEP_PORT_GETTER : WEBSTEP_PORT_HANDLER;
  socketExecuteCmd(CALLER_STEP_NEXT, port, WEBSTEP_ENDTAG, WEBSTEP_ERRTAG,
                   WEBSTEP_CMD_GET_STEP_NEXT, paramStr, 0, 0, 0, 0, 0, 0, 0);
  return 0;
}

function stepPrev(playing)
{
  if (!playing)
  {
    playStop();
  }

  if (!isStepMode || stepCurrNumFile <= 0)
  {
    playStop();
    alert("Kan inte gå bakåt. Historik är inte korrekt initierad.");
    return 1;
  }

  var switchId = document.getElementById(FIELD_OBJID).innerHTML;
  var datetimeStr = "T" + document.getElementById(FIELD_STEP_TIME).value;
  // call handler through php to get rows for specified time
  // p1: switchId, p2: datetimeStr, p3: force, p4: scrollRows, p5: currRowNum
  // put params together
  // do not force creation of new step file - try to use default scroll rows
  var paramStr = switchId + WEBSTEP_PARAMS_DELIM + datetimeStr + WEBSTEP_PARAMS_DELIM +
                 "0" + WEBSTEP_PARAMS_DELIM + WEBSTEP_DEFAULT_SCROLL;

  // try to use row number in step file for better search
  if (stepCurrNumFile > 0)
  {
    paramStr += (WEBSTEP_PARAMS_DELIM + stepCurrNumFile);
  }

  var port = isInside ? WEBSTEP_PORT_GETTER : WEBSTEP_PORT_HANDLER;
  socketExecuteCmd(CALLER_STEP_PREV, port, WEBSTEP_ENDTAG, WEBSTEP_ERRTAG,
                   WEBSTEP_CMD_GET_STEP_PREV, paramStr, 0, 0, 0, 0, 0, 0, 0);
}

function setPlaySpeed()
{
  var tmpspeed = parseInt(document.getElementById(FIELD_PLAY_SPEED).value);
  if (tmpspeed == NaN || tmpspeed <= 0)
  {
    alert("Fart ska vara heltal större än 0.");
    document.getElementById(FIELD_PLAY_SPEED).value = PLAY_SPEED_DEFAULT;
    playSpeed = PLAY_SPEED_DEFAULT;
    return 1;
  }
  playSpeed = tmpspeed;
  return 0;
}

function playBack()
{
  playStop();
  if (setPlaySpeed())
  {
    return 1;
  }

  isPlaying = 1;
  stepPrev(1);
  return 0;
}

function playForward()
{
  playStop();
  if (setPlaySpeed())
  {
    return 1;
  }

  isPlaying = 1;
  stepNext(1);
  return 0;
}

function jumpBack()
{
  playStop();
  var elem = document.getElementById(FIELD_SCROLL);
  var tmparr = elem.value.split("\n");
  if (tmparr.length <= 0)
  {
    alert("Kommandot misslyckades. Önskad rad saknas.");
    return 1;
  }
  var tmprow = tmparr[0];
  var datetimeValue = tmprow.substr(0, 23);
  return stepToDatetime(datetimeValue, CALLER_STEP_JUMPBACK);
}

function jumpForward()
{
  playStop();
  var datetimeValue = document.getElementById(FIELD_STEP_TIME).value;
  return stepToDatetime(datetimeValue, CALLER_STEP_JUMPFORWARD);
}

function playStop()
{
  isPlaying = 0;
  if (playTimeout)
  {
    clearTimeout(playTimeout);
    playTimeout = 0;
  }
}

function handlePlaying(caller)
{
  playStop(); 
  var timeout = 1000 / playSpeed;

  switch (caller)
  {
    case CALLER_STEP_PREV:
      isPlaying = 1;
      playTimeout = setTimeout(function () { stepPrev(1); }, timeout);
      break;
    case CALLER_STEP_NEXT:
      isPlaying = 1;
      playTimeout = setTimeout(function () { stepNext(1); }, timeout);
      break;
    default:
      alert("Okänt uppspelningskommando: " + caller);
  }
  return 0;
}

function stepIsIllegal(caller, item)
{
  var ret = 0;

  if (caller == CALLER_STEP_PREV || caller == CALLER_STEP_TIME)
  {
    // find datetime for logstart
    logstartdatetime = "";

    var tmpnowdatetime = document.getElementById(FIELD_STEP_TIME).value;
    if (CALLER_STEP_TIME)
    {
      // can not use the field -> get value from when the command was run
      tmpnowdatetime = lastWantedDatetime;
    }
    var tmpnowdate = tmpnowdatetime.substring(0, 11);
    var tmpnowtime = tmpnowdatetime.substring(11, 19);

    if (tmpnowtime >= LOGSTART_TIME)
    {
      logstartdatetime = tmpnowdate + LOGSTART_TIME;
    }
    else
    {
      var tmpDate = createDateObjFromStepDatetime("T"+tmpnowdatetime);
      tmpDate.setDate(tmpDate.getDate() - 1);
      var tmpdatetimestr = getDateTime(tmpDate);
      logstartdatetime = tmpdatetimestr.substring(0, 11) + LOGSTART_TIME;
    }

    // get datetime for (last) returned row
    var tmpreturneddatetime = getDataToken(item, DATATOKEN_TIMESTAMP, 0);
    if (tmpreturneddatetime < logstartdatetime)
    {
      ret = 1;
      if (caller == CALLER_STEP_PREV)
      {
        alert("Kommandot misslyckades. Kan inte stega bakåt in i föregående dygn.");
      }
      else
      {
        alert("Kommandot misslyckades. Finns inga matchande rader för vald tidpunkt.");
      }
    }
  }
  return ret;
}

function socketExecuteCancel(caller, result)
{
  playStop();
  alert("Kommandot misslyckades. Felmeddelande: " + result);
}

function socketExecuteConfirm(caller, result)
{
  if (result &&
     (caller == CALLER_STEP_TIME || caller == CALLER_STEP_JUMPFORWARD || caller == CALLER_STEP_JUMPBACK ||
      caller == CALLER_STEP_NEXT || caller == CALLER_STEP_PREV))
  {
    var resultarr = result.split("\n");
    if (resultarr.length <= 0)
    {
      playStop();
      alert("Kommandot misslyckades. Inget resultat returnerades.");
      return 1;
    }
    var status = parseInt(resultarr[0]);
    if (status != 0)
    {
      playStop();
      alert("Historikkommandot misslyckades. Felmeddelande: " + result);
      return 1;
    }
    if (resultarr.length <= 6)
    {
      playStop();
      alert("Kommandot misslyckades. Felaktigt resultat: " + result);
      return 1;
    }

    var resultRowsCount = parseInt(resultarr[3]);    // nr of resulting step rows
    var tmpNumFile = parseInt(resultarr[5]);         // row nr in step file for wanted row
    if (resultRowsCount <= 0 ||
        (caller == CALLER_STEP_JUMPFORWARD && (tmpNumFile <= 0 || tmpNumFile == stepCurrNumFile)) ||
        (caller == CALLER_STEP_JUMPBACK && (tmpNumFile <= 0 || tmpNumFile == stepCurrNumFile)))
    {
      playStop();
      alert("Kommandot misslyckades. Önskad rad saknas.");
      return 1;
    }

    if (stepIsIllegal(caller, resultarr[6+resultRowsCount]))
    {
      playStop();
      return 1;
    }

    var wantedRowNumLocal = parseInt(resultarr[4]);  // row nr among the resulting rows
    stepCurrNumFile = tmpNumFile;                    // current row in step file
    var scrollRows = parseInt(resultarr[6]);         // scrollrows limit in the step file

    //document.getElementById(DEBUG).innerHTML += (" rows: " + resultRowsCount);
    //document.getElementById(DEBUG).innerHTML += (" numlocal: " + wantedRowNumLocal);
    //document.getElementById(DEBUG).innerHTML += (" numfile: " + stepCurrNumFile);
    //document.getElementById(DEBUG).innerHTML += (" scroll: " + scrollRows);
    //document.getElementById(DEBUG).innerHTML += (" limit: " + currScrollRowsLimit);

    // make sure to clear scroll area and set scrollrows limit if needed
    if (scrollRows != currScrollRowsLimit || caller == CALLER_STEP_TIME ||
        caller == CALLER_STEP_JUMPFORWARD || caller == CALLER_STEP_JUMPBACK)
    {
      resetScrollLimit(FIELD_SCROLL, scrollRows);
    }

    // now just add the data rows
    var i, item = "";
    for (i = 7; i < resultarr.length && i < 7 + resultRowsCount; i++)
    {
      item = resultarr[i];
      if (caller == CALLER_STEP_PREV)
      {
        // remove back tag
        item = item.substring(1);
      }
      processData(item);
    }

    // update step time field
    if (item.length > 0)
    {
      var timestamp = getDataToken(item, DATATOKEN_TIMESTAMP, 0);
      if (timestamp)
      {
        document.getElementById(FIELD_STEP_TIME).value = timestamp;
        document.getElementById(FIELD_CLOCK).value = timestamp;
      }
    }

    // continue playing ?
    if (isPlaying)
    {
      handlePlaying(caller);
    } 
  }
  return 0;
}


// playSound has nothing to do with the functions for playing history back/forward
function playSound(soundFile)
{
  var snd = new Audio(soundFile);
  snd.play();
}

// not used ?
function setImgVisibility(imageId, imageSrc, visible)
{
  var elem = document.getElementById(imageId);
  if (visible)
  {
    elem.style.visibility = "visible";
    elem.src = imageSrc;
  }
  else
  {
    elem.style.visibility = "hidden";
    elem.src = "";
  }
}


//
// get data through SSE
//

function aliveCheckSSE(doInit)
{
  if (isStepMode)
  {
    return; // do not check SSE connection in step mode
  }

  var tmpTimestamp = new Date();
  if (doInit)
  {
    aliveTimestampSSE = tmpTimestamp;
  }
  else 
  {
    // check for timeout
    var timeDiff = tmpTimestamp - aliveTimestampSSE; // milliseconds
    if (timeDiff >= ALIVE_SSE_TIMEOUT)
    {
      alert("Kontakten med SSE bruten. Refresh krävs.");
      return;
    }
  }

  // start new timer
  setTimeout(function () { aliveCheckSSE(0); }, ALIVE_SSE_CHECK_INTERVAL);
}

function createDataLink(objId)
{
  //document.getElementById(DEBUG).innerHTML += (" createDataLink() 1");

  if (currSource)
  {
    currSource.close();
  }
  var str = URL_SSE;
  str += ("?id=" + encodeURIComponent(objId));
  str += ("&port=" + encodeURIComponent(FEEDER_PORT));
  str += ("&cmd=" + encodeURIComponent(CMD_NEW_DATA));
  currSource = new EventSource(str);

  currSource.addEventListener('message', function(e)
  {
    if (isPhpError(e.data))
    {
      document.getElementById(DEBUG).innerHTML += (" SSE, event error: " + e.data);
      currSource.close();
      currSource = 0;
      return 1;
    }

    // check for specials
    if (!isIgnore(e.data))
    {
      //document.getElementById(DEBUG).innerHTML += (" SSE, got event data message: " + e.data);

      // do something with the data
      handleData(e.data);
    }
    //else document.getElementById(DEBUG).innerHTML += (" SSE, got event ignore message: " + e.data);

    aliveTimestampSSE = new Date();
 
    return 0;
  }, false);

  aliveCheckSSE(1);

  return 0;
}


//
// data handling
//

function getDataToken(data, tokenId, getAll)
{
  var tokenStr = DATA_STR_DELIM + tokenId;
  var ix1 = data.indexOf(tokenStr);
  if (ix1 < 0)
  {
    return 0;
  }
  var ix2 = data.indexOf(DATA_STR_DELIM, ix1 + tokenStr.length);
  if (ix2 < 0 || getAll)
  {
    // get everything
    ix2 = data.length + 1;
  }
  var token = data.substring(ix1 + tokenStr.length, ix2);
  return token;
}

function getDataType(data)
{
  var ret = DATATYPE_NONE;

  if (data.length >= 2)
  {
    var typeStr = data.substring(0, 1);
    if (typeStr == DATA_STR_DELIM)
    {
      var typeCode = data.charCodeAt(1) - 65;

      switch (typeCode)
      {
        case 2: // 'C'
          ret = DATATYPE_CREATE;
          break;

        case 3: // 'D'
          ret = DATATYPE_REMOVE;
          break;

        case 11: // 'L'
          ret = DATATYPE_CHANGE;
          break;
      }
 
    }
  }
  return ret;
}

function hexchar2hexval(c)
{
  var ret = -1;
  var code = c.toUpperCase().charCodeAt(0);

  switch (code)
  {
    case 48: // 0
    case 49: // 1
    case 50: // 2
    case 51: // 3
    case 52: // 4
    case 53: // 5
    case 54: // 6
    case 55: // 7
    case 56: // 8
    case 57: // 9
      ret = code - 48; 
      break;

    case 65: // A
    case 66: // B
    case 67: // C
    case 68: // D
    case 69: // E
    case 70: // F
      ret = code - 65 + 10; 
      break;
  }
  return ret;
}

// timestamp2 is for back step rows: time for old row to be re-added at top
function addToScroll(fieldScroll, txt, timestamp1, timestamp2)
{
  if (!txt || txt.length <= 0)
  {
    return 1; // ignore
  }

  var elem = document.getElementById(fieldScroll);

  var top = elem.scrollTop;
  var offsetHeight = elem.offsetHeight;
  var scrollHeight = elem.scrollHeight;

  var isAtBottom = ((top + offsetHeight) > scrollHeight) ? 1 : 0;

  // get original content of scroll area
  scrollText = elem.value;

  scrollCount = (scrollText.match(/\n/g)||[]).length

  if (timestamp2)
  {
    // this is a back row
    // the bottom row should be removed

    var oldText = "";
    var ix1 = scrollText.lastIndexOf("\n");
    if (ix1 >= 0)
    {
      var ix2 = scrollText.lastIndexOf("\n", ix1-1);
      if (ix2 > 0)
      {
        oldText = scrollText.substring(0, ix2+1);
      }
    }

    // add timestamp before the text to add (if any)
    var newText = "";
    if (timestamp2.length > 4)
    {
      newText += (timestamp2 + " " + txt + "\n");
    }
    newText += oldText;
    elem.value = newText;
  }
  else
  {
    // normal - just add a new row at bottom 
    if (scrollCount >= currScrollRowsLimit)
    {
      var ix = scrollText.indexOf("\n");
      if (ix < 0)
      {
        return 1; // should not happen
      }
      scrollText = scrollText.substring(ix+1);
    }

    // add timestamp before the text to add
    var tmptxt = ""; 
    if (timestamp1)
    {
      tmptxt = timestamp1 + " ";
    }

    tmptxt += txt;
    scrollText += tmptxt;
    scrollText += "\n";
    elem.value = scrollText;
  }

  // scroll to bottom only if we are att the bottom
  if (isAtBottom)
  {
    elem.scrollTop = document.getElementById(fieldScroll).scrollHeight;
  }
  return 0;
}

function ignoreScrollText(txt)
{
  var ret = 0;
  var ix = txt.indexOf(SCROLL_STR_IGNORE1);
  if (ix >= 0)
  {
    ret = 1;
  }
  return ret;
}

function updateScroll(data, datetime)
{
  var txt = getDataToken(data, DATATOKEN_SCROLL, 0);
  if (txt && !ignoreScrollText(txt))
  {
    var timestamp1 = 0, timestamp2 = 0;
    var ix1 = data.indexOf(DATA_STR_DELIM + DATATOKEN_TIMESTAMP);
    if (ix1 >= 0)
    {
      timestamp1 = getDataToken(data, DATATOKEN_TIMESTAMP, 0);

      // check for extra time field (back step rows)
      var ix2 = data.indexOf(DATA_STR_DELIM + DATATOKEN_TIMESTAMP, ix1+1);
      if (ix2 >= 0)
      {
        var tmpdata = data.substring(ix2);
        timestamp2 = getDataToken(tmpdata, DATATOKEN_TIMESTAMP, 0);
      }
    }
    addToScroll(FIELD_SCROLL, txt, timestamp1, timestamp2);
  }
}

function resetScrollLimit(fieldScroll, limit)
{
  var elem = document.getElementById(fieldScroll);
  elem.value = "";
  currScrollRowsLimit = limit;
}

//
// using fifo for incoming data
//

var dataFifo = [];
function handleData(data)
{
  dataFifo.push(data);
  setTimeout(function()
  {
    while (dataFifo.length > 0)
    {
      processData(dataFifo.shift());
    }
  }, 0);
}

function processData(data)
{
  //document.getElementById(DEBUG).innerHTML += (" processData(), data: " + data);
  var datetime = getDateTime(0);


  // check for special data
  if (isData(data, TAG_CLICKDATA))
  {
    doClickareaAction(data, TAG_CLICKDATA, TAG_ENDDATA);
    return;
  }

  if (1)
  {
    // add latest data (for debug)
    document.getElementById(FIELD_LATESTDATA).innerHTML = (data + "&nbsp;&nbsp;&nbsp;(" + datetime + ")");
  }

  // get type of data
  var dataType = getDataType(data);
  var setConnStatus = 0;

  switch (dataType)
  {
    case DATATYPE_CREATE:
      handleCreate(data, datetime);
      setConnStatus = 1;
      break;

    case DATATYPE_CHANGE:
      handleChange(data, datetime);
      setConnStatus = 1;
      break;

    case DATATYPE_REMOVE:
      handleRemove(data, datetime);
      break;

    default:
      document.getElementById(DEBUG).innerHTML += (" processData(), unknown data: '" + data + "'  (" + datetime + ")");
  }

  if (setConnStatus)
  {
    if (!currConnected)
    {
      ; // signal reconnected ?
    }
    currConnected = 1; // we are connected since we got data
  }
}


//
// execute command through socket with php
// function socketExecuteCancel(caller, result) must be defined
// function socketExecuteConfirm(caller, result) must be defined
//
var WEBSTEP_PORT_HANDLER = 1038;             // port to webstephandler
var WEBSTEP_PORT_GETTER = 1052;              // port to webstepgetter
var WEBSTEP_ERRTAG = "#WEBSTEP_CMD: ERROR";
var WEBSTEP_ENDTAG = "#WEBSTEP_END";
var WEBSTEP_DEFAULT_SCROLL = 2000;
var WEBSTEP_PARAMS_DELIM = ";";
var WEBSTEP_CMD_GET_STEP_TIME = "t";
var WEBSTEP_CMD_GET_STEP_NEXT = "n";
var WEBSTEP_CMD_GET_STEP_PREV = "p";

function socketExecuteCmd(caller, port, endtag, errtag, p1, p2, p3, p4, p5, p6, p7, p8, p9)
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var result = xmlhttp.responseText;

      // check for php error
      if (isPhpError(result))
      {
        socketExecuteCancel(caller, result);
        return;
      }
      socketExecuteConfirm(caller, result);
      return;
    }
  }

  var str = php_dir + "socketExecuteCmd.php?port=" + encodeURIComponent(port);

  if (endtag)
    str += "&endtag=" + encodeURIComponent(endtag);
  if (errtag)
    str += "&errtag=" + encodeURIComponent(errtag);


  if (p1)
    str += "&p1=" + encodeURIComponent(p1);
  if (p2)
    str += "&p2=" + encodeURIComponent(p2);
  if (p3)
    str += "&p3=" + encodeURIComponent(p3);
  if (p4)
    str += "&p4=" + encodeURIComponent(p4);
  if (p5)
    str += "&p5=" + encodeURIComponent(p5);
  if (p6)
    str += "&p6=" + encodeURIComponent(p6);
  if (p7)
    str += "&p7=" + encodeURIComponent(p7);
  if (p8)
    str += "&p8=" + encodeURIComponent(p8);
  if (p9)
    str += "&p9=" + encodeURIComponent(p9);

  xmlhttp.open("POST", str, true);
  xmlhttp.send();
}

function getPosition(e)
{
  var posx = 0;
  var posy = 0;

  if (!e)
  {
    e = window.event;
  }

  if (e.pageX || e.pageY)
  {
    posx = e.pageX;
    posy = e.pageY;
  }
  else if (e.clientX || e.clientY)
  {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy
  }
}
