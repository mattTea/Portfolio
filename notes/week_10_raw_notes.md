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


## DAY 2

[Self assessment form](https://docs.google.com/forms/d/e/1FAIpQLSc7TWi5Vnx1zmnQdHHfCwozKMLXeQDr9M0oDxkzrYeBVAkB4w/viewform?usp=sf_link)

(My answers in an email)

To add to my refactor process

- Did you start with a feature test?
- Do your tests pass?
- Is your test coverage high? (>95%)
- Do your unit tests mock the dependencies of the object they are testing?
- Does the linter (e.g. Rubocop, ESLint) pass with no warnings?
- Are your variable, method, & class names clear and descriptive?
- Explain briefly how your program works, as if to a layperson
- Does your code read clearly, like the above?

- Does your README
  - Describe how to install dependencies, run your tests, and run the project?	
  - Describe your approach?	
  - Describe how you structured your code and why?	
  - Include a screenshot of your running app?	
  - Have reasonable spelling & grammar?	

- Do your commit messages clearly describe what that commit does?
 
- List your classes and their responsibilities
  - Does each follow the single responsibility principle?
  - Ask each class, spec and method/function what it does, if the reply involves the word "and" you probably need to refactor.

- Is each method & class as small as possible?

- Do you notice any of the following common problems in your code?
  - One or two classes that do all the work
  - One class is significantly longer than all of the others
  - Most methods don't return anything, instead they modify instance variables
  - The feature tests don't use a test framework (e.g. RSpec or Jasmine)
  - The decimal points are missing on the end of the numbers
  - The tests only pass today, because the dates aren't mocked or passed in as arguments
  - Transaction is abbreviated to `trans` or `txn`
  - A Transaction class that has a method that prints itself

- Can you think of any alternative designs or approaches that might work better?


### TODOs

- Feature test YES
- Test coverage YES
- Linter YES
- Readme YES
- One class does all the work (Account) FIXED
- Methods should return something, instead of modifying instance variables and state YES
  - NOTE: if methods return their object they can be chained - this is good practice
    - `return this`

Think about splitting out another class to handle printing. Also look at each method to see if it should be returning something (rather than amending instance variables)


Start with extracting Statement out YES

- Account
- Statement
- ONE MORE -> (createTransaction() [another could be convertDate()]


## Second self assessment

- Each method fewer than 7 lines
- Each class fewer than 50 lines
- Test for behaviour more? <--


------

## Tech Interview Workshop with Becks

#### Take Home Tech Tests

Just Eat one is online

- Want you to play with their api
- Give you user stories
- Ask you questions about it


#### Tips

- Read question
- Research language and technology points
- Always TDD
- Communicate about timeframes and give yourself longer than you think you need
- Do MVP first (and extra if you want/can)
- README super-important for communicating


- Hired from Makers because you're motivated and capable of learning (not for what you know)


#### Projects

- Always know how to talk through your projects
- Be able to sketch the architecture
- Discuss commits


#### Tech chit-chat

- Describe ways of working (agile), approaches, concepts (TDD, SOLID, DRY...)
- What events do you go to
- What do you know

Look at interview_questions pill

------

# DAY 3

`Transaction` is now injected into account.deposit() and .withdraw()

To ensure tests are isolated...
- Look at all Account tests where `deposit` or `withdraw` are called
- Create a Transaction SpyObj
- Pass the spyObj into the deposit and withdraw tests

------

## Second Tech Test

### Gilded Rose.

Link to [Gilded Rose repo](https://github.com/makersacademy/course/blob/master/individual_challenges/gilded_rose.md)

Link to JavaScript [repo](https://github.com/guyroyse/gilded-rose-javascript)

Link to my forked [repo](https://github.com/mattTea/gilded-rose)

------

## DAY 4

Final Project [resource library](https://airtable.com/shrrLZLGlnxK79TdQ) from Sophie

_I am trialling a 'library' of resources for developers at Makers. It's really just another way of seeing what we have in GitHub, hopefully it's a bit easier to navigate. I've started collating the resources relevant to final projects here: https://airtable.com/shrrLZLGlnxK79TdQ_


### Gilded Rose

Great [resource](https://blog.wax-o.com/2015/05/an-alternative-to-if-else-and-switch-in-javascript/) for alternatives to `if/else` or `switch` statements

Code snippet from above

_Getting a value from a basic object literal by its key..._

```javascript
let foo = ( {
  a: 1,
  b: 2,
} )[ bar ] || 3;

// if bar is a, foo will be 1
// if bar is b, foo will be 2
// if bar is anything else, foo will be 3
```

also valid code...
```javascript
myFunction( ( {
    a: 1,
    b: 2,
} )[ bar ] || 3 );
```

------

### Self-assessment

Self-assessment for for [gilded rose](https://forms.gle/9wVFGFGUbyw3cBKBA)

