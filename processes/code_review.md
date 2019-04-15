

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







#### Alex code review for Chitter

1. Readme

Nice clear view of how you test drove your solution

No instructions for downloading, running or setting up dbs though
- Tried running tests (rspec) but can't get them to run, I assume because I have no db set up
- Needed to install Ruby 2.5.1 to bundle gemfile
- Ruby version in gemfile seems to be a reason your Travis CI build failed
- Installed Ruby 2.5.1 and all tests still fail (probably as I have no install instructions)
- For the same reason I can't access localhost:4567/messages

(We worked through this and got the db running - thanks! Still can't get the tests to pass though)


2. Commit messages as a story

Your commit history...
- first commit test up basic testing infra, no database yet
- passed draft first test, shows in index
- tested create method;
- create method
- removed create method for message
- starting new user section, ready for testing
- sign up basic, passed
- passed draft username and name next to message on index
- passed draft validation email/username, but not displaying specific e…  …
- passed test where user no need login to see index
- only can post message if logged in
- readme 1st draft
- after rubocop

Shows clear progression, would be great to include reference to the user stories to show how the requirements were met at the relevant steps


3. Tests

Database set up using rake commands, but tests still not passing

Only a couple of Rubocop warnings - good work!


4. Quick wins

- Naming... 
  - RESTful structure used well in controller file
  - Models look really nice and short, but I can't work out how the methods work (I'm guessing these may be built in methods in Active Record?) - I'm trying to see the methods that the tests refer to

- Flow of app... 
  - Error messages don't give a way back to let the user add correct data

- Good TDD evidence through and really like the process you documented in your readme





#### Cosmin code review for Bowling

1. How far did you get?

Features
- Gutter game
- One frame
- Multiple frames
- Spares
- Strikes
- Final Frame

Bonus Features
- UI

Sounds like you might have got way further than basic requirements, particularly around saving and storing game details


1. Readme

Really clear breakdown of problem, rules and user stories

(Didn't see download/install instructions)



2. Commit messages as a story

Commits tell a nice story of progress and building feature complexity through test-driving, focusing on individual functionality at a time

Nice description of where you got to and what you'd like to improve on the last commit message.


3. Tests

Tests all pass

Wasn't sure what commands to try in console to try to run

Tests cover some edge cases around invalid scores

Tests clear and short, so they're very readable




4. Quick wins

