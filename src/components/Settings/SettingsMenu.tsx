import { useEffect } from "react";
import ToggleTextItems from "./Partials/ToggleItems"
import PSGlobalItems from "./Partials/PSGlobalItems"
import PsItems from "./Partials/PSItems"
import AuthItems from "./Partials/AuthItems"

function SettingsMenu() {
  useEffect (() => {
    document.getElementById("SettingsButton").addEventListener("click", () => {
      console.log("hi")
      let element = document.getElementById("setting-menu")
      element.style.display === "block" ? element.style.display = "none" : element.style.display = "block"
    });
  });

  return (
    <div className="settings-container">
      <div id="setting-menu">
        <ToggleTextItems />
        <PSGlobalItems />
        <PsItems />
        <AuthItems />
      </div>
    </div>
  );
}

export default SettingsMenu;
