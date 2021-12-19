function insertLogInfoText (id: string | null, value: string) {
  document.getElementById(id).innerHTML = value
}

export { insertLogInfoText  }