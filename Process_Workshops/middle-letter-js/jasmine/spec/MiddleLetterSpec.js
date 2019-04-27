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
})