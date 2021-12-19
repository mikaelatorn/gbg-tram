import { SyntheticEvent, useEffect } from "react"
import {
  initCommon,
  stepTime,
  stepPrev,
  stepNext,
  playBack,
  playStop,
  playForward,
  setClock,
  stepToggle
} from "../../scripts/logFileHelper"

function HistoryMenu() {
  useEffect(() => {
    initCommon()
    setClock()
  })

  function step(event: SyntheticEvent) {
    stepTime()
  }

  function prev(event: SyntheticEvent, value: number) {
    stepPrev(false)
  }

  function next(event: SyntheticEvent, value: number) {
    stepNext(false)
  }

  function back(event: SyntheticEvent) {
    playBack()
  }

  function stop(event: SyntheticEvent) {
    playStop()
  }

  function pForward(event: SyntheticEvent) {
    playForward()
  }

  function stepChange() {
    stepToggle();
  }

  return (
    <div className="history-container">
      <div id="history-menu">
         <div className="hidden" id="fieldObjId">&nbsp;</div>
          <button id="bStepToggle" onClick={() => stepChange()}>
            &nbsp;
          </button>
          <div className="rowposClock" id="blockClock">
            &nbsp;&nbsp;Tid nu:&nbsp;
            <input
              id="fieldClock"
              type="text"
              className="widthClock"
              readOnly
            />
          </div>
        <div className="pad2" id="blockStepFunctions">
          <div>
            <label htmlFor="fieldStepTime">Historik:&nbsp;&nbsp;</label>
            <input id="fieldStepTime" type="text" className="widthClock" />
          </div>
          <div className="pad1">&nbsp;</div>
          <div>
            <button id="bStepTime" onClick={(e) => step(e)}>
              S&auml;tt tid
            </button>
          </div>
          <div className="pad1">&nbsp;</div>
          <div>
            <button id="bStepPrev" onClick={(e) => prev(e, 0)}>
              Bak&aring;t
            </button>
          </div>
          <div className="pad1">&nbsp;</div>
          <div>
            <button id="bStepNext" onClick={(e) => next(e, 0)}>
              Fram&aring;t
            </button>
          </div>
          <div className="pad1">&nbsp;</div>
          <div>
            <button id="bPlayBack" onClick={(e) => back(e)}>
              Spela bak&aring;t
            </button>
          </div>
          <div className="pad1">&nbsp;</div>
          <div>
            <button id="bPlayStop" onClick={(e) => stop(e)}>
              Stopp
            </button>
          </div>
          <div className="pad1">&nbsp;</div>
          <div>
            <button id="bPlayhtmlForward" onClick={(e) => pForward(e)}>
              Spela fram&aring;t
            </button>
          </div>
          <div className="pad1">&nbsp;</div>
          <div>
            <label htmlFor="fieldPlaySpeed">Fart:&nbsp;&nbsp;</label>
            <input id="fieldPlaySpeed" type="text" className="widthPlaySpeed" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryMenu
