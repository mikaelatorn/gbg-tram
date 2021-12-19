//
// defines and globals
//

var SOUND_BEEP = "./src/bin/beep.wav";     // file with beep sound

var IMG_BACKGROUND = "imgBackground";      // the background image
var XOFFS_BACKGROUND = 20;                 // pixels
var YOFFS_BACKGROUND = 72;                 // pixels

var ID_DIV_TEXTS = "idTexts";
var ID_DIV_FIELDS = "idFields";
var CLASS_IMG = "classImg";

var BLOCK_CLICK_AREA = "blockClickArea";
var globObjId = "";                        // obj id for the web page - to be set initially

var IMG_PANEL_NONE = "Panel_none";
var IMG_PANEL_A = "Panel_A_aktiv";
var IMG_PANEL_B = "Panel_B_aktiv";
var IMG_PANEL_C = "Panel_C_aktiv";
var IMG_PANEL_L = "Panel_L_aktiv";
var IMG_PANEL_O = "Panel_O_aktiv";

// help variable - set when waiting for response
var waitForResponse = 0;

// log_server stuff
var LOG_SERVER_PORT = 1508;
var LOG_SERVER_TIMEOUT = "60";            // seconds
var LOG_SERVER_ERRTAG = "ERROR";
var LOG_SERVER_ENDTAG = "OK, tx done";
var LOG_SERVER_ROW_DELIM = "\n";

var SET_HIGH_AC = "0 1 0";
var SET_HIGH_AE = "2 1 0";
var SET_HIGH_AF = "3 1 0";
var SET_HIGH_BE = "6 1 0";
var SET_HIGH_BF = "7 1 0";
var SET_HIGH_CE = "10 1 0";
var SET_HIGH_CF = "11 1 0";
var SET_HIGH_DE = "14 1 0";
var SET_HIGH_DF = "15 1 0";
var SET_HIGH_EE = "18 1 0";
var SET_HIGH_EF = "19 1 0";

var SET_HIGH_URBRUK_P581 = "20 1 0";
var SET_LOW_URBRUK_P581 = "20 0 0";
var SET_HIGH_URBRUK_P582 = "21 1 0";
var SET_LOW_URBRUK_P582 = "21 0 0";
var SET_HIGH_URBRUK_P583 = "22 1 0";
var SET_LOW_URBRUK_P583 = "22 0 0";
var SET_HIGH_URBRUK_P584 = "23 1 0";
var SET_LOW_URBRUK_P584 = "23 0 0";
var SET_HIGH_URBRUK_P586 = "24 1 0";
var SET_LOW_URBRUK_P586 = "24 0 0";


// lock stuff

var LOCK_SERVER_PORT = 1090;               // lock handling is done through lockserver app
var LOCK_SERVER_TIMEOUT = "60";            // seconds
var LOCK_STATUS_UPDATE_TIMEOUT = 10000;    // milliseconds - time between lock status updates

var LOCK_STR_NONE = "&nbsp;";
var LOCK_STR_ERROR = "L&aring;sfel";
var LOCK_STR_LOCK = "L&aring;s";
var LOCK_STR_UNLOCK = "L&aring;s upp";

var LOCK_SERVER_CMD_LOAD = "l";
var LOCK_SERVER_CMD_GETLOCK = "g";
var LOCK_SERVER_CMD_RELEASE = "r";

var LOCK_MODE_LOAD = 1;
var LOCK_MODE_GETLOCK = 2;
var LOCK_MODE_RELEASE = 3;

var LOCK_RESULT_START = "#RESULT\n";    // start tag for results (from lockserver app)
var LOCK_RESULT_END = "#END";           // end tag for results (from lockserver app)
var LOCK_DATA_DELIM = ";";

var LOCK_ERRTAG = "#CMDERROR";
var LOCK_ENDTAG = "#END";

var lockStatusIsLocked = 0;
var lockStatusHasLock = 0;


function getTermId()
{
  var termId = localStorage.termId;
  if (typeof(termId) == 'undefined')
  {
    termId = "";
  }
  return termId;
}

function setTermId(id)
{
  localStorage.termId = id;
}

function getLockId()
{
  var lockId = localStorage.lockId;
  if (typeof(lockId) == 'undefined')
  {
    lockId = "";
  }
  return lockId;
}

function setLockId(id)
{
  localStorage.lockId = id;
}

function getLockText()
{
  return getTermId(); // just use the whole terminalId
}


function checkTermId()
{
  var termId = getTermId();
  if (termId.length > 0)
  {
    return 0; // alread set ok
  }

  var success = 0;
  var  tmpid = prompt("Ange terminal-ID (A/B/C/L/O)");

  if (tmpid != null && tmpid.length > 0)
  {
    if (tmpid.length <= 1)
    {
      switch (tmpid[0])
      {
        case 'A':
        case 'B':
        case 'C':
        case 'L':
        case 'O':
          success = 1;
          break;
      }
    }
  }

  if (success)
  {
    // get timestamp
    var timestamp = Date.now();
    termId =  tmpid + timestamp;
    setTermId(termId);
  }
  else
  {
    alert("Ogiltigt terminal-id");
  }
  return !success;
}

function panelHide()
{
  imgHide(IMG_PANEL_NONE);
  imgHide(IMG_PANEL_A);
  imgHide(IMG_PANEL_B);
  imgHide(IMG_PANEL_C);
  imgHide(IMG_PANEL_L);
  imgHide(IMG_PANEL_O);
}

function panelShow(imgId)
{
  panelHide();
  imgShow(imgId);
}

function updateTermPanel(hasLock, lockId, lockTime, lockText)
{
  if (!isInside)
  {
    return 0; // just ignore
  }

  if (!hasLock)
  {
    if (!lockId || lockId.length <= 0)
    {
      // nobody has the lock
      panelShow(IMG_PANEL_NONE);
      return 0;
    }

    // somebody else has the lock
    if (lockText && lockText.length > 0)
    {
      switch (lockText[0])
      {
        case 'A':
          panelShow(IMG_PANEL_A);
          break;
        case 'B':
          panelShow(IMG_PANEL_B);
          break;
        case 'C':
          panelShow(IMG_PANEL_C);
          break;
        case 'L':
          panelShow(IMG_PANEL_L);
          break;
        case 'O':
          panelShow(IMG_PANEL_O);
          break;
        default:
          return 1; // alert error here ?
      }
      return 0;
    }
    return 0;
  }

  var termId = getTermId();
  if (hasLock)
  {
    if (lockId && lockId.length > 0 && termId.length > 0)
    {
      switch (termId[0])
      {
        case 'A':
          panelShow(IMG_PANEL_A);
          break;
        case 'B':
          panelShow(IMG_PANEL_B);
          break;
        case 'C':
          panelShow(IMG_PANEL_C);
          break;
        case 'L':
          panelShow(IMG_PANEL_L);
          break;
        case 'O':
          panelShow(IMG_PANEL_O);
          break;
        default:
          return 1; // alert error here ?
      }
      return 0;
    }
    return 0;
  }

  return 0; // should not get here ?
}

function lockInit()
{
  if (isInside)
  {
    checkTermId();
  }
  lockUpdateStatus();
}

function lockUpdateStatus()
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
        alert("Fel vid uppdatering av låsstatus: " + result);
        return;
      }

      // success
      lockHandleData(result, LOCK_MODE_LOAD);
    }
  }

  var str = php_dir + "socketExecuteCmd.php?port=" + encodeURIComponent(LOCK_SERVER_PORT) +
            "&endtag=" + encodeURIComponent(LOCK_ENDTAG) +
            "&errtag=" + encodeURIComponent(LOCK_ERRTAG) +
            "&timeout=" + encodeURIComponent(LOCK_SERVER_TIMEOUT) + "&p1=" + encodeURIComponent(LOCK_SERVER_CMD_LOAD);

  xmlhttp.open("POST", str, true);
  xmlhttp.send();
}

function lockHandleData(str, mode)
{
  var lockId = "";
  var lockTime = "";
  var lockText = "";

  lockStatusHasLock = 0; // must be set if we do have the lock after the function is done

  // find data start
  var indexStart = str.indexOf(LOCK_RESULT_START);
  if (indexStart < 0)
  {
    alert("Felaktig låsningsdata: " + str); // should not happen
    return 1;
  }

  // find data end
  var indexEnd = str.indexOf(LOCK_RESULT_END);
  if (indexEnd < 0)
  {
    alert("No data available (no end)");  // should not happen
    return 1;
  }

  var indexResultStart = indexStart + LOCK_RESULT_START.length;
  var resultstr = str.substring(indexResultStart, indexEnd);
  var tmparray = resultstr.split("\n");
  var i = 0, found = 0, retcode = 0;

  if (tmparray.length > 0)
  {
    var tmpstr = tmparray[0];

    // extract items
    var items = tmpstr.split(LOCK_DATA_DELIM);
    if (items.length < 3)
    {
      alert("Illegal str: " + tmpstr);
      return 1;
    }

    retcode = parseInt(items[0]);
    lockId = items[1];
    lockTime = items[2];
    lockText = items[3];
    found = 1;
  }

  if (!found)
  {
    alert("Could not get lock info from server"); // should not happen
    return 1;
  }

  lockStatusIsLocked = (lockId.length > 0 ? 1 : 0);

  if (mode == LOCK_MODE_LOAD)
  {
    if (lockStatusIsLocked)
    {
      if (lockId.length > 0 && getLockId() == lockId)
      {
        // we have the lock
        lockStatusHasLock = 1;
      }
    }
  }

  else if (mode == LOCK_MODE_GETLOCK)
  {
    if (retcode)
    {
      alert("Failed to lock");
      location.reload();
    }

    if (lockStatusIsLocked)
    {
      if (retcode == 0)
      {
        // we got the lock - set status and store lock id
        setLockId(lockId);
        lockStatusHasLock = 1;
      }
      else
      {
        // locked but we failed to get it (somebody else got it)
        setLockId("");
      }
    }
  }

  else if (mode == LOCK_MODE_RELEASE)
  {
    if (retcode)
    {
      alert("Failed to unlock");
      location.reload();
    }

    if (lockStatusIsLocked)
    {
      // we failed to release the lock - should not happen ?
      lockStatusHasLock = 1;
    }
  }

  updateTermPanel(lockStatusHasLock, lockId, lockTime, lockText);

  setTimeout(function(){ lockUpdateStatus(); }, LOCK_STATUS_UPDATE_TIMEOUT);
  return 0;
}

function lockToggle()
{
  if (lockStatusIsLocked)
  {
    // try to unlock
    lockDoUnlock();

    return;
  }

  // try to lock - will get result in lockHandleData()
  lockDoLock(getLockId());
}

function lockDoLock(localLockId)
{
  var cmd = LOCK_SERVER_CMD_GETLOCK;

  // add local lockId (normally empty since we normally dont have the lock)
  cmd += (" " + localLockId);

  // add our lock text
  cmd += (LOCK_DATA_DELIM + getLockText());

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var result = xmlhttp.responseText;

      // check for php error
      if (isPhpError(result))
      {
        alert("Lock error: " + result);
        return;
      }

      // success
      lockHandleData(result, LOCK_MODE_GETLOCK);
    }
  }

  var str = php_dir + "socketExecuteCmd.php?port=" + encodeURIComponent(LOCK_SERVER_PORT) +
            "&endtag=" + encodeURIComponent(LOCK_ENDTAG) +
            "&errtag=" + encodeURIComponent(LOCK_ERRTAG) +
            "&timeout=" + encodeURIComponent(LOCK_SERVER_TIMEOUT) + "&p1=" + encodeURIComponent(cmd);

  xmlhttp.open("POST", str, true);
  xmlhttp.send();
}

function lockDoUnlock()
{
  var cmd = LOCK_SERVER_CMD_RELEASE;

  // add current id
  cmd += (" " + getLockId());

  // add our lock text (should not be needed)
  cmd += (LOCK_DATA_DELIM + getLockText());

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var result = xmlhttp.responseText;

      // check for php error
      if (isPhpError(result))
      {
        alert("Unlock error: " + result);
        return;
      }

      // success
      lockHandleData(result, LOCK_MODE_RELEASE);
    }
  }

  var str = php_dir + "socketExecuteCmd.php?port=" + encodeURIComponent(LOCK_SERVER_PORT) +
            "&endtag=" + encodeURIComponent(LOCK_ENDTAG) +
            "&errtag=" + encodeURIComponent(LOCK_ERRTAG) +
            "&timeout=" + encodeURIComponent(LOCK_SERVER_TIMEOUT) + "&p1=" + encodeURIComponent(cmd);

  xmlhttp.open("POST", str, true);
  xmlhttp.send();
}


//
// init
//

function psinit()
{
  // read config
  psReadConfig();

  // when done -> will call psinit2()
}

function psinit2()
{
  //document.getElementById(DEBUG).innerHTML += (" init() 1");
  setBackgroundColor(BGCOLOR_NORMAL);
  setButtonToggleNormal();

  // clear some stuff
  initCommon();

  // init click area
  initClickarea();

  // start clock
  setClock();

  // init lock stuff
  lockInit();

  // get id (from url params)
  var url = location.href;
  var id = gup("id", url);
  globObjId = id;

  // set id field
  document.getElementById(FIELD_OBJID).innerHTML = id;

  addKeyListener();

  // create data link (SSE)
  createDataLink(id);

  updateImages("0320072001200120002000000000000000000000", "", ""); // AAA debug - initial moxa bits
}




//
// data handling
//

function handleChange(data, datetime)
{
  // get the moxa data bits (4 hex characters per moxa unit)
  var moxabitsStr = getDataToken(data, DATATOKEN_MOXABITS, 0);

  if (moxabitsStr)
  {
    // images
    updateImages(moxabitsStr, data, datetime);

    // texts
    updateTexts(moxabitsStr, data, datetime);
  }

  // scroll area
  updateScroll(data, datetime);
}

function updateImages(moxabitsStr, data, datetime)
{
  // set visibility for images (default is hidden) and possibly rotation and more
  var i = 0;
  for (i = 0; i < imageCount; i++)
  {
    var obj = imageArray[i];

    // visibility
    var visible = configGetVisibility(obj.id, moxabitsStr);
    if (visible != obj.visible)
    {
      var imgElem = document.getElementById(obj.id);
      if (imgElem)
      {
        // only try to set stuff if image exists

        // position
        var left = obj.x + XOFFS_BACKGROUND + "px";
        var top = obj.y + YOFFS_BACKGROUND + "px";
        imgElem.style.left = left;
        imgElem.style.top = top;

        // rotation
        if (obj.rotation)
        {
          imgElem.style.transform = "rotate(" + obj.rotation + "deg)";
        }

        // visibility
        imgElem.style.visibility = visible ? "visible" : "hidden";

        // special for stoppstallning and urbruk
        if (obj.id == ID_SPC_21_TA)
        {
          document.getElementById(ID_SPC_21_SL).style.visibility = "hidden";
          waitForResponse = 0;
        }
        else if (obj.id == ID_SPC_24_TA)
        {
          document.getElementById(ID_SPC_24_SL).style.visibility = "hidden";
          waitForResponse = 0;
        }
        else if (obj.id == ID_SPC_11_TA)
        {
          document.getElementById(ID_SPC_11_SL).style.visibility = "hidden";
          waitForResponse = 0;
        }
        else if (obj.id == ID_SPC_14_TA)
        {
          document.getElementById(ID_SPC_14_SL).style.visibility = "hidden";
          waitForResponse = 0;
        }
        else if (obj.id == ID_SPC_16_TA)
        {
          document.getElementById(ID_SPC_16_SL).style.visibility = "hidden";
          waitForResponse = 0;
        }
        else if (obj.id == ID_SIG_21_URB)
        {
          waitForResponse = 0;
        }
        else if (obj.id == ID_SIG_24_URB)
        {
          waitForResponse = 0;
        }
        else if (obj.id == ID_SIG_11_URB)
        {
          waitForResponse = 0;
        }
        else if (obj.id == ID_SIG_14_URB)
        {
          waitForResponse = 0;
        }
        else if (obj.id == ID_SIG_16_URB)
        {
          waitForResponse = 0;
        }
      }
    }
    obj.visible = visible;
  }
}

function imgGetHtml(obj)
{
  var visible = 1;
  var imgId = obj.id;
  var img = IMGPATH + obj.imgName;
  var classname = CLASS_IMG;

  // create html for image
  var str = '<img id="' + imgId + '" src="' + img + '" alt="" class="' + classname + '" style="z-index:1">';
  str += '\n';

  return str;
}


//
// texts (to be shown in layoyt)
//

function updateTexts(moxabitsStr, data, datetime)
{
  // create html
  var textDiv = document.getElementById(ID_DIV_TEXTS);
  var tmpHtml = '';
  var i = 0;

  for (i = 0; i < textCount; i++)
  {
    var obj = textArray[i];
    var txt = configGetText(obj, moxabitsStr);
    if (txt && txt.length > 0)
    {
      // this html will contain position (always visible here)
      tmpHtml += txt;
    }
  }
  textDiv.innerHTML = tmpHtml;
}



function initClickarea()
{
  // add click listener on the image area (click outside this area will behave normally)
  var clickArea = document.getElementById(BLOCK_CLICK_AREA);
  clickArea.addEventListener( "click", function(e)
  {
    var pos = getPosition(e);
    var x = pos.x - XOFFS_BACKGROUND;
    var y = pos.y - YOFFS_BACKGROUND;
    handleLeftclick(x, y);
  });


  // add key up listener
  window.onkeyup = function(e)
  {
    if ( e.keyCode === 27 )  // escape
    {
    }
  }
}


function handleLeftclick(x, y)
{
  document.getElementById(DEBUG).innerHTML += (" AAA leftclick, x: " + x + ", y: " + y);
}

function sendLogserverMessage(msg)
{
  var cmd = ";K;I" + globObjId + ";o" + msg + "\n";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      var result = xmlhttp.responseText;

      // check for php error
      if (isPhpError(result))
      {
        alert("Fel vid send log_server msg: " + result);
        waitForResponse = 0;
        return 1;
      }

      var resultarr = result.split(LOG_SERVER_ROW_DELIM);
      if (resultarr.length <= 0)
      {
        alert("Fel vid send log_server msg. Inget resultat returnerades.");
        waitForResponse = 0;
        return 1;
      }

      var status = parseInt(resultarr[0]);
      if (status != 0)
      {
        alert("Exekveringsfel vid send log_server msg: " + result);
        waitForResponse = 0;
        return 1;
      }

      // success - we are done (wait for message from log_server with new state)
      return 0;
    }
  }

  var str = php_dir + "socketExecuteCmd.php?port=" + encodeURIComponent(LOG_SERVER_PORT) +
            "&endtag=" + encodeURIComponent(LOG_SERVER_ENDTAG) +
            "&errtag=" + encodeURIComponent(LOG_SERVER_ERRTAG) +
            "&timeout=" + encodeURIComponent(LOG_SERVER_TIMEOUT) + "&p1=" + encodeURIComponent(cmd);

  xmlhttp.open("POST", str, true);
  xmlhttp.send();
  return 0;
}

function imgShow(id)
{
  var elem = document.getElementById(id);
  if (elem)
  {
    elem.style.visibility = "visible";
  }
}

function imgHide(id)
{
  var elem = document.getElementById(id);
  if (elem)
  {
    elem.style.visibility = "hidden";
  }
}

function isActionOk()
{
  var ret = 0;
  if (isInside && lockStatusHasLock && !waitForResponse)
  {
    ret = 1;
  }
  return ret;
}

function clickTermPanel()
{
  if (!isInside)
  {
    return 1; // silently ignore
  }

  if (checkTermId() != 0)
  {
    return 1;
  }

  if (!lockStatusIsLocked)
  {
    if (!confirm("Vill du aktivera terminalen?"))
    {
      // no
      return 0;
    }
    // yes

    lockDoLock("");
    return 0;
  }

  // somebody has the lock
  if (lockStatusHasLock)
  {
    if (!confirm("Vill du avaktivera terminalen?"))
    {
      // no
      return 0;
    }
    // yes

    lockDoUnlock();
    return 0;
  }

  return 0; // should not get here ?
}

function clickP581Signal()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_21_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_21_TA).style.visibility == "visible" ? 1 : 0);
  if (visible1 || visible2)
  {
    return; // silently ignore
  }
  imgShow(ID_SPC_21_SL);
}

function clickP581Stopp()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_21_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_21_TA).style.visibility == "visible" ? 1 : 0);

  if (visible1)
  {
    if (!confirm("Vill du stoppställa P581?"))
    {
      // no
      imgHide(ID_SPC_21_SL);
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_AE);
    return;
  }

  if (visible2)
  {
    if (!confirm("Vill du ta bort stoppställning av P581?"))
    {
      // no
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_AF);
    return;
  }
  return;
}

function clickP581Text()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible = (document.getElementById(ID_SIG_21_URB).style.visibility == "visible" ? 1 : 0);
  if (visible)
  {
    if (!confirm("Vill du ta signal P581 i bruk?"))
    {
      // no
      return;
    }

    // yes
    waitForResponse = 1;
    sendLogserverMessage(SET_LOW_URBRUK_P581);
    return;
  }

  if (!confirm("Vill du ta signal P581 ur bruk?"))
  {
    // no
    return;
  }

  // yes
  waitForResponse = 1;
  sendLogserverMessage(SET_HIGH_URBRUK_P581);
}

function clickP581Tagvag()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible = (document.getElementById(ID_SPC_21_TA).style.visibility == "visible" ? 1 : 0);
  if (visible)
  {
    alert("Signal P581 är stoppställd");
    return;
  }


  if (!confirm("Vill du ställa tågväg från P581?"))
  {
    // no
    return;
  }

  // yes
  waitForResponse = 1;
  sendLogserverMessage(SET_HIGH_AC);
}


function clickP582Signal()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_24_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_24_TA).style.visibility == "visible" ? 1 : 0);
  if (visible1 || visible2)
  {
    return; // silently ignore
  }
  imgShow(ID_SPC_24_SL);
}

function clickP582Stopp()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_24_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_24_TA).style.visibility == "visible" ? 1 : 0);

  if (visible1)
  {
    if (!confirm("Vill du stoppställa P582?"))
    {
      // no
      imgHide(ID_SPC_24_SL);
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_BE);
    return;
  }

  if (visible2)
  {
    if (!confirm("Vill du ta bort stoppställning av P582?"))
    {
      // no
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_BF);
    return;
  }
  return;
}

function clickP582Text()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible = (document.getElementById(ID_SIG_24_URB).style.visibility == "visible" ? 1 : 0);
  if (visible)
  {
    if (!confirm("Vill du ta signal P582 i bruk?"))
    {
      // no
      return;
    }

    // yes
    sendLogserverMessage(SET_LOW_URBRUK_P582);
    return;
  }

  if (!confirm("Vill du ta signal P582 ur bruk?"))
  {
    // no
    return;
  }

  // yes
  waitForResponse = 1;
  sendLogserverMessage(SET_HIGH_URBRUK_P582);
}


function clickP583Signal()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_11_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_11_TA).style.visibility == "visible" ? 1 : 0);
  if (visible1 || visible2)
  {
    return; // silently ignore
  }
  imgShow(ID_SPC_11_SL);
}

function clickP583Stopp()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_11_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_11_TA).style.visibility == "visible" ? 1 : 0);

  if (visible1)
  {
    if (!confirm("Vill du stoppställa P583?"))
    {
      // no
      imgHide(ID_SPC_11_SL);
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_CE);
    return;
  }

  if (visible2)
  {
    if (!confirm("Vill du ta bort stoppställning av P583?"))
    {
      // no
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_CF);
    return;
  }
  return;
}

function clickP583Text()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible = (document.getElementById(ID_SIG_11_URB).style.visibility == "visible" ? 1 : 0);
  if (visible)
  {
    if (!confirm("Vill du ta signal P583 i bruk?"))
    {
      // no
      return;
    }

    // yes
    sendLogserverMessage(SET_LOW_URBRUK_P583);
    return;
  }

  if (!confirm("Vill du ta signal P583 ur bruk?"))
  {
    // no
    return;
  }

  // yes
  waitForResponse = 1;
  sendLogserverMessage(SET_HIGH_URBRUK_P583);
}


function clickP584Signal()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_14_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_14_TA).style.visibility == "visible" ? 1 : 0);
  if (visible1 || visible2)
  {
    return; // silently ignore
  }
  imgShow(ID_SPC_14_SL);
}

function clickP584Stopp()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_14_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_14_TA).style.visibility == "visible" ? 1 : 0);

  if (visible1)
  {
    if (!confirm("Vill du stoppställa P584?"))
    {
      // no
      imgHide(ID_SPC_14_SL);
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_DE);
    return;
  }

  if (visible2)
  {
    if (!confirm("Vill du ta bort stoppställning av P584?"))
    {
      // no
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_DF);
    return;
  }
  return;
}

function clickP584Text()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible = (document.getElementById(ID_SIG_14_URB).style.visibility == "visible" ? 1 : 0);
  if (visible)
  {
    if (!confirm("Vill du ta signal P584 i bruk?"))
    {
      // no
      return;
    }

    // yes
    sendLogserverMessage(SET_LOW_URBRUK_P584);
    return;
  }

  if (!confirm("Vill du ta signal P584 ur bruk?"))
  {
    // no
    return;
  }

  // yes
  waitForResponse = 1;
  sendLogserverMessage(SET_HIGH_URBRUK_P584);
}


function clickP586Signal()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_16_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_16_TA).style.visibility == "visible" ? 1 : 0);
  if (visible1 || visible2)
  {
    return; // silently ignore
  }
  imgShow(ID_SPC_16_SL);
}

function clickP586Stopp()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible1 = (document.getElementById(ID_SPC_16_SL).style.visibility == "visible" ? 1 : 0);
  var visible2 = (document.getElementById(ID_SPC_16_TA).style.visibility == "visible" ? 1 : 0);

  if (visible1)
  {
    if (!confirm("Vill du stoppställa P586?"))
    {
      // no
      imgHide(ID_SPC_16_SL);
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_EE);
    return;
  }

  if (visible2)
  {
    if (!confirm("Vill du ta bort stoppställning av P586?"))
    {
      // no
      return;
    }

    // yes
    waitForResponse = 1; // button disabled until response received which will also hide the button
    sendLogserverMessage(SET_HIGH_EF);
    return;
  }
  return;
}

function clickP586Text()
{
  if (!isActionOk())
  {
    return; // silently ignore
  }

  var visible = (document.getElementById(ID_SIG_16_URB).style.visibility == "visible" ? 1 : 0);
  if (visible)
  {
    if (!confirm("Vill du ta signal P586 i bruk?"))
    {
      // no
      return;
    }

    // yes
    sendLogserverMessage(SET_LOW_URBRUK_P586);
    return;
  }

  if (!confirm("Vill du ta signal P586 ur bruk?"))
  {
    // no
    return;
  }

  // yes
  waitForResponse = 1;
  sendLogserverMessage(SET_HIGH_URBRUK_P586);
}
