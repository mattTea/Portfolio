require 'middle_letter'

describe "#string_length" do
  it "checks whether string is odd or even" do
    string = "hello"
    expect(string_length(string)).to eq "odd"
  end
end

describe "#get middle" do
  it "returns middle letter in odd string length" do
    string = "hello"
    expect(middle_letter(string)).to eq "l"
  end
end