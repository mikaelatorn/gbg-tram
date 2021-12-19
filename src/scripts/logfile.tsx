import reportWebVitals from "../reportWebVitals";

function readlogfile() {
  fetch('./log-exempel.txt')
  .then(response => response.text())
  .then(text => parseLogRow(text))
}

function parseLogRow(file: string) {
  const rows = file.split("\n");
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].slice(0,2) === ';L') {
      const index = rows[i].indexOf(';b')
      const row = rows[i].slice(index + 1, rows[i].indexOf(';', index + 1));
    }
  }
}

function hexToBinary(hex: string) {
  hex = hex.replace("0x", "").toLowerCase();
  var out = "";
  for(var c of hex) {
      switch(c) {
          case '0': out += "0000"; break;
          case '1': out += "0001"; break;
          case '2': out += "0010"; break;
          case '3': out += "0011"; break;
          case '4': out += "0100"; break;
          case '5': out += "0101"; break;
          case '6': out += "0110"; break;
          case '7': out += "0111"; break;
          case '8': out += "1000"; break;
          case '9': out += "1001"; break;
          case 'a': out += "1010"; break;
          case 'b': out += "1011"; break;
          case 'c': out += "1100"; break;
          case 'd': out += "1101"; break;
          case 'e': out += "1110"; break;
          case 'f': out += "1111"; break;
          default: return "";
      }
  }

  return out;
}

export { readlogfile }