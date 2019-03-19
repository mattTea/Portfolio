## WEEK 3

## DAY 1

### Weekend challenge code review

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


**Feature test** should use real instances of classes (to test on top of things that may be using doubles in unit tests)

Exemplar of both previous week challenges to be shared by Katerina

More on dependency injection - `open/close` principle -> check back on SOLID for code quality


### Chat with Katerina

Regarding my multiple `expect` statements in a single test, some questions she asked, as it looked like a code smell...

1. Can you add flexibility to `@orders` and `@dishes`?
    - Yes, by removing their hard coded values (e.g. `@orders = []`) and moving them to be parameters in `initialize` with these as default values
    - This means instead of tying myself in knots trying to double these in the tests I can just set up a variable with the state I need before writing the assertion (examples in [this file](https://github.com/mattTea/takeaway-challenge/blob/master/spec/menu_spec.rb))

2. Can you simplify the method you are trying to test?
    - Yes, this is the `select_dish` method and it was doing a few checks before it did its thing
    - I have now extracted this out to a `check_order_status` method

3. Are your methods correctly named for what they are doing?
    - One to keep an eye on!

All tests now only have a single expect statement


## Week 3 summary goal

[Outline](https://github.com/makersacademy/course/blob/master/week_outlines.md/#week-3)

[Intro to the web](https://github.com/makersacademy/course/tree/master/intro_to_the_web)


### Primary goal

**Can you build a web app?**


**By the end of the week all developers can...**

- Build a simple web app
- Follow an effective debugging process for web applications
- Explain the basics of how the web works (e.g. request/response, HTTP, HTML, CSS)
- Explain the MVC pattern


### Afternoon challenge

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


### Challenge example solutions

[Takeaway exemplar](https://github.com/makersacademy/takeaway-exemplar) - includes [youTube walk through](https://youtu.be/mgiJKdH9x8c)

[Airport exemplar](https://github.com/makersacademy/airport_challenge/pull/1238), with clear definition between feature and unit tests - [youTube walk through](https://www.youtube.com/watch?v=Vg0cFVLH_EM)


### Feedback from Tomé Jesus

_Really liked the pace we worked at too and especially liked that we were putting in the effort to figure things out before looking at the walkthroughs - that definitely did a lot to galvanise what was learned. Although, I went through the walkthroughs this morning and recommend giving them another read - I filled in a few gaps this way. Thanks for sharing the knowledge, 100% look forward to the next session!_


## DAY 2

### Process modelling workshop

[Workshop repo](https://github.com/mattTea/skills-workshops/tree/master/week-3/process_modelling)

A server is just a program

As a web dev your job is to write servers -> when I get a request how do I execute code to serve the correct response

(Only code that executes on browser is `JavaScript`)

`HyperText` is just a link (or a window into another document)
- Check out networking book mentioned by Alice


#### Home page process model

1. From `Browser` user visits `url`

2. `Browser` passes request (e.g. `GET`) to `Network`

3. `Network` passes request to `Server`

4. `Server` searches for `resource`

5. If found `Server` writes reponse that includes
    - Response headers that include
        - Version of http
        - Response code (`200` if ok)

    - Response body (`html`)
      (reponses come back bit-by-bit, in `packets`)

6. `Browser` parses the response

7. `Browser` renders the response (how it would look on the page)

8. `Browser` paints the response (putting it on the page)

9. See the `html` in the browser


**Waterfall** in dev tools shows all the various states the request has gone through
- Connection set-up
- Request/response


#### Process exercises...

**1. Cat page**

Client | Network | Server
------------------------- | ------------------------- | -------------------------
click cat pic link |  | 
 | http GET /cats.html | 
 |  | searches for resource
 |  | finds resource
 | returns HTML and 200 (OK) | 
parse |  | 
render |  | 
paint |  | 
shows html |  | 
request cat.jpg | 
 | http GET /cats.html | 
 |  | searches for resource
 |  | finds resource
 | returns HTML and 200 (OK) | 
parse |  | 
render |  | 
paint |  | 
shows image |  | 


------

**2. Mailing list**

Client | Network | Server
------------------------- | ------------------------- | -------------------------
click link |  | 
 | http GET /list.html | 
 |  | searches for resource
 |  | finds resource
 | returns HTML and 200 (OK) | 
parse |  | 
render |  | 
paint |  | 
shows html (form) |  | 
enter details and submit form |  | 
 | http POST email form | 
 |  | searches for resource
 |  | finds resource
 | returns HTML and 200 (OK) | 
parse |  | 
render |  | 
paint |  | 
shows thanks.html page |  | 


**Summary from Alice**

This morning we covered the *HTTP request/response cycle* in our workshop.
- We talked about what the *web* is and what what *servers* are (software running on computers that store resources)
- We talked about how to *use the network tab* in your navigator's dev tools to see what requests are sent on the network
- We created some *diagrams* and role played *browser <-> network <-> server* interactions
- We saw that *each resource needs one separate request*
- We learned that requests and responses have two parts (*header and body*)


**Questions**

1. When the browser gets a response with an `img` in an html response it fires the next request to get that image when it finds it during the Parse stage in the browser (we think - check!)

2. Can http make more than one request at the same time?


**Notes**

`GET` request doesn't pass anything in the body, doesn't have one (but can pass info in query params)
`POST` request passes data in body and keeps query params clean (e.g. form data)



**Pairing feedback from Alex Chen**

Methodical approach when we had problems and things didn't work as expected. You took things step by step to work through it, and focused only on the next step to be able to move forward.