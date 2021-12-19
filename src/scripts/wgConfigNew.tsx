function configGetVisibility(id: string, moxabitsStr: string): string
{
  var svgElement = id;
  // spl 10
  if (svgElement === "S10") {
    let color = "grey";
    if (!isS10Grey(moxabitsStr)) color = "grey";
    if (isS10Green(moxabitsStr)) color = "green";
    if (isS10Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S11") {
    let color = "grey";
    if (!isS11Grey(moxabitsStr)) color = "grey";
    if (isS11Green(moxabitsStr)) color = "green";
    if (isS11Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S12") {
    let color = "grey";
    if (!isS12Grey(moxabitsStr)) color = "grey";
    if (isS12Green(moxabitsStr)) color = "green";
    if (isS12Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S13") {
    let color = "grey";
    if (!isS13Grey(moxabitsStr)) color = "grey";
    if (isS13Green(moxabitsStr)) color = "green";
    if (isS13Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S14") {
    let color = "grey";
    if (!isS14Grey(moxabitsStr)) color = "grey";
    if (isS14Green(moxabitsStr)) color = "green";
    if (isS14Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S15") {
    let color = "grey";
    if (!isS15Grey(moxabitsStr)) color = "grey";
    if (isS15Green(moxabitsStr)) color = "green";
    if (isS15Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S17") {
    let color = "grey";
    if (!isS17Grey(moxabitsStr)) color = "grey";
    if (isS17Green(moxabitsStr)) color = "green";
    if (isS17Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S19") {
    let color = "grey";
    if (!isS19Grey(moxabitsStr)) color = "grey";
    if (isS19Green(moxabitsStr)) color = "green";
    if (isS19Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S21") {
    let color = "grey";
    if (!isS21Grey(moxabitsStr)) color = "grey";
    if (isS21Green(moxabitsStr)) color = "green";
    if (isS21Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S23") {
    let color = "grey";
    if (isS23Grey(moxabitsStr)) color = "grey";
    if (isS23Green(moxabitsStr)) color = "green";
    if (isS23Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S25") {
    let color = "grey";
    if (!isS25Grey(moxabitsStr)) color = "grey";
    if (isS25Green(moxabitsStr)) color = "green";
    if (isS25Red(moxabitsStr)) color = "red";
    return color;
  }

  if (svgElement === "S27") {
    let color = "grey";
    if (!isS27Grey(moxabitsStr)) color = "grey";
    if (isS27Green(moxabitsStr)) color = "green";
    if (isS27Red(moxabitsStr)) color = "red";
    return color;
  }
  
  // // arrows

  if (svgElement === "TV_581") {
    let color = "none";
    if (isTV1Visibile(moxabitsStr)) color = "none";
    if (isTV1Green(moxabitsStr)) color = "green";
    if (isTV1Blue(moxabitsStr)) color = "blue";

    return color;
  }

  if (svgElement === "TV_582") {
    let color = "none";
    if (isTV2Visibile(moxabitsStr)) color = "none";
    if (isTV2Green(moxabitsStr)) color = "green";
    if (isTV2Blue(moxabitsStr)) color = "blue";

    return color;
  }

  if (svgElement === "TV_583") {
    let color = "none";
    if (isTV3Visibile(moxabitsStr)) color = "none";
    if (isTV3Green(moxabitsStr)) color = "green";
    if (isTV3Blue(moxabitsStr)) color = "blue";

    return color;
  }

  if (svgElement === "TV_584") {
    let color = "none";
    if (isTV4Visibile(moxabitsStr)) color = "none";
    if (isTV4Green(moxabitsStr)) color = "green";
    if (isTV4Blue(moxabitsStr)) color = "blue";

    return color;
  }

  if (svgElement === "PS581") {
    let color = "none";
    if (!isPS1Stopped(moxabitsStr)) color = "stop-square";
    if (isPS1Stopped(moxabitsStr)) color = "stop-square-off";
    if (!isPS1Go(moxabitsStr)) color = "stop";
    if (isPS1Go(moxabitsStr)) color = "go";
    if (isPS1Timer(moxabitsStr)) color = "timer";
    if (isPS1TimerOff(moxabitsStr)) color = "timer-off";

    return color;
  }

  if (svgElement === "PS582") {
    let color = "none";
    if (!isPS2Stopped(moxabitsStr)) color = "stop-square";
    if (isPS2Stopped(moxabitsStr)) color = "stop-square-off";
    if (!isPS2Go(moxabitsStr)) color = "stop";
    if (isPS2Go(moxabitsStr)) color = "go";
    if (isPS2Timer(moxabitsStr)) color = "timer";
    if (isPS2TimerOff(moxabitsStr)) color = "timer-off";

    return color;
  }

  if (svgElement === "PS583") {
    let color = "none";
    if (!isPS3Stopped(moxabitsStr)) color = "stop-square";
    if (isPS3Stopped(moxabitsStr)) color = "stop-square-off";
    if (!isPS3Go(moxabitsStr)) color = "stop";
    if (isPS3Go(moxabitsStr)) color = "go";
    if (isPS3Timer(moxabitsStr)) color = "timer";
    if (isPS3TimerOff(moxabitsStr)) color = "timer-off";

    return color;
  }

  if (svgElement === "PS584") {
    let color = "none";
    if (!isPS4Stopped(moxabitsStr)) color = "stop-square";
    if (isPS4Stopped(moxabitsStr)) color = "stop-square-off";
    if (!isPS4Go(moxabitsStr)) color = "stop";
    if (isPS4Go(moxabitsStr)) color = "go";
    if (isPS4Timer(moxabitsStr)) color = "timer";
    if (isPS4TimerOff(moxabitsStr)) color = "timer-off";

    return color;
  }

  if (svgElement === "PS586") {
    let color = "none";
    if (!isPS6Stopped(moxabitsStr)) color = "stop-square";
    if (isPS6Stopped(moxabitsStr)) color = "stop-square-off";
    if (!isPS6Go(moxabitsStr)) color = "stop";
    if (isPS6Go(moxabitsStr)) color = "go";

    return color;
  }
}

// spl 10
function isS10Grey(moxabitsStr: string)
{
  var ret = 0;
  // D5 && !D2
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    // 16 pos, 3rd from left = 0 
    let value = 16 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS10Green(moxabitsStr: string)
{
  var ret = 0;
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    // 16 pos, 3rd from left = 0 
    let value = 16 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS10Red(moxabitsStr: string)
{
  var ret = 0;
  // !D5
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
   // 14 pos, 1st from left = 1
   let value = 14 * 4;
   var dBits = moxabitsStr.slice(value, value + 4);
   ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

// spl 11
function isS11Grey(moxabitsStr: string)
{
  var ret = 0;
  // C5 && !C2
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    let value = 12 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS11Green(moxabitsStr: string)
{
  var ret = 0;
  // C5 && C2
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    let value = 12 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS11Red(moxabitsStr: string)
{
  var ret = 0;
  // !C5
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    let value = 11 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(2));
  }
  return ret;
}

// spl 12
function isS12Grey(moxabitsStr: string)
{
  var ret = 0;
  // D8 && !D2
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    // 16 pos, 3rd from left = 0 
    let value = 16 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS12Green(moxabitsStr: string)
{
  var ret = 0;
  // D8 && D2
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    // 16 pos, 3rd from left = 0 
    let value = 16 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS12Red(moxabitsStr: string)
{
  var ret = 0;
  // !D8
  if (moxabitsStr && moxabitsStr.length >= 16)
  {
    // 15 pos, 3rd from left = 0 
    let value = 15 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(2));
  }
  return ret;
}

// spl 13
function isS13Grey(moxabitsStr: string)
{
  var ret = 0;
  // C8 && !C2
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    let value = 12 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS13Green(moxabitsStr: string)
{
  var ret = 0;
  // C8 && C2
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    let value = 12 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS13Red(moxabitsStr: string)
{
  var ret = 0;
  // !C8
  if (moxabitsStr && moxabitsStr.length >= 12)
  {
    let value = 12 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

// spl 14
function isS14Grey(moxabitsStr: string)
{
  var ret = 0;
  // E5 && !E2
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    let value = 20 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS14Green(moxabitsStr: string)
{
  var ret = 0;
  // E5 && E2
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    let value = 20 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS14Red(moxabitsStr: string)
{
  var ret = 0;
  // !E5
  if (moxabitsStr && moxabitsStr.length >= 20)
  {
    let value = 19 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(2));
  }
  return ret;
}


// spl 15
function isS15Grey(moxabitsStr: string)
{
  var ret = 0;
  // B8 && !A2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 4 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS15Green(moxabitsStr: string)
{
  var ret = 0;
  // B8 && A2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 4 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS15Red(moxabitsStr: string)
{
  var ret = 0;
  // !B8
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 6 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

// spl 17
function isS17Grey(moxabitsStr: string)
{
  var ret = 0;
  // B9 && !A2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 4 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS17Green(moxabitsStr: string)
{
  var ret = 0;
  // B9 && A2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 4 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS17Red(moxabitsStr: string)
{
  var ret = 0;
  // !B9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 6 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(2));
  }
  return ret;
}

// spl 19
function isS19Grey(moxabitsStr: string)
{
  var ret = 0;
  // B5 && !A2 && !B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 4 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(1)) == 1 || parseInt(dBits2.charAt(1)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isS19Green(moxabitsStr: string)
{
  var ret = 0;
  // B5 && (A2 || B2)
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 4 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(1)) == 1 || parseInt(dBits2.charAt(1)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isS19Red(moxabitsStr: string)
{
  var ret = 0;
  // !B5
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 7 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(2));
  }
  return ret;
}

// spl 21
function isS21Grey(moxabitsStr: string)
{
  var ret = 0;
  // BA && !A2 && !B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 4 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(1)) == 1 || parseInt(dBits2.charAt(1)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isS21Green(moxabitsStr: string)
{
  var ret = 0;
  // BA && (A2 || B2)
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 4 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(1)) == 1 || parseInt(dBits2.charAt(1)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isS21Red(moxabitsStr: string)
{
  var ret = 0;
  // !BA
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 6 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

// spl 23
function isS23Grey(moxabitsStr: string)
{
  var ret = 0;
  // A5 && !A2 && !B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 4 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(1)) == 1 || parseInt(dBits2.charAt(1)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isS23Green(moxabitsStr: string)
{
  var ret = 0;
  // A5 && (A2 || B2)
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 4 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(1)) == 1 || parseInt(dBits2.charAt(1)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isS23Red(moxabitsStr: string)
{
  var ret = 0;
  // !A5
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 3 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(2));
  }
  return ret;
}

// spl 25
function isS25Grey(moxabitsStr: string)
{
  var ret = 0;
  // A8 && !A2
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS25Green(moxabitsStr: string)
{
  var ret = 0;
  // A8 && A2
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS25Red(moxabitsStr: string)
{
  var ret = 0;
  // !A8
  if (moxabitsStr && moxabitsStr.length >= 4)
  {
    let value = 2 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

// spl 27
function isS27Grey(moxabitsStr: string)
{
  var ret = 0;
  // A9 && !B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isS27Green(moxabitsStr: string)
{
  var ret = 0;
  // A9 && B2
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}


function isS27Red(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 2 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(2));
  }
  return ret;
}

function isTV1Visibile(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 4 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isTV1Green(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 1 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 4 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(3)) == 1 && parseInt(dBits2.charAt(3)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isTV1Blue(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 1 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 4 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(3)) == 0 && parseInt(dBits2.charAt(3)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isTV2Visibile(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isTV2Green(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 5 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 8 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(3)) == 1 && parseInt(dBits2.charAt(3)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isTV2Blue(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 5 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 8 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(3)) == 1 && parseInt(dBits2.charAt(3)) == 0) {
      ret = 1;
    }
  }
  return ret;
}

function isTV3Visibile(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 12 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isTV3Green(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 9 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 12 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(3)) == 1 && parseInt(dBits2.charAt(3)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isTV3Blue(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 9 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 12 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(3)) == 0 && parseInt(dBits2.charAt(3)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isTV4Visibile(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 16 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isTV4Green(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 13 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 16 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(3)) == 1 && parseInt(dBits2.charAt(3)) == 1) {
      ret = 1;
    }
  }
  return ret;
}

function isTV4Blue(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 13 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    let value2 = 16 * 4;
    var dBits2 = moxabitsStr.slice(value2, value2 + 4);

    if (parseInt(dBits.charAt(3)) == 0 && parseInt(dBits2.charAt(3)) == 1) {
      ret = 1;
    }
  }
  return ret;
}


function isPS2Stopped(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 7 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

function isPS1Go(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 4 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}

function isPS1Timer(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 3 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isPS1TimerOff(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 3 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}

function isPS1Stopped(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 3 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

function isPS2Go(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 8 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}

function isPS2Timer(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 7 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isPS2TimerOff(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 7 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}


function isPS3Stopped(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 11 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

function isPS3Go(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 12 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}

function isPS3Timer(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 11 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isPS3TimerOff(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 11 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}

function isPS4Stopped(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 15 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

function isPS4Go(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 16 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}

function isPS4Timer(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 15 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(1));
  }
  return ret;
}

function isPS4TimerOff(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 15 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}


// 6

function isPS6Stopped(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 19 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(3));
  }
  return ret;
}

function isPS6Go(moxabitsStr: string)
{
  var ret = 0;
  // !A9
  if (moxabitsStr && moxabitsStr.length >= 8)
  {
    let value = 20 * 4;
    var dBits = moxabitsStr.slice(value, value + 4);
    ret = parseInt(dBits.charAt(0));
  }
  return ret;
}



export { configGetVisibility };