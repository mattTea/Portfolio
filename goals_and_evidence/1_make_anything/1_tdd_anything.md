# I can make anything

## I can TDD anything

### Reflect: What does it mean to be able to TDD anything?

The ability to take requirements (user stories) and the behavioural descriptions they provide to guide first the test I write, and then the code I write to pass that test.

To be able to test-drive anything means that I am comfortable and confident to take any problem and follow a [structured process](https://github.com/mattTea/Portfolio/blob/master/processes/tdd.md) so that each test should be the simplest next step, and each piece of code written should be the simplest to pass that test and nothing more. I am guided by the behaviour required via a user-focused feature test and the subsequent, related unit tests.

Following this `red`, `green` and then `refactor` cycle ensures clean, minimal and well-designed code, with maximum test coverage.


#### Process

_Overview_

- Break out the `objects` and `messages` from the user story, and create a table highlighting which messages you expect to be passed to which objects.
- Write a feature test for the user story (how a user may expect to interact with the class(es) and method(s) in the story) - this can be in a `repl`, or later in the development process, in an automated feature test file.
- Use the first feature test failure to guide the first unit test.
- Use the first unit test failure to guide the first (and absolute simplest) code implementation to pass both tests.
- Repeat.


_Detail_

My [process](https://github.com/mattTea/Portfolio/blob/master/processes/tdd.md) in detail, for test-driving anything.


_Example..._



------

### Plan: List evidence you aim to collect that would together show you have credibly achieved this goal

My process to test-drive any problem through to a code solution.
- [Link to process](https://github.com/mattTea/Portfolio/blob/master/processes/tdd.md)

Screen recordings of me using this process.
- [Links tbc]()

Commit histories that tell the test-driven process story of my applications
- [Links]()
- [Link to Thermostat commit history](https://github.com/samanthaixer/thermostatWeds/commits/master)
- n.b. improve on this for red, green, refactor cycle with better descriptions of each commit and how they align to a user story

Feedback from pair partners
- [Link to feedback](https://github.com/mattTea/Portfolio/blob/master/goals_and_evidence/1_make_anything/1_tdd_anything.md#what-feedback-have-you-had)

Feedback from process workshop partners
- [Link tbc]()

Feedback from a coach
- [Link](https://github.com/mattTea/Portfolio/blob/master/goals_and_evidence/1_make_anything/1_tdd_anything.md#katerina-georgiou-makers-coach)


------

### Can you say this about yourself? 

Yes / No


------

### Reflect: How does each of the following examples of your best work show evidence of achieving this goal?

1. The process and approach I took during [project 'x']() shows an improvement over my process used in [project 'y'](), because...

2. In this [project]() I first test-drove an rspec feature file, which in turn test-drove my unit tests, which then drove my code. This was the first project I automated my feature tests as part of my TDD process. I believe this kept the focus even closer on the behaviour described in each user story when driving the class structure.

3. ...


_Things to consider:_
_- Are tests isolated?_
_- Are all tests meaningful?_
_- Are the test descriptions clear?_
_- Has a consistent TDD process been followed? How could you tell?)_


------

### What feedback have you had?

#### Riya Dattani - cohort pair partner

  - _Found the breaking down of each user story and problem into an object model table and example feature test (in irb) of how the program would work really useful in planning how we would step through the problem._

  - _Great feature test check ([code review comment](https://github.com/makersacademy/airport_challenge/pull/1328#discussion_r264163812) regarding writing irb feature test plans)_


#### Samantha Ixer - cohort pair partner

- Really appreciated your keeping to really simple steps (the simplest possible) as we test-drove the application, and your longer commit messages helped to build the detail and commit history story.
- Your approach to pairing, using github project collaboration, forced regular commits and a real focus on test-driving.
- Your TDD process is very thorough and enabled to  us into the swing very comfortably.
- Your regular questions regarding '_how would a user expect to use this_' kept the focus on how the features should work in a holistic domain view when test-driving - a real strength of yours.


#### Katerina Georgiou - Makers coach

- _tbc_


------

### Active projects


------

### Finished projects

[Takeaway](https://github.com/mattTea/Portfolio/blob/master/projects/takeaway.md)

[Oystercard](https://github.com/mattTea/Portfolio/blob/master/projects/oystercard.md)

[Airport](https://github.com/mattTea/Portfolio/blob/master/projects/airport.md)

[Boris Bikes](https://github.com/mattTea/Portfolio/blob/master/projects/boris_bikes.md)

[TDD Practice 1](https://github.com/mattTea/Portfolio/blob/master/projects/tdd_practice_1.md)
