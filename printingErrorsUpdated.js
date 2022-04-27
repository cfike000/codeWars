function printerError(s) {
    return `${s.split('')
      .filter(x => !'abcdefghijklm'
      .split('')
      .includes(x))
      .length}/${s.length}`
}
