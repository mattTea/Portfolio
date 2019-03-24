## Project: Battle

#### Towards achieving these goals

- I have a methodical approach to solving problems
- I write code that is easy to change


#### Action Plan

Full details [here](https://github.com/makersacademy/course/tree/master/intro_to_the_web)

Specific `Battle` app details start at [this step](https://github.com/makersacademy/course/blob/master/intro_to_the_web/getting_started_with_battle.md)


#### Evidence

My [commit history](https://github.com/mattTea/battle/commits/master) should relate a story through the test-driven development of the app, including refactor steps

Features are built up iteratively, then refactored to ensure principles such as the following are adhered to...
- Single responsibility
- Tests are isolated
- Views are simple
- Controllers are skinny
- Model classes are encapsulated and delegated appropriately
- Model methods are short, simple and readable


#### Updates and comments

Project completed: [22nd March 2019](https://github.com/mattTea/battle)

<!-- Updates needed in this section -->

Problem was broken down using the following steps for each subsequent user story...
1. Break out the objects from the user stories (the nouns, such as `Plane`, `Airport`)
2. Break out the messages from the user stories (the verbs, such as `land_plane`, `prevent_landing`)
3. Create object table (domain model) showing which objects the messages can be sent to
4. Write out how a user might expect to interact with the feature (example feature test in irb)

Solution was test-driven using the following steps...
1. ...
2. ...


**What I learnt more of...**

<!-- Updates needed in this section -->

- Improving my [Problem breakdown process]()
- Improving my [TDD process](), incorporating capybara feature tests for web apps


**What I found difficult and want to work on more...**

<!-- Updates needed in this section -->

- Splitting responsibility across classes correctly (all methods ended up on the `Airport` class)
- Using context blocks in rspec tests
