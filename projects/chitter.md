# Project: Chitter

## Towards achieving these goals

- I have a methodical approach to solving problems
- I can model anything
- I can program fluently
- I can TDD anything

------

## Action Plan

Details [here](https://github.com/makersacademy/chitter-challenge)

- Build a twitter clone
- A Sinatra MVC web app with connected database
- Test-driven
- Travis CI configuration for automated build on pull request

------

## Evidence

- I'll plan and model the problem breakdown to ensure I understand the steps I need to take

- I'll test-drive all aspects of the solution, through capybara feature tests and rspec unit tests

- I'll follow a red/green/commit/refactor/commit cycle so my commit history tells the story of the solution development

- I'll also manually test features in the browser after each green test


<!-- (below from RPS project, as example...) -->

- Go through the review rubric in docs/
- Ask these questions of your code — the answers should all be yes:
  - Do the tests pass?
  - Does rubocop pass?
  - If you break the code, do the tests fail?
  - Is the code straightforward and easy to read? Does someone who isn't me think so?
  - Is the code well designed? (e.g. broken into multiple objects, each with a single responsibility)

- Did you test drive the whole thing?
- What does a coach think of it?

<!-- Update needed to everything below (currently from RPS) -->

------

## Updates and comments

Project completed: [24th March 2019](https://github.com/mattTea/rps-challenge)

Code review comments against pull request [here](https://github.com/makersacademy/rps-challenge/pull/1234)


My approach to breaking down this problem, and ensuring it is easy to change is outlined in this section of the [solution readme](https://github.com/mattTea/rps-challenge#my-approach)


**What I learnt more of...**

- Improving my [problem breakdown process](https://github.com/mattTea/Portfolio/blob/master/processes/problem_breakdown.md)
- Improving my [TDD process](https://github.com/mattTea/Portfolio/blob/master/processes/tdd.md), with feature tests
- Further practising [debugging](https://github.com/mattTea/Portfolio/blob/master/processes/debugging.md), particularly in web applications
  - A specific example was in unit tests not returning equality, when the application appeared to be working
  - Tightening the loop, and getting visibility through use of `save_and_open_page` and `puts` commands led me to the problem being an un-capitalised value ([seen in this commit](https://github.com/mattTea/rps-challenge/commit/63dbc5123649e6191f3e767b85228c0061f1f668))


**What I found difficult and want to work on more...**

- Debugging web applications - this project helped me practice this more, but bugs still took me longer to find than I would ideally like

- Using [class variables](https://github.com/mattTea/Portfolio/blob/master/notes/week_4_raw_notes.md#learn-more) (to solve problem where instance variables defined inside a route handler go out of scope once the response is sent back to the client)

- Ensuring _all_ classes are extracted and each only has a single responsibility
