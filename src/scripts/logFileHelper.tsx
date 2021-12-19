import { processData } from './logfileRowHandler'

var clockTimeout: any = 0;
var playTimeout = 0;
var PLAY_SPEED_DEFAULT = "1";
var CALLER_STEP_TIME = 1;
var FIELD_OBJID = "fieldObjId";

var FIELD_CLOCK = "fieldClock";
var FIELD_STEP_TIME = "fieldStepTime";
var FIELD_PLAY_SPEED = "fieldPlaySpeed";
var BUTTON_STEP_TOGGLE = "bStepToggle";
var BLOCK_STEP_FUNCTIONS = "blockStepFunctions";
var BLOCK_CLOCK = "blockClock";
var isStepMode = 0;
var stepCurrNumFile = 0;
var CALLER_STEP_TIME = 1;
var CALLER_STEP_NEXT = 2;
var CALLER_STEP_PREV = 3;
var CALLER_STEP_JUMPFORWARD = 4;
var CALLER_STEP_JUMPBACK = 5;
var isPlaying = false;
var playTimeout = 0;
var playSpeed = PLAY_SPEED_DEFAULT;
var LOGSTART_TIME = "03:00:00";
var lastWantedDatetime = 0;

var currScrollRowsLimit = WEBSTEP_DEFAULT_SCROLL;

var WEBSTEP_PORT_HANDLER = 1038;             // port to webstephandler
var WEBSTEP_PORT_GETTER = 1052;              // port to webstepgetter
var WEBSTEP_ERRTAG = "#WEBSTEP_CMD: ERROR";
var WEBSTEP_ENDTAG = "#WEBSTEP_END";
var WEBSTEP_DEFAULT_SCROLL = 2000;
var WEBSTEP_PARAMS_DELIM = ";";
var WEBSTEP_CMD_GET_STEP_TIME = "t";
var WEBSTEP_CMD_GET_STEP_NEXT = "n";
var WEBSTEP_CMD_GET_STEP_PREV = "p";


function getDateTime(theDate: any)
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
  clockTimeout = setTimeout(function () { setClock(); }, 1000);
  (document.getElementById("fieldClock") as HTMLInputElement).value = datetimeStr;
}

function stopClock()
{
  if (clockTimeout)
  {
    clearTimeout(clockTimeout);
    clockTimeout = 0;
  }
}

function stepTime()
{
  playStop();
  // if (!isStepMode)
  // {
  //   return 1;
  // }
  var datetimeValue = (document.getElementById("fieldStepTime") as HTMLInputElement).value;
  stopClock();
  stepToDatetime(datetimeValue, CALLER_STEP_TIME);
}

function stepNext(playing: boolean)
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
  var datetimeStr = "T" + (document.getElementById("fieldStepTime") as HTMLInputElement).value;
  socketExecuteCmd(CALLER_STEP_NEXT);
  return 0;
}

function stepPrev(playing: boolean)
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
  var datetimeStr = "T" + (document.getElementById("fieldStepTime") as HTMLInputElement).value;
  socketExecuteCmd(CALLER_STEP_PREV);
}

function setPlaySpeed()
{
  var tmpspeed = parseInt((document.getElementById("fieldPlaySpeed") as HTMLInputElement).value);
  if (isNaN(tmpspeed) || tmpspeed <= 0)
  {
    alert("Fart ska vara heltal större än 0.");
    (document.getElementById("fieldPlaySpeed") as HTMLInputElement).value = PLAY_SPEED_DEFAULT;
    playSpeed = PLAY_SPEED_DEFAULT;
    return 1;
  }
  playSpeed = tmpspeed.toString();
  return 0;
}

function playBack()
{
  playStop();
  if (setPlaySpeed())
  {
    return 1;
  }

  isPlaying = true;
  stepPrev(true);
  return 0;
}

function playForward()
{
  playStop();
  if (setPlaySpeed())
  {
    return 1;
  }

  isPlaying = true;
  stepNext(true);
  return 0;
}

function playStop()
{
  isPlaying = false;
  if (playTimeout)
  {
    clearTimeout(playTimeout);
    playTimeout = 0;
  }
}

function initCommon()
{
  (document.getElementById("fieldPlaySpeed") as HTMLInputElement).value = PLAY_SPEED_DEFAULT;
}

function stepToggle()
{
  if (!isStepMode)
  {
    // stepmode on
    isStepMode = 1;
    stepCurrNumFile = 0;
    stopClock();
    stepToDatetime(getDateTime(0), CALLER_STEP_TIME);
  }
  else
  {
    // stepmode off
    isStepMode = 0;
    // location.reload();
  }
}

function stepToDatetime(datetimeValue: string, caller: number)
{
  playStop();
  // if (!isStepMode)
  //   return 1;

  var switchId = document.getElementById(FIELD_OBJID).innerHTML;
  var datetimeStr = "T" + datetimeValue;
  if (datetimeStr.length < 20)
  {
    alert("Ange korrekt tidsformat: (YYYY-MM-DD HH:MI:SS[.sss])");
    return 1;
  }
  lastWantedDatetime = parseInt(datetimeValue);

  var force = 0;
  var wantedDate = createDateObjFromStepDatetime(datetimeStr);
  var nowDate = new Date();
  var logstartDate = new Date(nowDate.valueOf()); // a copy of nowDate

  if (caller == CALLER_STEP_JUMPFORWARD || caller == CALLER_STEP_JUMPBACK)
  {
    // do not force a new step file when executing jump commands
    force = 0;
  }

  socketExecuteCmd(caller);

  return 0;
}

function createDateObjFromStepDatetime(datetimeStr: string)
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


function socketExecuteCmd(caller: number)
{
  fetch('wgtestdata.txt')
  .then(response => response.text())
  .then(text => socketExecuteConfirm(caller, text));
}

function socketExecuteConfirm(caller: number, result: string)
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
    // var status = parseInt(resultarr[0]);
    // if (status != 0)
    // {
    //   playStop();
    //   alert("Historikkommandot misslyckades. Felmeddelande: " + result);
    //   return 1;
    // }
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

    // if (stepIsIllegal(caller, resultarr[6+resultRowsCount]))
    // {
    //   playStop();
    //   return 1;
    // }

    var wantedRowNumLocal = parseInt(resultarr[4]);  // row nr among the resulting rows
    stepCurrNumFile = tmpNumFile;                    // current row in step file
    var scrollRows = parseInt(resultarr[6]);         // scrollrows limit in the step file

    // now just add the data rows
    for (var i = 0; i < resultarr.length; i++) {
      processData(resultarr[i]);
    }

    // continue playing ?
    if (isPlaying)
    {
      handlePlaying(caller);
    } 
  }
  return 0;
}

export { stepToggle, initCommon, stepTime, stepPrev, stepNext, playBack, playStop, playForward, setClock }

