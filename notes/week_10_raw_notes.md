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

------

## Feedback from observed test - Quiz

### My feedback

- Didn't write out a story of the feature/feature test beforehand, which made me go back and have to make changes on the fly
- I jumped too quickly to try to solve the 'capture user input' problem in one go, I got back to building the simplest thing to pass the test towards the end of the session, but should have got there much earlier
- Thought I did ok on capturing the problem, although I could have done more to break it down and plan my thinking, as I mentioned above
- When I had a few minutes after the session to think how I should have solved it, I came up with much simpler solution options, so a takeaway for me is that I should give myself time (in these higher pressure situations) to think through the end-to-end feature


### Katerina feedback

Hi Matt, sorry for the delay. Here is my feedback. Please let me know if anything is unclear and if you have any questions:


#### Initial planning

```
I like your initial planning and that you write users stories but these are very high level. The breakdown part of this planning is good but you don't break down the first user stories very much which doesn't leave you with a focussed view of how to proceed?

I think as you mentioned above this is your biggest downfall as I'm not sure you're clear on what direction you're going in and what the flow of the program is. 

The breakdown of steps in your planning should clearly show you what behaviour you need.
```

#### TDD Process

```
I'm not sure if the first test is forcing the behaviour you actually want? Why are these values coming from defined an extra variable in your test code rather than forcing this state on your object (the question stored in memory) in your Quiz object? You do get where you need after a few minutes but one of the test variables are not useful. I believe this is what causes you some confusion at 13 min 27 secs and it also delays you from realising that the real error is your syntax.

I don't see you checking to see the exact file and line number where the error message is being thrown which should be an essential step in your debugging process.

At 15.16 your error is confusing and is not helpful due to your test setup. When you delete the unnecessary questions variable at 16.44 you get the error message I would expect.

I think it's worth noting that your 2nd test is written at 19.00 minutes in - it took quite a long time to get there 

23.33 Initially, your second test is about a user being able to input some text but your text is actually testing both display of a question and the prompt. Your test should probably be around the fact that a user can input an answer - in this case 'Madrid'.
```

#### Program design/flow

```
If we look from a naming perspective, here the function showQuestion (singular) returns questions (plural) which seems like a mismatch in intention and why does this need to take a parameter. 

17 min 34 seconds. You have a questions parameter on your object which does not need to be there and isn't being used so it's dead code.``` 
Extra setup (which is not needed for this review)

18.29 - at the moment it's probably not necessary to create a GitHub repo as this is a technical test about your process. However, this is something I would clarify at the beginning of a live tech test the same as you would do when you enquire if about a README
```


#### Flailing

```
You flail in the last few minutes around how to test user input. I think the main problem is that you haven't thought about the flow of your program from a high level and don't have this clearly in your head so when it comes to the tests they aren't helping you as they should be to drive your code and structure your program.
```