## WEEK 3

## DAY 1

#### Weekend challenge code review

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


#### Further notes on code reviews

- Good TDD evidence
  - Commit regularly, probably before refactoring once a test passes, so you can see the test passing and the refactoring steps in the commit message

- Commit message should tell us something about the code that has changed
  - Commit messages could be the test name (descriptive of behaviour)
  - Commits should read as a story

Testing state is kind of ok as a starting point to test drive the class, but should then be replaced by a test that tests behaviour (testing a method that manipulates the value)
- Tests should be calling a method, not an attribute


**Feature test** should use real instances of classes (to test on top of things that may be using doubles in unit tests)

Exemplar of both previous week challenges to be shared by Katerina

More on dependency injection - `open/close` principle -> check back on SOLID for code quality


#### Chat with Katerina

Regarding my multiple `expect` statements in a single test, some questions she asked, as it looked like a code smell...

1. Can you add flexibility to `@orders` and `@dishes`?
    - Yes, by removing their hard coded values (e.g. `@orders = []`) and moving them to be parameters in `initialise` with these as default values
    - This means instead of tying myself in knots trying to double these in the tests I can just set up a variable with the state I need before writing the assertion (examples in [this file](https://github.com/mattTea/takeaway-challenge/blob/master/spec/menu_spec.rb))

2. Can you simplify the method you are trying to test?
    - Yes, this is the `select_dish` method and it was doing a few checks before it did its thing
    - I have now extracted this out to a `check_order_status` method

3. Are you methods correctly named for what they are doing?
    - One to keep an eye on!

All tests now only have a single expect statement


## Week 3 summary goal

[Outline](https://github.com/makersacademy/course/blob/master/week_outlines.md/#week-3)

[Intro to the web](https://github.com/makersacademy/course/tree/master/intro_to_the_web)

#### Primary goal

**Can you build a web app?**


**By the end of the week all developers can...**

- Build a simple web app
- Follow an effective debugging process for web applications
- Explain the basics of how the web works (e.g. request/response, HTTP, HTML, CSS)
- Explain the MVC pattern


#### Afternoon challenge

**Intro to MVC**

In this challenge, you will use views to separate the Ruby and HTML code. This is the first of several steps you will take when developing a web application to encourage a clean separation of concerns.

In our case, `app.rb` will be for routing (or `controlling`) concerns, and we will use another file for our presentation (or `view`) concerns.

As a rule of thumb, logic should be 'pushed down the stack' wherever possible. 'Views' are for lightweight logical lifting, and controllers are for middleweight stuff. There are other layers for handling much more complex logic, as we shall soon see.

(GET, POST, etc) -> `method` as a verb that _expresses the intention of the request_

_The query string on the /named-cat page has disappeared. This is because POST requests do not store their query parameters in the request string. Instead, they store them in the body of the request as 'Form Data'_

[Chrome dev tools docs](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2)


**Capybara automated browser testing**

`visit 'http://capybaraworkout.herokuapp.com/'` to take the automated (headless?) browser to this url

`http://capybaraworkout.herokuapp.com/workout` to do workout


#### Challenge example solutions

[Takeaway exemplar](https://github.com/makersacademy/takeaway-exemplar) - includes [youTube walk through](https://youtu.be/mgiJKdH9x8c)
[Airport exemplar](https://github.com/makersacademy/airport_challenge/pull/1238), with clear definition between feature and unit tests - [youTube walk through](https://www.youtube.com/watch?v=Vg0cFVLH_EM)