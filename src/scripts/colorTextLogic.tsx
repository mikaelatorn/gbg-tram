function changeElementColor (id: string | null, color: string) {
  document.getElementById(id).style.fill = color;
}

function toggleArrowVisibility (id: string | null, color: string) {
  let element = document.getElementById(id)
  element.setAttribute('style', 'stroke:' + color + ' !important')
  let children = element.children
  
  for (var i = 0; i < children.length; i++) {
    children[i].setAttribute('style', 'stroke:' + color + ' !important')
  }
}

function toggleInfo (id: string | null, value: boolean) {
  let element = document.getElementById(id) 
  if (!element) return;
  if (value) {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

export { changeElementColor, toggleArrowVisibility, toggleInfo }
