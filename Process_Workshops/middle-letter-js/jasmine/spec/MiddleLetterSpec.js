describe("MiddleLetter", function() {
  it("returns single character for a single char length string", function() {
    expect(middleLetter("a")).toEqual("a")
  })

  it("returns both letters for a 2 character length string", function() {
    expect(middleLetter("ab")).toEqual("ab")
  })

  it("returns middle letter of 3 letter string", function() {
    expect(middleLetter("abc")).toEqual("b")
  })

  it("returns middle letter of a 5 letter string", function() {
    expect(middleLetter("abcde")).toEqual("c")
  })

  it("returns middle letter of 17 letter string", function() {
    // to check my last commit message
    expect(middleLetter("abcdefghijklmnopq")).toEqual("i")
  })

  it("returns middle 2 letters of a 6 letter string", function() {
    expect(middleLetter("abcdef")).toEqual("cd")
  })
})