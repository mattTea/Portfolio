function middleLetter(string) {
  if (string.length < 3) {
    return string
  } else if (string.length % 2 === 0) {
    return string.slice(string.length / 2 - 1, string.length / 2 + 1)
  } else {
    return string.slice(string.length / 2, string.length / 2 + 1)
  }
}
