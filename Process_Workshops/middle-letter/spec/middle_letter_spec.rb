require 'middle_letter'

describe "#get middle" do
  it "returns middle letter in hello" do
    string = "hello"
    expect(middle_letter(string)).to eq "l"
  end

  it "returns middle letter in goodbye" do
    string = "goodbye"
    expect(middle_letter(string)).to eq "d"
  end

  it "returns middle 2 chars of Arthur" do
    string = "Arthur"
    expect(middle_letter(string)).to eq "th"
  end
end