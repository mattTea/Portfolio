# I help my teams succeed

## I write code that is easy to change

### Reflect: What does it mean to write code that is easy to change?

- Easily readable by someone coming to the code, without having had the benefit of test-driving, or being involved in the early design decisions
- Code (and associated tests) that is loosely coupled, so that changes in one part of the codebase don't affect others, and don't break unrelated tests

- The option of rewriting a program may be possible in a small learning environment, but is not for enterprise programs. It should be possible for any developer on a team to make a change, so ensuring the code is readable, and easy to change is essential.

For code to be easy to change, it should...
- have accurate, descriptive naming throughout 
- have short, single responsibility functions or methods
-  be loosely coupled so that "the creation of an instance is separate from its usage. This way, it is possible to replace the dependencies without changing the class that will use them."
- "Encapsulation: as mentioned before, the less each object knows about the others, the better since they will depend less on them. As explained in the refactoring goal, whenever possible, I delegate internal behaviour to private functions, use setter methods instead of giving multiple objects access to another object’s properties, etc."





------

### Plan: List evidence you aim to collect that would together show you have credibly achieved this goal

**Bowling...**
- Go through the review rubric in `docs` [folder in repo](https://github.com/makersacademy/bowling-challenge/blob/master/docs/review.md)
- Ask these questions of your code — the answers should all be yes:
  - Do the tests pass?
  - Does the linter pass?
  - If you break the code, do the tests fail?
  - Is the code straightforward and easy to read? Does someone who isn't me think so?
  - Is the code well designed? (e.g. broken into multiple objects, each with a single responsibility)

- Did you test drive the whole thing?
- What does a coach think of it?


**MakersBnB...**
- _Have you received and given code reviews?_
  - Code reviews at pull request before we merged
  - Decisions were often shared between tests and code was written
  - Additional commits were added to PRs where feedback resulted in a change
  - Pairing on everything meant that 2 people always had a good view on design decisions for every bit of code, and the short reviews at each merge (also small, no branches lived for more than a few hours) meant all 4 of us could learn about every aspect of the code

- _How are others finding building on the code you wrote? Can they understand it? Can they build upon it? Ask them!_
  - We all built easily on each others code, and where we changed things we shared that
  - It also taught us not to get too precious over our own code, but to be pragmatic

- _Are you happy with the code you're writing? Is it as good as code you'd produce alone? Better?_
  - Decisions felt more thorough as each of us had to explain each of our decisions

**General**
- I'm going to complete a challenge and get a review from a coach (credible)


Feedback from a coach, based on the following questions
- Is the code straightforward and easy to read?
- Is the code well designed? (e.g. broken into multiple objects, each with a single responsibility, and with descriptive naming)
- [Link to feedback for tbc project]()

Feedback from a team member, based on following questions
- How did you find building on the code I wrote? 
- Could you understand it?
- Could you build upon it?
- [Link to feedback from tbc for makersBnB]()

Feedback from code reviews
- [Example tbc]()
- [Example tbc]()

------

### Can you say this about yourself? 

Yes / No

------

### Reflect: How does each of the following examples of your best work show evidence of achieving this goal? (e.g. Diode projects, Github repos)



------

### What feedback have you had?



------

### Active projects



------

### Finished projects

[Bowling Scorecard](https://github.com/mattTea/Portfolio/blob/master/projects/bowling.md)

[Makers BnB](https://github.com/mattTea/Portfolio/blob/master/projects/makersBnB.md)

[Thermostat](https://github.com/mattTea/Portfolio/blob/master/projects/thermostat.md)

[Rock Paper Scissors](https://github.com/mattTea/Portfolio/blob/master/projects/rps.md)

[Battle] (https://github.com/mattTea/Portfolio/blob/master/projects/battle.md)

[Oystercard](https://github.com/mattTea/Portfolio/blob/master/projects/oystercard.md)
