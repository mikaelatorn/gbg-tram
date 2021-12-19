import elements from '../config/svgElements';
import { configGetVisibility } from './wgConfigNew'
import { changeElementColor, toggleArrowVisibility } from "../scripts/colorTextLogic"
import { toggleStopSign, toggleTimer } from "../scripts/PSLogic"

function processData(dataRow: string) {
  // if (dataRow[0] !== "#" && dataRow.includes(';L') && dataRow.includes('wg')) {
    let index = dataRow.indexOf(';b');
    let hexCode = dataRow.slice(index + 1, dataRow.indexOf(';', index + 1))
    getSvgElementStatus(hexToBinary(hexCode));
    // return hexToBinary(hexCode);
  // }
}

const lookup: any = {
  "0": "0000",
  "1": "0001",
  "2": "0010",
  "3": "0011",
  "4": "0100",
  "5": "0101",
  "6": "0110",
  "7": "0111",
  "8": "1000",
  "9": "1001",
  a: "1010",
  b: "1011",
  c: "1100",
  d: "1101",
  e: "1110",
  f: "1111",
  A: "1010",
  B: "1011",
  C: "1100",
  D: "1101",
  E: "1110",
  F: "1111",
};

function hexToBinary(s:string) {
  let ret = "";
  for (let i = 0, len = s.length; i < len; i++) {
    ret += lookup[s[i]];
  }
  return ret;
}

function getSvgElementStatus(moxabitsStr: string) {

  for (var i = 0; i < elements.length; i++)
    {
      var imgElem = document.getElementById(elements[i]);
  
      // visibility
      var color: string = configGetVisibility(elements[i], moxabitsStr);
      if (elements[i].includes("TV_")) {
        toggleArrowVisibility(elements[i] + '_Body', color)
        toggleArrowVisibility(elements[i] + '_Tip', color)
      } else if (elements[i].includes("PS")) {
        const newElement = elements[i].slice(2, 6);
        if (color === "stop-square") {
          toggleStopSign(newElement, true);
        } else if (color === "stop-square-off") {
          toggleStopSign(newElement, false);
        } else if (color === "timer") {
          toggleTimer(newElement, true)
        } else if (color === "timer-off") {
          toggleTimer(newElement, false)
        } else if (color === "stop") {
          changeElementColor(newElement + '_4', '#ff0')
          changeElementColor(newElement + '_2', '#000')
        } else if (color === "go") {
          changeElementColor(newElement + '_4', '#000')
          changeElementColor(newElement + '_2', '#ff0')
        }
      } else {
        imgElem.style.fill = color;
      }
    }

}

export { processData }