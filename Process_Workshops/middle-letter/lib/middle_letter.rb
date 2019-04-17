def middle_letter(string)
  if string.length % 2 == 0
    second_char = string.length / 2
    first_char = string.length / 2 - 1
    return string[first_char] + string[second_char]
  else
    middle_char = string.length / 2
    return string[middle_char]
  end
end

p middle_letter("test") # => "es"
p middle_letter("testing") # => "t"
p middle_letter("middle") # => "dd"
p middle_letter("A") # => "A"
p middle_letter("of") # => "of"