## Project: Rock Paper Scissors

#### Towards achieving these goals

- I write code that is easy to change


#### Action Plan

Details [here](https://github.com/makersacademy/rps-challenge)


#### Evidence

- Go through the review rubric in docs/
- Ask these questions of your code — the answers should all be yes:
  - Do the tests pass?
  - Does rubocop pass?
  - If you break the code, do the tests fail?
  - Is the code straightforward and easy to read? Does someone who isn't me think so?
  - Is the code well designed? (e.g. broken into multiple objects, each with a single responsibility)

- Did you test drive the whole thing?
- What does a coach think of it?


#### Updates and comments

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
