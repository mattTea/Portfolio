# I can make anything

## I can TDD anything

### Reflect: What does it mean to be able to TDD anything?

The ability to take requirements (user stories) and the behavioural descriptions they provide to guide first the test I write, and then the code I write to pass that test.

To be able to test-drive anything means that I am comfortable and confident to take any problem and follow a [structured process](https://github.com/mattTea/Portfolio/blob/master/processes/tdd.md) so that each test should be the simplest next step, and each piece of code written should be the simplest to pass that test and nothing more. I am guided by the behaviour required via a user-focused feature test and the subsequent, related unit tests.

Following this `red`, `green` and then `refactor` cycle ensures clean, minimal and well-designed code, with maximum test coverage.

------

### Process

_Overview_

- Break out the `objects` and `messages` from the user story, and create a table highlighting which messages you expect to be passed to which objects.
- Write a feature test for the user story (how a user may expect to interact with the class(es) and method(s) in the story) - this can be in a `repl`, or later in the development process, in an automated feature test file.
- Use the first feature test failure to guide the first unit test.
- Use the first unit test failure to guide the first (and absolute simplest) code implementation to pass both tests.
- Repeat.


_Detail_

My [process](https://github.com/mattTea/Portfolio/blob/master/processes/tdd.md) in detail, for test-driving anything.


------

### Plan: List evidence you aim to collect that would together show you have credibly achieved this goal

1. My process to test-drive any problem through to a code solution.
    - [Link to process](https://github.com/mattTea/Portfolio/blob/master/processes/tdd.md)

2. Screen recording of me using this process during a process review workshop.
    - [Links to screen recording](https://drive.google.com/open?id=1MLUtaq2My1sc5P6h8VSzPWSAE1z97Bpw)

3. Commit histories that tell the test-driven process story of my applications
    - [Link to Bowling Scorecard](https://github.com/mattTea/bowling-challenge/commits/master)
    - [Link to Thermostat commit history](https://github.com/samanthaixer/thermostatWeds/commits/master)
      - Please note that the commit history story told in the second example above isn't something I would normally follow (I wouldn't push breaking tests), but for the purposes of good pair practice and a more in-depth view of the test-driven approach used, this offers a nice example

4. Feedback from pair partners and a coach
    - [Link to feedback](https://github.com/mattTea/Portfolio/blob/master/goals_and_evidence/1_make_anything/1_tdd_anything.md#what-feedback-have-you-had)

------

### Can you say this about yourself? 

Yes


------

### Reflect: How does each of the following examples show evidence of achieving this goal?

1. The process and approach I took during the [Bowling Scorecard](https://github.com/mattTea/bowling-challenge/commits/master) project shows an improvement over my process used in earlier projects such as [Rock, Paper, Scissors](https://github.com/mattTea/rps-challenge/commits/master), because the development of the application can clearly be seen from very early simple designs and features, through increasingly (test-driven) more complex features. Described clearly in the commit message 'story'.

2. The [airport-js](https://github.com/mattTea/airport-js/blob/master/spec/PlaneSpec.js) project highlights my test-driven approach for a number of other reasons too, namely...
    - All tests are isolated
    - All tests are meaningful
    - All test descriptions are clear

    - This project wasn't completed to its full specification, but was used as a learning exercise as it was the first project I wrote in JavaScript. This forced me to learn and apply good mocking and spying practices while learning a new language and frameworks. (The full specification and my completed version of this project in Ruby can be found [here](https://github.com/mattTea/airport_challenge)).

3. Doubling objects within the [Notes app](https://github.com/mattTea/notes-app-Tuesday) project ensured my tests were fully isolated. Good examples can be seen in [this file](https://github.com/mattTea/notes-app-Tuesday/blob/master/public/src/notes-list-view-tests.js) and [this file](https://github.com/mattTea/notes-app-Tuesday/blob/master/public/src/note-controller-tests.js)

4. In the [Birthday Greeter](https://github.com/mattTea/Portfolio/blob/master/projects/birthday.md) project I first test-drove an rspec feature file, which in turn test-drove my unit tests, which then drove my code. This was the first project I automated my feature tests as part of my TDD process. I believe this kept the focus even closer on the behaviour described in each user story when driving the class structure.

------

### What feedback have you had?

#### Katerina Georgiou - Makers coach

- Shows a really good grasp of dependency injection and doubling to isolate tests. (for [takeaway challenge](https://github.com/mattTea/Portfolio/blob/master/projects/takeaway.md))


#### Sophie Gill - Makers coach

- Good technique for seeing if a test is isolated. (Referring to my use of commenting out the class or object I've doubled in a test to check that the test I'm trying to isolate still passes. This was in relation to the [Bowling Scorecard challenge](https://github.com/mattTea/Portfolio/blob/master/projects/bowling.md))


#### Riya Dattani - cohort pair partner

- Found the breaking down of each user story and problem into an object model table and example feature test (in irb) of how the program would work really useful in planning how we would step through the problem.

- Great feature test check ([code review comment](https://github.com/makersacademy/airport_challenge/pull/1328#discussion_r264163812) regarding writing irb feature test plans)


#### Samantha Ixer - cohort pair partner

- Really appreciated your keeping to really simple steps (the simplest possible) as we test-drove the application, and your longer commit messages helped to build the detail and commit history story.
- Your approach to pairing, using github project collaboration, forced regular commits and a real focus on test-driving.
- Your TDD process is very thorough and enabled us to get into the swing very comfortably.
- Your regular questions regarding '_how would a user expect to use this_' kept the focus on how the features should work in a holistic domain view when test-driving - a real strength of yours.


#### Wardah Tarar - cohort pair partner

- You really helped me understand dependency injection.
- You successfully created doubles in our tests, ensuring they were fully isolated (within [notes app](https://github.com/mattTea/Portfolio/blob/master/projects/notes-js.md))


------

### Active projects


------

### Finished projects

[Bowling Scorecard](https://github.com/mattTea/Portfolio/blob/master/projects/bowling.md)

[Takeaway](https://github.com/mattTea/Portfolio/blob/master/projects/takeaway.md)

[Oystercard](https://github.com/mattTea/Portfolio/blob/master/projects/oystercard.md)

[Airport](https://github.com/mattTea/Portfolio/blob/master/projects/airport.md)

[Boris Bikes](https://github.com/mattTea/Portfolio/blob/master/projects/boris_bikes.md)

[TDD Practice 1](https://github.com/mattTea/Portfolio/blob/master/projects/tdd_practice_1.md)
