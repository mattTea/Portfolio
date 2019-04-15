# Project: Airport

## Towards achieving these goals

- I have a methodical approach to solving problems
- I can model anything
- I can TDD anything

------

## Action Plan

Details [here](https://github.com/makersacademy/airport_challenge)

------

## Evidence

- I can answer yes to the following...
  - I can break down a problem into user requirements and object models
  - I can diagram and explain my TDD process to my peers and/or a coach

------

## Updates and comments

Project completed: [8th March 2019](https://github.com/mattTea/airport_challenge)

Code review comments against pull request [here](https://github.com/makersacademy/airport_challenge/pull/1328)

Problem was broken down using the following steps for each subsequent user story...
1. Break out the objects from the user stories (the nouns, such as `Plane`, `Airport`)
2. Break out the messages from the user stories (the verbs, such as `land_plane`, `prevent_landing`)
3. Create object table (domain model) showing which objects the messages can be sent to
4. Write out how a user might expect to interact with the feature (example feature test in irb)

Solution was test-driven using the following steps...
1. ...
2. ...


**What I learnt more of...**

- Improving my [Problem breakdown process]()
- Improving my [TDD process]()


**What I found difficult and want to work on more...**

- Splitting responsibility across classes correctly (all methods ended up on the `Airport` class)
- Using context blocks in rspec tests