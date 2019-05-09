# I can make anything

## I can refactor anything

### Reflect: What does it mean to be able to refactor anything?

Refactoring is not about adding anything new to a program, in fact it absolutely should not add any new functionality. It is the process of making code more readable, easier to change, and ensuring the practices of DRY code, single responsibility and testing in isolation are implemented as much as is practical.

Refactoring is of benefit to members of the development team, users should see no change and all tests should continue to pass.

To be able to refactor anything means that it is possible to take any developer's code, understand the goals, the style and the design decisions made, and improve the code in all the above ways without forcing a particular style.
It is not about changing another developer's code to meet all your own style opinions, a developer should be pragmatic and understanding of other styles when refactoring.

------

### Plan: List evidence you aim to collect that would together show you have credibly achieved this goal

1. Commit histories that show how I have refactored my own and others code, making code easy to read, and easy to change
    - [Link to examples](https://github.com/mattTea/portfolio/blob/master/goals_and_evidence/1_make_anything/5_refactor_anything.md#reflect-how-does-each-of-the-following-examples-show-evidence-of-achieving-this-goal)

2. Feedback from pair partners
    - [Link to feedback](https://github.com/mattTea/Portfolio/blob/master/goals_and_evidence/1_make_anything/5_refactor_anything.md#what-feedback-have-you-had)

3. Feedback from a coach
    - [Link to feedback](https://github.com/mattTea/Portfolio/blob/master/goals_and_evidence/1_make_anything/5_refactor_anything.md#what-feedback-have-you-had)

------

### Can you say this about yourself? 

Yes

------

### Reflect: How does each of the following examples show evidence of achieving this goal?

1. During the building of a JavaScript single page [Notes app](https://github.com/mattTea/Portfolio/blob/master/projects/notes-js.md) I inherited code that my pair partner had produced and worked on with a previous pair. I was able to refactor many of the tests to fully isolate the objects under test. This refactoring can be seen starting where I inherited the code at [this commit](https://github.com/mattTea/notes-app-Tuesday/commit/f8ed791a81026b99c266d76260eccce314c0a747) through to [this refactored commit](https://github.com/mattTea/notes-app-Tuesday/commit/20b29a826707be723a6abb7c0d21dc1560780901) and [this refactored commit](https://github.com/mattTea/notes-app-Tuesday/commit/af4b815564cbcdfd104ceb7ab2b7c853de4ab971).


2. After building up some long methods in the [Bowling Scorecard](https://github.com/mattTea/bowling-challenge/commits/master) challenge, I refactored the code (in [this file at this commit](https://github.com/mattTea/bowling-challenge/blob/5f77b07c5a/src/Frame.js)) to something that was cleaner, DRY-er, much closer to single responsibility, and easier to read and change. It can be seen in the same file [here](https://github.com/mattTea/bowling-challenge/blob/9aa16aa789dd49665d89e48c96ff86da33cd6f18/src/Frame.js).

-------

### What feedback have you had?

#### Alice Lieutier - Makers coach

- Took onboard feedback and successfully refactored `Frame` object in [Bowling Scorecard](https://github.com/mattTea/bowling-challenge/blob/9aa16aa789dd49665d89e48c96ff86da33cd6f18/src/Frame.js)


#### Wardah Tarar - cohort pair partner

- Helped me understand dependency injection, and you enabled us to successfully refactor our code to ensure our tests were fully isolated.

------

### Active projects

[Notes App](https://github.com/mattTea/Portfolio/blob/master/projects/notes-js.md)

------

### Finished projects

[Bowling Scorecard](https://github.com/mattTea/Portfolio/blob/master/projects/bowling.md)
