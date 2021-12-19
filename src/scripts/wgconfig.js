var CONFIG_FILE = "./src/wgconfig.txt";
var TXT_NOT_FOUND = "was not found on this server";
var IMAGE_MIN_ITEMS = 5; // sectionNr;id;imgName;posX;posY;[rotation;]
var TEXT_MIN_ITEMS = 5;  // sectionNr;id;text;posX;posY;[rotation;]

var MOXA_CHARS = 36;     // total number of chars for all (real) moxa units (4 per unit)


// these id must match id in the config file


//
// images
//

// spl 10
var ID_SPL_142_FE = "SPL_142_FE";
var ID_SPL_142_FL = "SPL_142_FL";
var ID_SPL_142_B = "SPL_142_B";

// spl 11
var ID_SPL_111_FE = "SPL_111_FE";
var ID_SPL_111_FL = "SPL_111_FL";
var ID_SPL_111_B = "SPL_111_B";

// spl 12
var ID_SPL_144_FE = "SPL_144_FE";
var ID_SPL_144_FL = "SPL_144_FL";
var ID_SPL_144_B = "SPL_144_B";

// spl 13
var ID_SPL_113_FE = "SPL_113_FE";
var ID_SPL_113_FL = "SPL_113_FL";
var ID_SPL_113_B = "SPL_113_B";

// spl 14
var ID_SPL_162_FE = "SPL_162_FE";
var ID_SPL_162_FL = "SPL_162_FL";
var ID_SPL_162_B = "SPL_162_B";

// spl 15
var ID_SPL_219_FE = "SPL_219_FE";
var ID_SPL_219_FL = "SPL_219_FL";
var ID_SPL_219_B = "SPL_219_B";

// spl 17
var ID_SPL_217_FE = "SPL_217_FE";
var ID_SPL_217_FL = "SPL_217_FL";
var ID_SPL_217_B = "SPL_217_B";

// spl 19
var ID_SPL_215_FE = "SPL_215_FE";
var ID_SPL_215_FL = "SPL_215_FL";
var ID_SPL_215_B = "SPL_215_B";

// spl 21
var ID_SPL_213_FE = "SPL_213_FE";
var ID_SPL_213_FL = "SPL_213_FL";
var ID_SPL_213_B = "SPL_213_B";

// spl 23
var ID_SPL_211_FE = "SPL_211_FE";
var ID_SPL_211_FL = "SPL_211_FL";
var ID_SPL_211_B = "SPL_211_B";

// spl 25
var ID_SPL_224_FE = "SPL_224_FE";
var ID_SPL_224_FL = "SPL_224_FL";
var ID_SPL_224_B = "SPL_224_B";

// spl 27
var ID_SPL_222_FE = "SPL_222_FE";
var ID_SPL_222_FL = "SPL_222_FL";
var ID_SPL_222_B = "SPL_222_B";


// si 1 - P581
var ID_SIG_21_RTR = "SIG_21_RTR";
var ID_SIG_21_STP = "SIG_21_STP";
var ID_SIG_21_URB = "SIG_21_URB";

// si 2 - P582
var ID_SIG_24_RTR = "SIG_24_RTR";
var ID_SIG_24_STP = "SIG_24_STP";
var ID_SIG_24_URB = "SIG_24_URB";

// si 3 - P583
var ID_SIG_11_RTR = "SIG_11_RTR";
var ID_SIG_11_STP = "SIG_11_STP";
var ID_SIG_11_URB = "SIG_11_URB";

// si 4 - P584
var ID_SIG_14_RTR = "SIG_14_RTR";
var ID_SIG_14_STP = "SIG_14_STP";
var ID_SIG_14_URB = "SIG_14_URB";

// si 6 - P586
var ID_SIG_16_RTR = "SIG_16_RTR";
var ID_SIG_16_STP = "SIG_16_STP";
var ID_SIG_16_URB = "SIG_16_URB";


// stoppstallning buttons
// P581
var ID_SPC_21_TA = "SPC_21_TA";
var ID_SPC_21_SL = "SPC_21_SL";

// P582
var ID_SPC_24_TA = "SPC_24_TA";
var ID_SPC_24_SL = "SPC_24_SL";

// P583
var ID_SPC_11_TA = "SPC_11_TA";
var ID_SPC_11_SL = "SPC_11_SL";

// P584
var ID_SPC_14_TA = "SPC_14_TA";
var ID_SPC_14_SL = "SPC_14_SL";

// P586
var ID_SPC_16_TA = "SPC_16_TA";
var ID_SPC_16_SL = "SPC_16_SL";


// AAA check this

// arrows
var ID_TV0200_1 = "tv0200_1";
var ID_TV0200_2 = "tv0200_2";
var ID_TV0200_3 = "tv0200_3";
var ID_TV0200_4 = "tv0200_4";
var ID_TV0200_5 = "tv0200_5";
var ID_TV0200_6 = "tv0200_6";

var ID_TV0204_1 = "tv0204_1";
var ID_TV0204_2 = "tv0204_2";
var ID_TV0204_3 = "tv0204_3";
var ID_TV0204_4 = "tv0204_4";
var ID_TV0204_5 = "tv0204_5";
var ID_TV0204_6 = "tv0204_6";

var ID_TV0307_1 = "tv0307_1";
var ID_TV0307_2 = "tv0307_2";
var ID_TV0307_3 = "tv0307_3";
var ID_TV0307_4 = "tv0307_4";
var ID_TV0307_5 = "tv0307_5";
var ID_TV0307_6 = "tv0307_6";

var ID_TV0309_1 = "tv0309_1";
var ID_TV0309_2 = "tv0309_2";
var ID_TV0309_3 = "tv0309_3";
var ID_TV0309_4 = "tv0309_4";
var ID_TV0309_5 = "tv0309_5";
var ID_TV0309_6 = "tv0309_6";

var ID_TV0507_1 = "tv0507_1";
var ID_TV0507_2 = "tv0507_2";
var ID_TV0507_3 = "tv0507_3";
var ID_TV0507_4 = "tv0507_4";
var ID_TV0507_5 = "tv0507_5";
var ID_TV0507_6 = "tv0507_6";

var ID_TV0509_1 = "tv0509_1";
var ID_TV0509_2 = "tv0509_2";
var ID_TV0509_3 = "tv0509_3";
var ID_TV0509_4 = "tv0509_4";
var ID_TV0509_5 = "tv0509_5";
var ID_TV0509_6 = "tv0509_6";


//
// texts - AAA check this
//
var TXT_VX124_1 = "txt_vx124_1";
var TXT_VX124_2 = "txt_vx124_2";
var TXT_VX124_3 = "txt_vx124_3";
var TXT_VX124_4 = "txt_vx124_4";
var TXT_VX124_5 = "txt_vx124_5";
var TXT_VX126_1 = "txt_vx126_1";
var TXT_VX126_2 = "txt_vx126_2";
var TXT_VX126_3 = "txt_vx126_3";
var TXT_VX126_4 = "txt_vx126_4";
var TXT_VX126_5 = "txt_vx126_5";


//
// images
//

var imageArray = [];
var imageCount = 0;

var textArray = [];
var textCount = 0;

function configClear()
{
  imageArray = [];
  imageCount = 0;

  textArray = [];
  textCount = 0;
}

function imageInfo (id, imgName, x, y, rotation)
{
  this.id = id;
  this.imgName = imgName;
  // lefttop as integers
  this.x = parseInt(x);
  this.y = parseInt(y);

  // rotation is optional in config file - "0" or "" -> no rotation (0)
  var tmp = parseInt(rotation);
  this.rotation = isNaN(tmp) ? 0 : tmp;

  // default values
  this.visible = 0;
}

function imageLocalAdd(id, imgName, x, y, rotation)
{
  var obj = new imageInfo(id, imgName, x, y, rotation);

  imageArray[imageCount] = obj;
  imageCount++;
}


//
// texts
//

function textInfo (id, text, posX, posY, rotation)
{
  this.id = id;
  this.text = text;
  this.posX = parseInt(posX); // x (left) and y (top) as integers
  this.posY = parseInt(posY);

  // rotation is optional in config file - "0" or "" -> no rotation (0)
  var tmp = parseInt(rotation);
  this.rotation = isNaN(tmp) ? 0 : tmp;

  // default values
  this.visible = 0;
}

function textLocalAdd(id, text, posX, posY, rotation)
{
  var obj = new textInfo(id, text, posX, posY, rotation);

  textArray[textCount] = obj;
  textCount++;
}


//
// read and handle config
//

function psReadConfig()
{
  //document.getElementById(DEBUG).innerHTML += (" psReadConfig() 1");

  var client = new XMLHttpRequest();
  client.open('GET', CONFIG_FILE);
  client.onreadystatechange = function()
  {
    if (client.readyState==4 && client.status==200)
    {
      psHandleConfig(client.responseText);
    }
    else if (client.readyState == 4)
    {
      psCheckConfigError(client.responseText);
    }
  }
  client.send();
}

function psCheckConfigError(txt)
{
  if (txt)
  {
    // check for not found
    if (txt.indexOf(TXT_NOT_FOUND) >= 0)
    {
      alert("Warning: no config file: " + CONFIG_FILE);
    }
  }
}

function psHandleConfig(txt)
{
  var rowArray = txt.trim().split("\n");
  var len = rowArray.length, i = 0;

  for (i = 0; i < len; i++)
  {
    var row = rowArray[i];
    var items = row.split(";");
    var rotation = "";

    if (items.length < 1)
    {
      continue;
    }

    var sectionNr = items[0];

    if (sectionNr == "1")
    {
      // image
      if (items.length >= IMAGE_MIN_ITEMS)
      {
        if (items.length >= IMAGE_MIN_ITEMS + 1)
        {
          rotation = items[IMAGE_MIN_ITEMS + 1]; // rotation is optional
        }
        imageLocalAdd(items[1], items[2], items[3], items[4], rotation);
      }
    }
    else if (sectionNr == "2")
    {
      // text
      if (items.length >= TEXT_MIN_ITEMS)
      {
        if (items.length >= TEXT_MIN_ITEMS + 1)
        {
          rotation = items[TEXT_MIN_ITEMS + 1]; // rotation is optional
        }
        textLocalAdd(items[1], items[2], items[3], items[4], rotation);
      }
    }
    // else just ignore
  }

  psPostConfig();
}

function psPostConfig()
{
  psinit2();
}


//
// logic conditions for image visibility
//



function configGetVisibility(id, moxabitsStr)
{
  var svgElement = id;

  // spl 10
  if (svgElement === "S10") {
    let color = "grey";
    if (isS10Grey(moxabitsStr)) color = "grey";
    if (isS10Green(moxabitsStr)) color = "green";
    if (isS10Red(moxabitsStr)) color = "red";
    return color;
  }


  // spl 11
  if (svgElement == ID_SPL_111_FE)
    return isVisibleSPL_111_FE(moxabitsStr);
  if (svgElement == ID_SPL_111_FL)
    return isVisibleSPL_111_FL(moxabitsStr);
  if (svgElement == ID_SPL_111_B)
    return isVisibleSPL_111_B(moxabitsStr);

  // spl 12
  if (svgElement == ID_SPL_144_FE)
    return isVisibleSPL_144_FE(moxabitsStr);
  if (svgElement == ID_SPL_144_FL)
    return isVisibleSPL_144_FL(moxabitsStr);
  if (svgElement == ID_SPL_144_B)
    return isVisibleSPL_144_B(moxabitsStr);

  // spl 13
  if (svgElement == ID_SPL_113_FE)
    return isVisibleSPL_113_FE(moxabitsStr);
  if (svgElement == ID_SPL_113_FL)
    return isVisibleSPL_113_FL(moxabitsStr);
  if (svgElement == ID_SPL_113_B)
    return isVisibleSPL_113_B(moxabitsStr);

  // spl 14
  if (svgElement == ID_SPL_162_FE)
    return isVisibleSPL_162_FE(moxabitsStr);
  if (svgElement == ID_SPL_162_FL)
    return isVisibleSPL_162_FL(moxabitsStr);
  if (svgElement == ID_SPL_162_B)
    return isVisibleSPL_162_B(moxabitsStr);

  // spl 15
  if (svgElement == ID_SPL_219_FE)
    return isVisibleSPL_219_FE(moxabitsStr);
  if (svgElement == ID_SPL_219_FL)
    return isVisibleSPL_219_FL(moxabitsStr);
  if (svgElement == ID_SPL_219_B)
    return isVisibleSPL_219_B(moxabitsStr);

  // spl 17
  if (svgElement == ID_SPL_217_FE)
    return isVisibleSPL_217_FE(moxabitsStr);
  if (svgElement == ID_SPL_217_FL)
    return isVisibleSPL_217_FL(moxabitsStr);
  if (svgElement == ID_SPL_217_B)
    return isVisibleSPL_217_B(moxabitsStr);

  // spl 19
  if (svgElement == ID_SPL_215_FE)
    return isVisibleSPL_215_FE(moxabitsStr);
  if (svgElement == ID_SPL_215_FL)
    return isVisibleSPL_215_FL(moxabitsStr);
  if (svgElement == ID_SPL_215_B)
    return isVisibleSPL_215_B(moxabitsStr);

  // spl 21
  if (svgElement == ID_SPL_213_FE)
    return isVisibleSPL_213_FE(moxabitsStr);
  if (svgElement == ID_SPL_213_FL)
    return isVisibleSPL_213_FL(moxabitsStr);
  if (svgElement == ID_SPL_213_B)
    return isVisibleSPL_213_B(moxabitsStr);

  // spl 23
  if (svgElement == ID_SPL_211_FE)
    return isVisibleSPL_211_FE(moxabitsStr);
  if (svgElement == ID_SPL_211_FL)
    return isVisibleSPL_211_FL(moxabitsStr);
  if (svgElement == ID_SPL_211_B)
    return isVisibleSPL_211_B(moxabitsStr);

  // spl 25
  if (svgElement == ID_SPL_224_FE)
    return isVisibleSPL_224_FE(moxabitsStr);
  if (svgElement == ID_SPL_224_FL)
    return isVisibleSPL_224_FL(moxabitsStr);
  if (svgElement == ID_SPL_224_B)
    return isVisibleSPL_224_B(moxabitsStr);

  // spl 27
  if (svgElement == ID_SPL_222_FE)
    return isVisibleSPL_222_FE(moxabitsStr);
  if (svgElement == ID_SPL_222_FL)
    return isVisibleSPL_222_FL(moxabitsStr);
  if (svgElement == ID_SPL_222_B)
    return isVisibleSPL_222_B(moxabitsStr);


  // si 1 - P581
  if (svgElement == ID_SIG_21_RTR)
    return isVisibleSIG_21_RTR(moxabitsStr);
  if (svgElement == ID_SIG_21_STP)
    return isVisibleSIG_21_STP(moxabitsStr);
  if (svgElement == ID_SIG_21_URB)
    return isVisibleSIG_21_URB(moxabitsStr);

  // si 2 - P582
  if (svgElement == ID_SIG_24_RTR)
    return isVisibleSIG_24_RTR(moxabitsStr);
  if (svgElement == ID_SIG_24_STP)
    return isVisibleSIG_24_STP(moxabitsStr);
  if (svgElement == ID_SIG_24_URB)
    return isVisibleSIG_24_URB(moxabitsStr);

  // si 3 - P583
  if (svgElement == ID_SIG_11_RTR)
    return isVisibleSIG_11_RTR(moxabitsStr);
  if (svgElement == ID_SIG_11_STP)
    return isVisibleSIG_11_STP(moxabitsStr);
  if (svgElement == ID_SIG_11_URB)
    return isVisibleSIG_11_URB(moxabitsStr);

  // si 4 - P584
  if (svgElement == ID_SIG_14_RTR)
    return isVisibleSIG_14_RTR(moxabitsStr);
  if (svgElement == ID_SIG_14_STP)
    return isVisibleSIG_14_STP(moxabitsStr);
  if (svgElement == ID_SIG_14_URB)
    return isVisibleSIG_14_URB(moxabitsStr);

  // si 6 - P586
  if (svgElement == ID_SIG_16_RTR)
    return isVisibleSIG_16_RTR(moxabitsStr);
  if (svgElement == ID_SIG_16_STP)
    return isVisibleSIG_16_STP(moxabitsStr);
  if (svgElement == ID_SIG_16_URB)
    return isVisibleSIG_16_URB(moxabitsStr);


  // stoppstallning button for P581
  if (svgElement == ID_SPC_21_TA)
    return isVisibleSPC_21_TA(moxabitsStr);

  // stoppstallning button for P582
  if (svgElement == ID_SPC_24_TA)
    return isVisibleSPC_24_TA(moxabitsStr);

  // stoppstallning button for P583
  if (svgElement == ID_SPC_11_TA)
    return isVisibleSPC_11_TA(moxabitsStr);

  // stoppstallning button for P584
  if (svgElement == ID_SPC_14_TA)
    return isVisibleSPC_14_TA(moxabitsStr);

  // stoppstallning button for P586
  if (svgElement == ID_SPC_16_TA)
    return isVisibleSPC_16_TA(moxabitsStr);


  // AAA check this

  // arrows

  if (svgElement == ID_TV0200_1)
    return isVisibleTv0200_1(moxabitsStr);
  if (svgElement == ID_TV0200_2)
    return isVisibleTv0200_2(moxabitsStr);
  if (svgElement == ID_TV0200_3)
    return isVisibleTv0200_3(moxabitsStr);
  if (svgElement == ID_TV0200_4)
    return isVisibleTv0200_4(moxabitsStr);
  if (svgElement == ID_TV0200_5)
    return isVisibleTv0200_5(moxabitsStr);
  if (svgElement == ID_TV0200_6)
    return isVisibleTv0200_6(moxabitsStr);

  if (svgElement == ID_TV0204_1)
    return isVisibleTv0204_1(moxabitsStr);
  if (svgElement == ID_TV0204_2)
    return isVisibleTv0204_2(moxabitsStr);
  if (svgElement == ID_TV0204_3)
    return isVisibleTv0204_3(moxabitsStr);
  if (svgElement == ID_TV0204_4)
    return isVisibleTv0204_4(moxabitsStr);
  if (svgElement == ID_TV0204_5)
    return isVisibleTv0204_5(moxabitsStr);
  if (svgElement == ID_TV0204_6)
    return isVisibleTv0204_6(moxabitsStr);

  if (svgElement == ID_TV0307_1)
    return isVisibleTv0307_1(moxabitsStr);
  if (svgElement == ID_TV0307_2)
    return isVisibleTv0307_2(moxabitsStr);
  if (svgElement == ID_TV0307_3)
    return isVisibleTv0307_3(moxabitsStr);
  if (svgElement == ID_TV0307_4)
    return isVisibleTv0307_4(moxabitsStr);
  if (svgElement == ID_TV0307_5)
    return isVisibleTv0307_5(moxabitsStr);
  if (svgElement == ID_TV0307_6)
    return isVisibleTv0307_6(moxabitsStr);

  if (svgElement == ID_TV0309_1)
    return isVisibleTv0309_1(moxabitsStr);
  if (svgElement == ID_TV0309_2)
    return isVisibleTv0309_2(moxabitsStr);
  if (svgElement == ID_TV0309_3)
    return isVisibleTv0309_3(moxabitsStr);
  if (svgElement == ID_TV0309_4)
    return isVisibleTv0309_4(moxabitsStr);
  if (svgElement == ID_TV0309_5)
    return isVisibleTv0309_5(moxabitsStr);
  if (svgElement == ID_TV0309_6)
    return isVisibleTv0309_6(moxabitsStr);

  if (svgElement == ID_TV0507_1)
    return isVisibleTv0507_1(moxabitsStr);
  if (svgElement == ID_TV0507_2)
    return isVisibleTv0507_2(moxabitsStr);
  if (svgElement == ID_TV0507_3)
    return isVisibleTv0507_3(moxabitsStr);
  if (svgElement == ID_TV0507_4)
    return isVisibleTv0507_4(moxabitsStr);
  if (svgElement == ID_TV0507_5)
    return isVisibleTv0507_5(moxabitsStr);
  if (svgElement == ID_TV0507_6)
    return isVisibleTv0507_6(moxabitsStr);

  if (svgElement == ID_TV0509_1)
    return isVisibleTv0509_1(moxabitsStr);
  if (svgElement == ID_TV0509_2)
    return isVisibleTv0509_2(moxabitsStr);
  if (svgElement == ID_TV0509_3)
    return isVisibleTv0509_3(moxabitsStr);
  if (svgElement == ID_TV0509_4)
    return isVisibleTv0509_4(moxabitsStr);
  if (svgElement == ID_TV0509_5)
    return isVisibleTv0509_5(moxabitsStr);
  if (svgElement == ID_TV0509_6)
    return isVisibleTv0509_6(moxabitsStr);

  return 0; //  not visible
}

// spl 10
function isS10Grey(moxabitsStr)
{
  var ret = 0;
  // D5 && !D2
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D5 = (dBits & 0x0020) ? 1 : 0;
    var D2 = (dBits & 0x0004) ? 1 : 0;
    if (D5 && !D2)
      ret = 1
  }
  return ret;
}

function isS10Green(moxabitsStr)
{
  var ret = 0;
  // D5 && D2
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D5 = (dBits & 0x0020) ? 1 : 0;
    var D2 = (dBits & 0x0004) ? 1 : 0;
    if (D5 && D2)
      ret = 1
  }
  return ret;
}

function isS10Red(moxabitsStr)
{
  var ret = 0;
  // !D5
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D5 = (dBits & 0x0020) ? 1 : 0;
    if (!D5)
      ret = 1
  }
  return ret;
}

// spl 11
function isVisibleSPL_111_FE(moxabitsStr)
{
  var ret = 0;
  // C5 && !C2
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C5 = (cBits & 0x0020) ? 1 : 0;
    var C2 = (cBits & 0x0004) ? 1 : 0;
    if (C5 && !C2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_111_FL(moxabitsStr)
{
  var ret = 0;
  // C5 && C2
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C5 = (cBits & 0x0020) ? 1 : 0;
    var C2 = (cBits & 0x0004) ? 1 : 0;
    if (C5 && C2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_111_B(moxabitsStr)
{
  var ret = 0;
  // !C5
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C5 = (cBits & 0x0020) ? 1 : 0;
    if (!C5)
      ret = 1
  }
  return ret;
}

// spl 12
function isVisibleSPL_144_FE(moxabitsStr)
{
  var ret = 0;
  // D8 && !D2
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D8 = (dBits & 0x0100) ? 1 : 0;
    var D2 = (dBits & 0x0004) ? 1 : 0;
    if (D8 && !D2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_144_FL(moxabitsStr)
{
  var ret = 0;
  // D8 && D2
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D8 = (dBits & 0x0100) ? 1 : 0;
    var D2 = (dBits & 0x0004) ? 1 : 0;
    if (D8 && D2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_144_B(moxabitsStr)
{
  var ret = 0;
  // !D8
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D8 = (dBits & 0x0100) ? 1 : 0;
    if (!D8)
      ret = 1
  }
  return ret;
}

// spl 13
function isVisibleSPL_113_FE(moxabitsStr)
{
  var ret = 0;
  // C8 && !C2
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C8 = (cBits & 0x0100) ? 1 : 0;
    var C2 = (cBits & 0x0004) ? 1 : 0;
    if (C8 && !C2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_113_FL(moxabitsStr)
{
  var ret = 0;
  // C8 && C2
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C8 = (cBits & 0x0100) ? 1 : 0;
    var C2 = (cBits & 0x0004) ? 1 : 0;
    if (C8 && C2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_113_B(moxabitsStr)
{
  var ret = 0;
  // !C8
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C8 = (cBits & 0x0100) ? 1 : 0;
    if (!C8)
      ret = 1
  }
  return ret;
}

// spl 14
function isVisibleSPL_162_FE(moxabitsStr)
{
  var ret = 0;
  // E5 && !E2
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    var eBits = parseInt(moxabitsStr.substring(16, 20), 16);
    var E5 = (eBits & 0x0020) ? 1 : 0;
    var E2 = (eBits & 0x0004) ? 1 : 0;
    if (E5 && !E2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_162_FL(moxabitsStr)
{
  var ret = 0;
  // E5 && E2
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    var eBits = parseInt(moxabitsStr.substring(16, 20), 16);
    var E5 = (eBits & 0x0020) ? 1 : 0;
    var E2 = (eBits & 0x0004) ? 1 : 0;
    if (E5 && E2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_162_B(moxabitsStr)
{
  var ret = 0;
  // !E5
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    var eBits = parseInt(moxabitsStr.substring(16, 20), 16);
    var E5 = (eBits & 0x0020) ? 1 : 0;
    if (!E5)
      ret = 1
  }
  return ret;
}

// spl 15
function isVisibleSPL_219_FE(moxabitsStr)
{
  var ret = 0;
  // B8 && !A2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B8 = (bBits & 0x0100) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    if (B8 && !A2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_219_FL(moxabitsStr)
{
  var ret = 0;
  // B8 && A2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B8 = (bBits & 0x0100) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    if (B8 && A2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_219_B(moxabitsStr)
{
  var ret = 0;
  // !B8
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B8 = (bBits & 0x0100) ? 1 : 0;
    if (!B8)
      ret = 1
  }
  return ret;
}

// spl 17
function isVisibleSPL_217_FE(moxabitsStr)
{
  var ret = 0;
  // B9 && !A2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B9 = (bBits & 0x0200) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    if (B9 && !A2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_217_FL(moxabitsStr)
{
  var ret = 0;
  // B9 && A2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B9 = (bBits & 0x0200) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    if (B9 && A2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_217_B(moxabitsStr)
{
  var ret = 0;
  // !B9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B9 = (bBits & 0x0200) ? 1 : 0;
    if (!B9)
      ret = 1
  }
  return ret;
}

// spl 19
function isVisibleSPL_215_FE(moxabitsStr)
{
  var ret = 0;
  // B5 && !A2 && !B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B5 = (bBits & 0x0020) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    var B2 = (bBits & 0x0004) ? 1 : 0;
    if (B5 && !A2 && !B2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_215_FL(moxabitsStr)
{
  var ret = 0;
  // B5 && (A2 || B2)
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B5 = (bBits & 0x0020) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    var B2 = (bBits & 0x0004) ? 1 : 0;
    if (B5 && (A2 || B2))
      ret = 1
  }
  return ret;
}

function isVisibleSPL_215_B(moxabitsStr)
{
  var ret = 0;
  // !B5
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B5 = (bBits & 0x0020) ? 1 : 0;
    if (!B5)
      ret = 1
  }
  return ret;
}

// spl 21
function isVisibleSPL_213_FE(moxabitsStr)
{
  var ret = 0;
  // BA && !A2 && !B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var BA = (bBits & 0x0400) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    var B2 = (bBits & 0x0004) ? 1 : 0;
    if (BA && !A2 && !B2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_213_FL(moxabitsStr)
{
  var ret = 0;
  // BA && (A2 || B2)
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var BA = (bBits & 0x0400) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    var B2 = (bBits & 0x0004) ? 1 : 0;
    if (BA && (A2 || B2))
      ret = 1
  }
  return ret;
}

function isVisibleSPL_213_B(moxabitsStr)
{
  var ret = 0;
  // !BA
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var BA = (bBits & 0x0400) ? 1 : 0;
    if (!BA)
      ret = 1
  }
  return ret;
}

// spl 23
function isVisibleSPL_211_FE(moxabitsStr)
{
  var ret = 0;
  // A5 && !A2 && !B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var A5 = (aBits & 0x0020) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    var B2 = (bBits & 0x0004) ? 1 : 0;
    if (A5 && !A2 && !B2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_211_FL(moxabitsStr)
{
  var ret = 0;
  // A5 && (A2 || B2)
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var A5 = (aBits & 0x0020) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    var B2 = (bBits & 0x0004) ? 1 : 0;
    if (A5 && (A2 || B2))
      ret = 1
  }
  return ret;
}

function isVisibleSPL_211_B(moxabitsStr)
{
  var ret = 0;
  // !A5
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var A5 = (aBits & 0x0020) ? 1 : 0;
    if (!A5)
      ret = 1
  }
  return ret;
}

// spl 25
function isVisibleSPL_224_FE(moxabitsStr)
{
  var ret = 0;
  // A8 && !A2
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var A8 = (aBits & 0x0100) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    if (A8 && !A2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_224_FL(moxabitsStr)
{
  var ret = 0;
  // A8 && A2
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var A8 = (aBits & 0x0100) ? 1 : 0;
    var A2 = (aBits & 0x0004) ? 1 : 0;
    if (A8 && A2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_224_B(moxabitsStr)
{
  var ret = 0;
  // !A8
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var A8 = (aBits & 0x0100) ? 1 : 0;
    if (!A8)
      ret = 1
  }
  return ret;
}

// spl 27
function isVisibleSPL_222_FE(moxabitsStr)
{
  var ret = 0;
  // A9 && !B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var A9 = (aBits & 0x0200) ? 1 : 0;
    var B2 = (bBits & 0x0004) ? 1 : 0;
    if (A9 && !B2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_222_FL(moxabitsStr)
{
  var ret = 0;
  // A9 && B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var A9 = (aBits & 0x0200) ? 1 : 0;
    var B2 = (bBits & 0x0004) ? 1 : 0;
    if (A9 && B2)
      ret = 1
  }
  return ret;
}

function isVisibleSPL_222_B(moxabitsStr)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var A9 = (aBits & 0x0200) ? 1 : 0;
    if (!A9)
      ret = 1
  }
  return ret;
}


//
// signals
//

// si 1 - P581
function isVisibleSIG_21_RTR(moxabitsStr)
{
  var ret = 0;
  // A3
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var A3 = (aBits & 0x0008) ? 1 : 0;
    if (A3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_21_STP(moxabitsStr)
{
  var ret = 0;
  // !A3
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var A3 = (aBits & 0x0008) ? 1 : 0;
    if (!A3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_21_URB(moxabitsStr)
{
  var ret = 0;
  // F0 (first virtual moxa)
  if (moxabitsStr && moxabitsStr.length >= 24)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var F0 = (fBits & 0x0001) ? 1 : 0;
    if (F0)
      ret = 1
  }
  return ret;
}

// si 2 - P582
function isVisibleSIG_24_RTR(moxabitsStr)
{
  var ret = 0;
  // B3
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B3 = (bBits & 0x0008) ? 1 : 0;
    if (B3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_24_STP(moxabitsStr)
{
  var ret = 0;
  // !B3
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B3 = (bBits & 0x0008) ? 1 : 0;
    if (!B3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_24_URB(moxabitsStr)
{
  var ret = 0;
  // F1 (first virtual moxa)
  if (moxabitsStr && moxabitsStr.length >= 24)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var F1 = (fBits & 0x0002) ? 1 : 0;
    if (F1)
      ret = 1
  }
  return ret;
}

// si 3 - P583
function isVisibleSIG_11_RTR(moxabitsStr)
{
  var ret = 0;
  // C3
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C3 = (cBits & 0x0008) ? 1 : 0;
    if (C3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_11_STP(moxabitsStr)
{
  var ret = 0;
  // !C3
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C3 = (cBits & 0x0008) ? 1 : 0;
    if (!C3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_11_URB(moxabitsStr)
{
  var ret = 0;
  // F2 (first virtual moxa)
  if (moxabitsStr && moxabitsStr.length >= 24)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var F2 = (fBits & 0x0004) ? 1 : 0;
    if (F2)
      ret = 1
  }
  return ret;
}

// si 4 - P584
function isVisibleSIG_14_RTR(moxabitsStr)
{
  var ret = 0;
  // D3
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D3 = (dBits & 0x0008) ? 1 : 0;
    if (D3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_14_STP(moxabitsStr)
{
  var ret = 0;
  // !D3
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D3 = (dBits & 0x0008) ? 1 : 0;
    if (!D3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_14_URB(moxabitsStr)
{
  var ret = 0;
  // F3 (first virtual moxa)
  if (moxabitsStr && moxabitsStr.length >= 24)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var F3 = (fBits & 0x0008) ? 1 : 0;
    if (F3)
      ret = 1
  }
  return ret;
}

// si 6 - P586
function isVisibleSIG_16_RTR(moxabitsStr)
{
  var ret = 0;
  // E3
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    var eBits = parseInt(moxabitsStr.substring(16, 20), 16);
    var E3 = (eBits & 0x0008) ? 1 : 0;
    if (E3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_16_STP(moxabitsStr)
{
  var ret = 0;
  // !E3
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    var eBits = parseInt(moxabitsStr.substring(16, 20), 16);
    var E3 = (eBits & 0x0008) ? 1 : 0;
    if (!E3)
      ret = 1
  }
  return ret;
}

function isVisibleSIG_16_URB(moxabitsStr)
{
  var ret = 0;
  // F4 (first virtual moxa)
  if (moxabitsStr && moxabitsStr.length >= 24)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var F4 = (fBits & 0x0010) ? 1 : 0;
    if (F4)
      ret = 1
  }
  return ret;
}



// stoppstallning button for P581
function isVisibleSPC_21_TA(moxabitsStr)
{
  var ret = 0;
  // A4
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    var aBits = parseInt(moxabitsStr.substring(0, 4), 16);
    var A4 = (aBits & 0x0010) ? 1 : 0;
    if (A4)
      ret = 1
  }
  return ret;
}

// stoppstallning button for P582
function isVisibleSPC_24_TA(moxabitsStr)
{
  var ret = 0;
  // B4
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var B4 = (bBits & 0x0010) ? 1 : 0;
    if (B4)
      ret = 1
  }
  return ret;
}

// stoppstallning button for P583
function isVisibleSPC_11_TA(moxabitsStr)
{
  var ret = 0;
  // C4
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    var cBits = parseInt(moxabitsStr.substring(8, 12), 16);
    var C4 = (cBits & 0x0010) ? 1 : 0;
    if (C4)
      ret = 1
  }
  return ret;
}

// stoppstallning button for P584
function isVisibleSPC_14_TA(moxabitsStr)
{
  var ret = 0;
  // D4
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var D4 = (dBits & 0x0010) ? 1 : 0;
    if (D4)
      ret = 1
  }
  return ret;
}

// stoppstallning button for P586
function isVisibleSPC_16_TA(moxabitsStr)
{
  var ret = 0;
  // E4
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    var eBits = parseInt(moxabitsStr.substring(16, 20), 16);
    var E4 = (eBits & 0x0010) ? 1 : 0;
    if (E4)
      ret = 1
  }
  return ret;
}


// AAA check this

function isVisibleTv0200_1(moxabitsStr)
{
  var ret = 0;
  // TM && MD  where TM: B0  MD: x4
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (bBits & 0x0001) ? 1 : 0;
    var MD = (xBits & 0x0010) ? 1 : 0;
    if (TM && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0200_2(moxabitsStr)
{
  var ret = 0;
  // TM && !MD  where TM: B0  MD: x4
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (bBits & 0x0001) ? 1 : 0;
    var MD = (xBits & 0x0010) ? 1 : 0;
    if (TM && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0200_3(moxabitsStr)
{
  var ret = 0;
  // TM && TO && MD  where TM: B0  TO: B2  MD: x4
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (bBits & 0x0001) ? 1 : 0;
    var TO = (bBits & 0x0004) ? 1 : 0;
    var MD = (xBits & 0x0010) ? 1 : 0;
    if (TM && TO && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0200_4(moxabitsStr)
{
  var ret = 0;
  // TM && TO && !MD  where TM: B0  TO: B2  MD: x4
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (bBits & 0x0001) ? 1 : 0;
    var TO = (bBits & 0x0004) ? 1 : 0;
    var MD = (xBits & 0x0010) ? 1 : 0;
    if (TM && TO && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0200_5(moxabitsStr)
{
  var ret = 0;
  // TR && F && !KH  where TR: BA  F: B4  KH: H1 
  if (moxabitsStr && moxabitsStr.length >= 32)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var hBits = parseInt(moxabitsStr.substring(28, 32), 16);
    var TR = (bBits & 0x0400) ? 1 : 0;
    var F = (bBits & 0x0010) ? 1 : 0;
    var KH = (hBits & 0x0002) ? 1 : 0;
    if (TR && F && !KH)
      ret = 1
  }
  return ret;
}

function isVisibleTv0200_6(moxabitsStr)
{
  var ret = 0;
  // TR && TER && !KH  where TR: BA  TER: BB  KH: H1 
  if (moxabitsStr && moxabitsStr.length >= 32)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var hBits = parseInt(moxabitsStr.substring(28, 32), 16);
    var TR = (bBits & 0x0400) ? 1 : 0;
    var TER = (bBits & 0x0800) ? 1 : 0;
    var KH = (hBits & 0x0002) ? 1 : 0;
    if (TR && TER && !KH)
      ret = 1
  }
  return ret;
}

function isVisibleTv0204_1(moxabitsStr)
{
  var ret = 0;
  // TM && MD  where TM: B1  MD: x5
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (bBits & 0x0002) ? 1 : 0;
    var MD = (xBits & 0x0020) ? 1 : 0;
    if (TM && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0204_2(moxabitsStr)
{
  var ret = 0;
  // TM && !MD  where TM: B1  MD: x5
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (bBits & 0x0002) ? 1 : 0;
    var MD = (xBits & 0x0020) ? 1 : 0;
    if (TM && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0204_3(moxabitsStr)
{
  var ret = 0;
  // TM && TO && MD  where TM: B1  TO: B3  MD: x5
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (bBits & 0x0002) ? 1 : 0;
    var TO = (bBits & 0x0008) ? 1 : 0;
    var MD = (xBits & 0x0020) ? 1 : 0;
    if (TM && TO && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0204_4(moxabitsStr)
{
  var ret = 0;
  // TM && TO && !MD  where TM: B1  TO: B3  MD: x5
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (bBits & 0x0002) ? 1 : 0;
    var TO = (bBits & 0x0008) ? 1 : 0;
    var MD = (xBits & 0x0020) ? 1 : 0;
    if (TM && TO && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0204_5(moxabitsStr)
{
  var ret = 0;
  // TR && F && !KV  where TR: BA  F: B4  KV: H0 
  if (moxabitsStr && moxabitsStr.length >= 32)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var hBits = parseInt(moxabitsStr.substring(28, 32), 16);
    var TR = (bBits & 0x0400) ? 1 : 0;
    var F = (bBits & 0x0010) ? 1 : 0;
    var KV = (hBits & 0x0001) ? 1 : 0;
    if (TR && F && !KV)
      ret = 1
  }
  return ret;
}

function isVisibleTv0204_6(moxabitsStr)
{
  var ret = 0;
  // TR && TER && F && !KV  where TR: BA  TER: BB  F: B4  KV: H0 
  if (moxabitsStr && moxabitsStr.length >= 32)
  {
    var bBits = parseInt(moxabitsStr.substring(4, 8), 16);
    var hBits = parseInt(moxabitsStr.substring(28, 32), 16);
    var TR = (bBits & 0x0400) ? 1 : 0;
    var TER = (bBits & 0x0800) ? 1 : 0;
    var F = (bBits & 0x0010) ? 1 : 0;
    var KV = (hBits & 0x0001) ? 1 : 0;
    if (TR && TER && F && !KV)
      ret = 1
  }
  return ret;
}

function isVisibleTv0307_1(moxabitsStr)
{
  var ret = 0;
  // TM && MD  where TM: D0  MD: x6
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (dBits & 0x0001) ? 1 : 0;
    var MD = (xBits & 0x0040) ? 1 : 0;
    if (TM && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0307_2(moxabitsStr)
{
  var ret = 0;
  // TM && !MD  where TM: D0  MD: x6
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (dBits & 0x0001) ? 1 : 0;
    var MD = (xBits & 0x0040) ? 1 : 0;
    if (TM && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0307_3(moxabitsStr)
{
  var ret = 0;
  // TM && TO && MD  where TM: D0  TO: D2  MD: x6
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (dBits & 0x0001) ? 1 : 0;
    var TO = (dBits & 0x0004) ? 1 : 0;
    var MD = (xBits & 0x0040) ? 1 : 0;
    if (TM && TO && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0307_4(moxabitsStr)
{
  var ret = 0;
  // TM && TO && !MD  where TM: D0  TO: D2  MD: x6
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (dBits & 0x0001) ? 1 : 0;
    var TO = (dBits & 0x0004) ? 1 : 0;
    var MD = (xBits & 0x0040) ? 1 : 0;
    if (TM && TO && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0307_5(moxabitsStr)
{
  var ret = 0;
  // TR && F && !KH  where TR: DA  F: D4  KH: I1
  if (moxabitsStr && moxabitsStr.length >= 36)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var iBits = parseInt(moxabitsStr.substring(32, 36), 16);
    var TR = (dBits & 0x0400) ? 1 : 0;
    var F = (dBits & 0x0010) ? 1 : 0;
    var KH = (iBits & 0x0002) ? 1 : 0;
    if (TR && F && !KH)
      ret = 1
  }
  return ret;
}

function isVisibleTv0307_6(moxabitsStr)
{
  var ret = 0;
  // TR && TER && F && !KH  where TR: DA  TER: DB  F: D4  KH: I1
  if (moxabitsStr && moxabitsStr.length >= 36)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var iBits = parseInt(moxabitsStr.substring(32, 36), 16);
    var TR = (dBits & 0x0400) ? 1 : 0;
    var TER = (dBits & 0x0800) ? 1 : 0;
    var F = (dBits & 0x0010) ? 1 : 0;
    var KH = (iBits & 0x0002) ? 1 : 0;
    if (TR && TER && F && !KH)
      ret = 1
  }
  return ret;
}

function isVisibleTv0309_1(moxabitsStr)
{
  var ret = 0;
  // TM && MD  where TM: D1  MD: x7
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (dBits & 0x0002) ? 1 : 0;
    var MD = (xBits & 0x0080) ? 1 : 0;
    if (TM && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0309_2(moxabitsStr)
{
  var ret = 0;
  // TM && !MD  where TM: D1  MD: x7
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (dBits & 0x0002) ? 1 : 0;
    var MD = (xBits & 0x0080) ? 1 : 0;
    if (TM && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0309_3(moxabitsStr)
{
  var ret = 0;
  // TM && TO && MD  where TM: D1  TO: D3  MD: x7
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (dBits & 0x0002) ? 1 : 0;
    var TO = (dBits & 0x0008) ? 1 : 0;
    var MD = (xBits & 0x0080) ? 1 : 0;
    if (TM && TO && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0309_4(moxabitsStr)
{
  var ret = 0;
  // TM && TO && !MD  where TM: D1  TO: D3  MD: x7
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (dBits & 0x0002) ? 1 : 0;
    var TO = (dBits & 0x0008) ? 1 : 0;
    var MD = (xBits & 0x0080) ? 1 : 0;
    if (TM && TO && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0309_5(moxabitsStr)
{
  var ret = 0;
  // TR && F && !KV  where TR: DA  F: D4  KV: I0
  if (moxabitsStr && moxabitsStr.length >= 36)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var iBits = parseInt(moxabitsStr.substring(32, 36), 16);
    var TR = (dBits & 0x0400) ? 1 : 0;
    var F = (dBits & 0x0010) ? 1 : 0;
    var KV = (iBits & 0x0001) ? 1 : 0;
    if (TR && F && !KV)
      ret = 1
  }
  return ret;
}

function isVisibleTv0309_6(moxabitsStr)
{
  var ret = 0;
  // TR && TER && F && !KV  where TR: DA  TER: DB  F: D4  KV: I0 
  if (moxabitsStr && moxabitsStr.length >= 36)
  {
    var dBits = parseInt(moxabitsStr.substring(12, 16), 16);
    var iBits = parseInt(moxabitsStr.substring(32, 36), 16);
    var TR = (dBits & 0x0400) ? 1 : 0;
    var TER = (dBits & 0x0800) ? 1 : 0;
    var F = (dBits & 0x0010) ? 1 : 0;
    var KV = (iBits & 0x0001) ? 1 : 0;
    if (TR && TER && F && !KV)
      ret = 1
  }
  return ret;
}

function isVisibleTv0507_1(moxabitsStr)
{
  var ret = 0;
  // TM && MD  where TM: F0  MD: x8
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (fBits & 0x0001) ? 1 : 0;
    var MD = (xBits & 0x0100) ? 1 : 0;
    if (TM && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0507_2(moxabitsStr)
{
  var ret = 0;
  // TM && !MD  where TM: F0  MD: x8
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (fBits & 0x0001) ? 1 : 0;
    var MD = (xBits & 0x0100) ? 1 : 0;
    if (TM && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0507_3(moxabitsStr)
{
  var ret = 0;
  // TM && TO && MD  where TM: F0  TO: F2  MD: x8
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (fBits & 0x0001) ? 1 : 0;
    var TO = (fBits & 0x0004) ? 1 : 0;
    var MD = (xBits & 0x0100) ? 1 : 0;
    if (TM && TO && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0507_4(moxabitsStr)
{
  var ret = 0;
  // TM && TO && !MD  where TM: F0  TO: F2  MD: x8
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (fBits & 0x0001) ? 1 : 0;
    var TO = (fBits & 0x0004) ? 1 : 0;
    var MD = (xBits & 0x0100) ? 1 : 0;
    if (TM && TO && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0507_5(moxabitsStr)
{
  var ret = 0;
  // TR && F && !KH  where TR: FA  F: F4  KH: I1
  if (moxabitsStr && moxabitsStr.length >= 36)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var iBits = parseInt(moxabitsStr.substring(32, 36), 16);
    var TR = (fBits & 0x0400) ? 1 : 0;
    var F = (fBits & 0x0010) ? 1 : 0;
    var KH = (iBits & 0x0002) ? 1 : 0;
    if (TR && F && !KH)
      ret = 1
  }
  return ret;
}

function isVisibleTv0507_6(moxabitsStr)
{
  var ret = 0;
  // TR && TER && F && !KH  where TR: FA  TER: FB  F: F4  KH: I1
  if (moxabitsStr && moxabitsStr.length >= 36)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var iBits = parseInt(moxabitsStr.substring(32, 36), 16);
    var TR = (fBits & 0x0400) ? 1 : 0;
    var TER = (fBits & 0x0800) ? 1 : 0;
    var F = (fBits & 0x0010) ? 1 : 0;
    var KH = (iBits & 0x0002) ? 1 : 0;
    if (TR && TER && F && !KH)
      ret = 1
  }
  return ret;
}

function isVisibleTv0509_1(moxabitsStr)
{
  var ret = 0;
  // TM && MD  where TM: F1  MD: x9
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (fBits & 0x0002) ? 1 : 0;
    var MD = (xBits & 0x0200) ? 1 : 0;
    if (TM && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0509_2(moxabitsStr)
{
  var ret = 0;
  // TM && !MD  where TM: F1  MD: x9
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (fBits & 0x0002) ? 1 : 0;
    var MD = (xBits & 0x0200) ? 1 : 0;
    if (TM && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0509_3(moxabitsStr)
{
  var ret = 0;
  // TM && TO && MD  where TM: F1  TO: F3  MD: x9
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (fBits & 0x0002) ? 1 : 0;
    var TO = (fBits & 0x0008) ? 1 : 0;
    var MD = (xBits & 0x0200) ? 1 : 0;
    if (TM && TO && MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0509_4(moxabitsStr)
{
  var ret = 0;
  // TM && TO && !MD  where TM: F1  TO: F3  MD: x9
  if (moxabitsStr && moxabitsStr.length >= MOXA_CHARS+4)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var xBits = parseInt(moxabitsStr.substring(MOXA_CHARS, MOXA_CHARS+4), 16);
    var TM = (fBits & 0x0002) ? 1 : 0;
    var TO = (fBits & 0x0008) ? 1 : 0;
    var MD = (xBits & 0x0200) ? 1 : 0;
    if (TM && TO && !MD)
      ret = 1
  }
  return ret;
}

function isVisibleTv0509_5(moxabitsStr)
{
  var ret = 0;
  // TR && F && !KV  where TR: FA  F: F4  KV: I0
  if (moxabitsStr && moxabitsStr.length >= 36)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var iBits = parseInt(moxabitsStr.substring(32, 36), 16);
    var TR = (fBits & 0x0400) ? 1 : 0;
    var F = (fBits & 0x0010) ? 1 : 0;
    var KV = (iBits & 0x0001) ? 1 : 0;
    if (TR && F && !KV)
      ret = 1
  }
  return ret;
}

function isVisibleTv0509_6(moxabitsStr)
{
  var ret = 0;
  // TR && TER && F && !KV  where TR: FA  TER: FB  F: F4  KV: I0 
  if (moxabitsStr && moxabitsStr.length >= 36)
  {
    var fBits = parseInt(moxabitsStr.substring(20, 24), 16);
    var iBits = parseInt(moxabitsStr.substring(32, 36), 16);
    var TR = (fBits & 0x0400) ? 1 : 0;
    var TER = (fBits & 0x0800) ? 1 : 0;
    var F = (fBits & 0x0010) ? 1 : 0;
    var KV = (iBits & 0x0001) ? 1 : 0;
    if (TR && TER && F && !KV)
      ret = 1
  }
  return ret;
}

//
// texts (to be displayed on layout)
//

function configGetText(obj, moxabitsStr)
{
  var id = obj.id;
  // AAA to do

  return 0; //  no text
}
