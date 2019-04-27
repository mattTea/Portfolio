function middleLetter(string) {
  // return string
  if (string.length < 3) {
    return string
  } else {
    return string.slice(string.length / 2, string.length / 2 + 1)
  }
}