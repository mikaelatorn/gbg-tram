import { useEffect } from "react";
import ListItem from "../../../common/ListItem"
import { openMenu } from "../../../scripts/PSLogic"

function SettingsPSItems () {
  const PSNo = ["P581", "P582", "P583", "P584", "P586"];
  const PsItems = [];

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp)
  })

  function handleKeyUp (event: KeyboardEvent) {
    if (event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "6") {
      let id = "psmenu_58" + event.key
      openMenu(id)
    }
  }

  for (var i = 0; i < PSNo.length; i++) {
    PsItems.push(
      <ListItem 
        key={PSNo[i]}
        content={<span>Öppna meny för {PSNo[i]}</span>}
        shortCut={PSNo[i].substr(PSNo[i].length - 1)}
      />
    )
  }

  return (
    <div>
      {PsItems}
    </div>
  );
}

export default SettingsPSItems;
