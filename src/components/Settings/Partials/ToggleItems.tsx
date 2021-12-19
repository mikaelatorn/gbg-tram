import React, { SyntheticEvent, useEffect } from "react";
import { toggleInfo } from "../../../scripts/colorTextLogic";
import ListItem from "../../../common/ListItem"
import toggleTextData from "../../../config/toggleTextData"

function ToggleTextItems () {
  const toggleItems: Array<React.ReactNode> = [];

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp)
  })

  function handleKeyUp (event: KeyboardEvent) {
    if (event.key === "p" || event.key === "n" || event.key === "v" || event.key === "h") {
      toggleTextData.forEach((element, i) => {
        if (toggleTextData[i].shortCut === event.key.toUpperCase()) {
          document.getElementById(toggleTextData[i].id).click()
        }
      })
    }
  }

  function toggleInformation (event: SyntheticEvent, arr: Array<string>) {
    event.stopPropagation();
    console.log(event)
    console.log(event)
    for (var i = 0; i < arr.length; i++) {
      toggleInfo(arr[i], (event.target as HTMLInputElement).checked)
    }
  }

  toggleTextData.forEach((element, i) => {
    toggleItems.push(
      <ListItem 
        key={toggleTextData[i].id}
        content={
          <div>
            <input type="checkbox" id={toggleTextData[i].id} name={toggleTextData[i].id} onChange={e => toggleInformation(e, toggleTextData[i].value)} />
            <label htmlFor={toggleTextData[i].id}>{toggleTextData[i].text}</label>
          </div>
        }
        shortCut={toggleTextData[i].shortCut}
      />
    )
  })

  return (
    <div>
      {toggleItems}
    </div>
  );

}

export default ToggleTextItems;
