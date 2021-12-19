import { SyntheticEvent } from "react";
import { changeElementColor, toggleArrowVisibility, toggleInfo } from "../scripts/colorTextLogic"
import { insertLogInfoText } from "../scripts/logInfoLogic"
import { processData } from "../scripts/logfileRowHandler"
import HistoryMenu from "./History/historyMenu";

function TrackMenu() {
  const tracks = ["S10", "S11", "S12", "S13", "S14", "S15", "S17", "S19", "S21", "S23", "S25", "S27"];
  const tagVag = ["TV_586", "TV_584", "TV_583", "TV_582", "TV_581"];
  const PS = ["_586", "_584", "_583", "_582", "_581"];
  const logWindows = ["HPB_logwindow", "HPA_logwindow", "HPD_logwindow", "HPC_logwindow", "HPX_logwindow"]
  let controllers: Array<JSX.Element> = [];
  let PSStopSigns: Array<JSX.Element> = [];
  let PSCross: Array<JSX.Element> = [];
  let PSLights: Array<JSX.Element> = [];

  function updateColor (event: SyntheticEvent) {
    changeElementColor((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value)
  }

  function toggleArrow (event: SyntheticEvent) {
    for (var i = 0; i < tagVag.length; i++) {
      toggleArrowVisibility(tagVag[i] + '_Body', (event.target as HTMLInputElement).value)
      toggleArrowVisibility(tagVag[i] + '_Tip', (event.target as HTMLInputElement).value)
    }
  }

  function addLogInfo () {
    let value = (document.getElementById("log-info-text") as HTMLInputElement).value;
    for (var i = 0; i < logWindows.length; i++) {
      insertLogInfoText(logWindows[i], value)
    }
  }

  function addLogInfoRow () {
    let value = (document.getElementById("log-info-text-2") as HTMLInputElement).value;
    if (value) {
      processData(value)
    }
  }

  function toggleCheckbox (event: SyntheticEvent, id: string) {
    toggleInfo((event.target as HTMLInputElement).id + id, (event.target as HTMLInputElement).checked)
  }

  function toggleLights (event: SyntheticEvent) {
    if ((event.target as HTMLInputElement).checked) {
      changeElementColor((event.target as HTMLInputElement).id + '_4', '#ff0')
      changeElementColor((event.target as HTMLInputElement).id + '_2', '#000')
    } else {
      changeElementColor((event.target as HTMLInputElement).id + '_4', '#000')
      changeElementColor((event.target as HTMLInputElement).id + '_2', '#ff0')
    }
    // toggleInfo((event.target as HTMLInputElement).id + id, (event.target as HTMLInputElement).checked)
  }

  for (var i = 0; i < tracks.length; i++) {
    controllers.push(
      <div key={tracks[i]} className="radio-container" onChange={e => updateColor(e)}>
        <div className="track-name">{tracks[i]}</div>
        <input type="radio" id="green" name={tracks[i]} value="green" />
        <label htmlFor="green">Grön</label>
        <input type="radio" id="red" name={tracks[i]} value="red" />
        <label htmlFor="red">Röd</label>
        <input type="radio" id="lightGrey" name={tracks[i]} value="lightGrey" />
        <label htmlFor="lightGrey">Grå</label>
      </div>
    )
  }

  const tagVagMenu = (
    <div className="radio-container" onChange={e => toggleArrow(e)}>
      <div className="track-name">Pilar/Tågväg begärd</div>
      <input type="radio" id="green" name="arrow" value="green" />
      <label htmlFor="green">Grön</label>
      <input type="radio" id="blue" name="arrow" value="blue" />
      <label htmlFor="blue">Blå</label>
      <input type="radio" id="orange" name="arrow" value="darkOrange" />
      <label htmlFor="orange">Orange</label>
      <input type="radio" id="none" name="arrow" value="none" />
      <label htmlFor="none">Visa ej</label>
    </div>
  )
  
  const logInput = (
    <div className="radio-container">
      <textarea id="log-info-text" rows={4} placeholder="Log window info"></textarea>
      <button onClick={e => addLogInfo()} >Add info</button>
    </div>
  )

  const logInputB = (
    <div className="radio-container">
      <input id="log-info-text-2" placeholder="Ex: b00200000000000000000" />
      <button onClick={e => addLogInfoRow()} >Loggrad</button>
    </div>
  )

  for (var j = 0; j < PS.length; j++) {
    PSStopSigns.push( 
      <div key={PS[j] + "Stopsign"}>
        <input type="checkbox" id={PS[j]} name={PS[j]} onChange={e => toggleCheckbox(e, "_Stoppställ")} />
        <label htmlFor={PS[j]}>{PS[j].slice(1,4)}</label>
      </div>
    )
  }

  for (var a = 0; a < PS.length; a++) {
    PSCross.push(
      <div key={PS[a] + "Kryss"}>
        <input type="checkbox" id={PS[a]} name={PS[a]} onChange={e => toggleCheckbox(e, "_Kryss")} />
        <label htmlFor={PS[a]}>{PS[a].slice(1,4)}</label>
      </div>
    )
  }

  for (var x = 0; x < PS.length; x++) {
    PSLights.push(
      <div key={PS[x] + "_Lights"}>
        <input type="checkbox" id={PS[x]} name={PS[x]} onChange={e => toggleLights(e)} />
        <label htmlFor={PS[x]}>{PS[x].slice(1,4)}</label>
      </div>
    )
  }

  return (
    <div className="menu-container">
      {/* {controllers} */}
      {/* {tagVagMenu} */}
      {logInput}
      {logInputB}
      {/* <div className="radio-container">
        <div className="track-name">Toggle Stop sign</div>
        {PSStopSigns}
      </div>
      <div className="radio-container">
        <div className="track-name">Toggle PS cross</div>
        {PSCross}
      </div>
      <div className="radio-container">
        <div className="track-name">Toggle PS lights</div>
        {PSLights}
      </div>
      <HistoryMenu /> */}
    </div>
  );
}

export default TrackMenu;