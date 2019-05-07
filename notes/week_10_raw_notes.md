Week 10
=======

## Day 1

Tech tests and code quality

Choose any language

- SRP
- DRY
- Naming
- Test-driven
- Encapsulation
- Professional quality -> the best way of writing the code

- Want code that it is short so it is more readable (instead of one over the other!)


Algorithmic complexity class (for grads) that Alice delivers (taster today) - 2pm with grads
- Designing algorithms to solve problems
- Useful for problem solving, portfolio/reviews and for tech tests


### This week

1. Tech test
2. [Self assessment](https://docs.google.com/forms/d/e/1FAIpQLSc7TWi5Vnx1zmnQdHHfCwozKMLXeQDr9M0oDxkzrYeBVAkB4w/viewform?usp=sf_link)
    - Iterate over test using assessment
    - When complete send to Alice, next will be sent
    - Expect to complete 2 tests

3. Process observation
    - Book a slot - 30 mins with a coach (spreadsheet will come out today) **2pm Friday**
    - To practice review (coach will give you feedback)

4. Algorithm design workshop


### Side note...

Write a refactor process based on my own thoughts and Alice's code review feedback

------

Algorithm Design
================

[Workshop repo](https://github.com/makersacademy/skills-workshops/tree/master/week-10-apprs/writing-algorithms)

------

Sequenced (ordered) set of instructions | input -> specified output

How get from `input` and `output` to an `algorithm`?
- Think how would I intuitively solve this (naturally), then capture that (we have experience of real world objects so use that - will help thought process!)
- How was your brain thinking when you saw the problem - write it down

1. Describe problem (inc all variables/form of input) -> define signature of your function (_form of input forms the signature of your function_)
    - What parameters of input and type of those parameters
    - i.e.

                      string[]             int   
                  ------------------    ---------
                  [array of strings]    [integer]
        ```ruby
        def group     (cohort,         no_of_groups)
        ```

    - input = ["alice", "kat", "sophie"], 2
    - output = [["alice", "kat"], ["sophie"]]

------

2. Create test cases (table with inputs and expected outputs)
    - Include edge cases and normal cases
      - normal "happy" case
      - minus numbers
      - different types entered
      - determine outputs (throw error, unspecified, etc)
        - `defensive` = throw error (C#)
        - `contract` = I'll specify inputs, if you go outside of those I won't help you! (Ruby, Python)

      - as a dev it is your choice how to handle error and edge cases
      

input | output
-------------------- | --------------------
["a", "k", "s"], -2 | not specified / error
["a", "k", "s"], 2 | [["a", "k"], ["s"]]
[], 2 | 
[], 0 | 

------

3. How would you do this with real objects (books, cards, paper, etc)

4. Write down each specific step

5. Step-by-step -> translate to code
    - If you can't write a step, the step is too complex, break it down again
    - Write the steps in comments in code, then write the code for that step under that line

6. Run test cases

7. Fail? Paper debug!

------

## Challenge

Write an algorithm using above process that

- takes array of integers
- returns de-duplicated array


1. Signature of function...

```ruby
                              []
                        -------------
                        [array of ints]
def returnDuplicates        (array)
```

2. Table of test cases

input | output
------------------ | ------------------
[] | [] 
[1, 2, 3] | []
[2, 2] | [2]
["a", 1] | return error
"string" | return error


3. 

- loop through all indexes until index = lengthOfArray
    - index = i
    - does input[i] = index[i+1...n]
        if yes -> push value to output array and stop loop
        i += 1
        - does input[i] = index[i+1...n]
- 

1. Take first number
2. Check next number - is it the same?
    - If yes, push to new bucket (and end loop here)
    - If no, continue to next number
    - And repeat

3. When end of numbers list is reached, start on next number, and repeat above

```javascript
input = [0, 1, 0, 3, 7, 4, 3, 3]
output = []

// loop through each number in array
function returnDuplicates(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j = 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        output.push(input[i])
      }
    }
  }
  return output
}

returnDuplicates(input)
```

Above didn't work!
