# Project: Takeaway

## Towards achieving these goals

- I have a methodical approach to solving problems
- I can TDD anything

------

## Action Plan

Project details available [here](https://github.com/makersacademy/takeaway-challenge)

------

## Evidence

I can answer _yes_ to the following...
- Do the tests pass?
- Does rubocop pass?
- If you break the code, do the tests fail?
- Is the code straightforward and easy to read? Does someone who isn't me think so? [link to Sam's code review](https://github.com/makersacademy/takeaway-challenge/pull/1260)
- Is the code well designed? (e.g. broken into multiple objects, each with a single responsibility)
- Did you test drive the whole thing?
- What does a coach think of it?
  - Katerina... "_Shows a really good grasp of dependency injection and doubling to isolate tests._"
  
  - I asked for additional feedback to help with simplifying my tests even further, as I had more than one assertion in a certain test. Katerina asked these coaching questions of me...

    1. Can you add flexibility to `@orders` and `@dishes`?
      - Yes, by removing their hard coded values (e.g. `@orders = []`) and moving them to be parameters in `initialize` with these as default values
      - This means instead of tying myself in knots trying to double these in the tests I can just set up a variable with the state I need before writing the assertion (examples in [this file](https://github.com/mattTea/takeaway-challenge/blob/master/spec/menu_spec.rb))


    2. Can you simplify the method you are trying to test?
      - Yes, this is the `select_dish` method and it was doing a few checks before it did its thing
      - I have now extracted this out to a `check_order_status` method


    3. Are your methods correctly named for what they are doing?
      - One for me to focus on to keep improving


    All tests now only have a single expect statement, moving [from this](commit/link/to/file) to this (commit/link/to/file)

------

## Updates and comments

Project completed: [17th March 2019](https://github.com/mattTea/airport_challenge)

Code review comments against pull request [here](https://github.com/makersacademy/takeaway-challenge/pull/1260)

Processes I believe have improved through this project
- Feature testing ([before]() and [after]())
- Writing descriptive readmes ([before]() and [after]())
- Domain modelling
- Class extraction


**What I learnt more of...**

- Dependency injection and doubling (specifically to isolate classes in tests)


**What I found difficult and want to work on more...**

- As mentioned above, keeping things as simple as possible in my methods, so that I can keep things flexibile (not hard-coded), which helps set context and simple test assertiona