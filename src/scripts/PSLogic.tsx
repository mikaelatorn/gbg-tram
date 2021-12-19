let currentMenuId: string = "";

function toggleStopSign(id: string, value: boolean) {
  let element = formatId(id)
  let newId = element + "_Stoppställ"
  if (value) {
    document.getElementById(newId).style.display = "none";
  } else {
    document.getElementById(newId).style.display = "block";
  }
}

function toggleCross(id: string, value: boolean) {
  const cross = document.getElementById(id + '_Kryss')
  if (value) {
    cross.style.display = 'none';
  } else {
    cross.style.display = 'block';
  }
}

function toggleTimer(id: string, value: boolean) {
  const timer = document.getElementById(id + '_Timer')
  const time = document.getElementById(id + '_Time')
  var remainingTime: number = 25;
  if (!value) {
    timer.style.display = 'none';
    return;
  }

  timer.style.display = 'block';

  var seconds;
  setInterval(function () {
    let calcSeconds = (remainingTime % 60).toString();
    seconds = parseInt(calcSeconds, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    time.innerHTML = seconds.toString();

    if (--remainingTime < 0) {
      remainingTime = 25;
    }
  }, 1000);

  setTimeout(() => {
    timer.style.display = 'none';
  }, 30000)
}

function requestTogglePS(id: string, value: boolean) {
  toggleStopSign(id, value);
  // call API and request to start or stop PS
  // The red stopsign should show when info comes back
}

function requestBegar(id: string, value: boolean) {
  // call API and request to begära tågväg or ta tillbaka
  // timer should start if begar is true
  if (value) toggleTimer(formatId(id), true)
}

function requestDrift(id: string, value: boolean) {
  // call API and request to remove PS from action
  // the cross should update when info comes back
  toggleCross(formatId(id), value);
}

function formatId (id: string) {
  id = id.slice(2,5)
  const formatedId = '_' + id
  return formatedId
}

function openMenu (id: string) {
  console.log(currentMenuId)
  if (id !== currentMenuId && currentMenuId !== "") {
    closeMenu(currentMenuId);
  }
  let element = document.getElementById(id)
  if (element.style.display === "block") {
    closeMenu(id);
  } else {
    element.style.display = "block"
    document.getElementById("foreign_" + id).style.pointerEvents = "auto"
  }
  currentMenuId = id;
}

function closeMenu (id: string) {
  document.getElementById(id).style.display = "none"
  document.getElementById("foreign_" + id).style.pointerEvents = "none"
}

export { toggleStopSign, requestTogglePS, requestBegar, requestDrift, openMenu, toggleTimer }
