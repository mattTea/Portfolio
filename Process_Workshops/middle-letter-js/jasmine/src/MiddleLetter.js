function middleLetter(string) {
  // return string
  if (string.length < 3) {
    return string
  } else {
    return string.slice(1,2)
  }
}