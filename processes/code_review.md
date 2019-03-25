

#### Arthur code review for RPS

1. Readme

Very good clear and working instructions to download and start!

(Missing the url to view game though)

Name in lights requirement fully met! And love the imagery to play the game

Game works, so requirements look to be met


2. Commit messages as a story

- First commit - test infrastructure set up
- user can enter name and see name in lights
- Refactored and extracted styles to styles.css
- user can select move and see selection
- computer opponent class created
- fulfilled user stories
- Update README.md

Story progresses and most commit messages look nice and descriptive, a bit more detail might be helpful for the `fulfilled user stories` commit


3. Tests

All 4 pass, coverage = 100%

As you mentioned, the tests seem quite light though. Some comments I picked up last week, which might help...
- For good TDD evidence - commit regularly, probably before refactoring once a test passes, so you can see the test passing and the refactoring steps in the commit message

- Commit message should tell us something about the code that has changed
  - Commit messages could be the test name (descriptive of behaviour)
  - Commits should read as a story


4. Quick wins

One rubocop `convention` warning

Naming - Do things do what they say they do?
- Project structure looks clean, and file names descriptive
- Model classes and methods look clear, very good use of single responsibility, and classes extracted to keep everything simple
- Nice use of constant for rock, paper, scissors 'weapon' types


5. Code

Clean use of web_helpers to keep tests DRY

Haven't stubbed the randomness for computer selection in `computer_spec.rb`

All outcomes (win, lose or draw) haven't been tested for I don't think (`show_result_spec.rb` feature test)

`name.erb` view file is empty?

View files have a lot of `<br>` tags, assume used for spacing, rather than using css

Controller (`app.rb`) is nice and skinny and easy to follow

(`puts` line has been left in the `POST /choice` route)

CSS - really nice and visual, clean layout, as it should be for a game!


6. Other good practice comments from rubric (https://github.com/makersacademy/rps-challenge/blob/master/docs/review.md)

- Keeping presentation strings out of business logic layer (model/Class) files
- No long if/else statements in your code - good work!
- Well done for extracting `Computer` class
- No use of global variables in your code either - thumbs up!


1. **Where do you start?**
    - Readme
    - Run tests
    - Commits (and messages) - should read as a story
    - (Focus on what you want to learn first!)

2. **How identify quick wins (and what are they)?**
    - Class and method naming -> doing what they say they do
    - Single responsibililty (methods and classes)
    - Shorter methods
    - (Use a linter / test coverage)

3. **Has the person aligned the pull request to a goal?**
    - _I think this PR is aligned to 'x' and this is why_


### Further notes on code reviews

- Good TDD evidence
  - Commit regularly, probably before refactoring once a test passes, so you can see the test passing and the refactoring steps in the commit message

- Commit message should tell us something about the code that has changed
  - Commit messages could be the test name (descriptive of behaviour)
  - Commits should read as a story

Testing state is kind of ok as a starting point to test drive the class, but should then be replaced by a test that tests behaviour (testing a method that manipulates the value)
- Tests should be calling a method, not an attribute

https://github.com/mattTea/rps-challenge/blob/master/docs/review.md

https://github.com/makersacademy/course/blob/master/pills/code_reviews.md
