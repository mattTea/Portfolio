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

Step | Client | Network | Server
---- | ------------------------- | ------------------------- | -------------------------
1 | click cat pic link |  | 
2 |  | http GET /cats.html | 
3 |  |  | searches for resource
4 |  |  | finds resource
5 |  | returns HTML and 200 (OK) | 
6 | parse |  | 
7 | render |  | 
8 | paint |  | 
9 | shows html |  | 
10 | request cat.jpg | 
11 |  | http GET /cats.html | 
12 |  |  | searches for resource
13 |  |  | finds resource
14 |  | returns HTML and 200 (OK) | 
15 | parse |  | 
16 | render |  | 
17 | paint |  | 
18 | shows image |  | 


------

**2. Mailing list**

Step | Client | Network | Server
---- | ------------------------- | ------------------------- | -------------------------
1 | click link |  | 
2 |  | http GET /list.html | 
3 |  |  | searches for resource
4 |  |  | finds resource
5 |  | returns HTML and 200 (OK) | 
6 | parse |  | 
7 | render |  | 
8 | paint |  | 
9 | shows html (form) |  | 
10 | enter details and submit form |  | 
11 |  | http POST email form | 
12 |  |  | searches for resource
13 |  |  | finds resource
14 |  | returns HTML and 200 (OK) | 
15 | parse |  | 
16 | render |  | 
17 | paint |  | 
18 | shows thanks.html page |  | 


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


#### Afternoon Battle challenge

**Pairing feedback from Alex Chen**

Methodical approach when we had problems and things didn't work as expected. You took things step by step to work through it, and focused only on the next step to be able to move forward.


## DAY 3

Completed `Servers` practical with Amy -> add this to Portfolio

[Servers challenge repo](https://github.com/makersacademy/skills-workshops/blob/master/practicals/servers_and_clients/servers.md)


### Debugging web apps

[Github repo for challenge](https://github.com/makersacademy/skills-workshops/tree/master/week-3/debugging_2)

**The mantra...**

1. Tighten the loop
2. Get visibility


Use the mantra the debug across the web stack

In a `Server`...
- `View` files (.erb) -> html, ruby
- `Controller` files (app.rb) -> for routing
- `Model` files (in /lib) -> Class files
- `Gems`
- `Config` files
- `Assets` (static, public) -> img, css files, etc

At the moment we are not writing any code in the `Client`

(_app looks at the route and fetches some resources_)

**Aside...**

_Class naming conventions_

  - should be singular
  - should be a noun
  - should come from the domain


To **tighten the loop**, understand the journey of the code executing on server...

1. Request comes from client
2. `Controller` (for routing) catches the request
3. (If there are any `models` these may be called here, sent back to `controller`, which would then call `view`)
4. Returns relevant `view` (or return value from route method)
5. `View` processes (transforms to html) 
6. `View` returns something to controller
7. `Controller` sends html back to client 


 _makers.tech/apply_

{ -domain- } { -route- }


How **get visibility**?

- Can only `p` in places where you have ruby code
  - In `.erb` only in the `<% ruby %>` parts

- Where would this output?
  - Run ruby file
  - Open link which has `ip address:port/route`
  - In the server logs in terminal `p` lines will be output

- Look at status codes (for error codes)
- Sinatra shows more detail about error in the browser too

- When running tests, can't see browser though (with Capybara)
  - But will highlight file and line
  - add `save_and_open_page` in file above line (this is capybara specific)
  - (_Save a gem when suggested to to make this work_) 
  - This saves where the program got to and opens page
  - Use this only one at a time


1. Server logs to see what requests were made
2. Use `p` in ruby files
3. Use `save_and_open_page` to check state of html that was sent back


**Debrief after challenge...**

1. Take clues from user stories...
- "Home page" on story 2 -> there was no homepage route in controller file

2. When 'looking at error' alwasys start by googling it

3. Use `save_and_open page` -> to direct to error

4. Follow path of execution (or _flow of control_) to find error


**Alice's debugging process** for this practical...

1. See error in context -> first error in stack trace shows the feature test file and line (first part that is our code)
2. Used `save_and_open_page` immediately above failing line
3. Shows that `visit("/")` isn't showing anything at this route
4. Controller does routing, so check this out to see if there is a route for `"/"`
5. User story guides choice where there is one (isn't at this step!)
6. Find `view` file that has the field we are looking for
7. Changed `/emoji` in controller to `/` as second user story refers to 'home page'
8. Use `save_and_open_page` again to see what is now showing at this same point
9. Error page in client now showing a different error (NameError)
10. Follow this error through our `tighten the loop` process above
11. See the file it refers to `index.erb` and line
12. Comment out line and run again with `save_and_open_page`
13. Tightened loop to a single line by doing this
14. `p self` to show all variables that are available - understand what can be accessed to get the correct thing passed through
15. `emoji` should be the variable in `index.erb`

16. Next one highlights the route is wrong (`get` rather than a `post`) in controller for suggested route

17. Then look at views files to locate missing form completed text
18. Use `p flipped_struggle` in controller and view files to see output to see if text is output
19. `p`s in the class here too, as controller calls `.new`
19. Find out what is passed when calling new method in controller
20. And has highlight that `struggle` was called `the_struggle` incorrectly


#### Pairing challenge afternoon with Andy M

`POST` requests should not render any html, they should redirect to a GET route to display
- This results in a 303 in the server logs, [see...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)

Further reading on `cookies` and `sessions` - where stored?


## DAY 4

[Birthday web app challenge](https://github.com/makersacademy/course/blob/master/intro_to_the_web/post_challenges/birthday_app.md)

- Learnt about `DateTime` objects
- First example of test driving with user stories in commits - use as evidence of iterative test-driven development from the [commit history](https://github.com/mattTea/birthday_app/commits/master)


#### Continuing on Battle app (alone, no pair today)

**Important note**

_This challenge introduces the use of a Global Variable ($variable). In Ruby, the sight of a global variable is a major code smell :poo:. We are using a global variable here in lieu of a better approach that we'll introduce in the final challenge. If you ever use a global variable in a hiring tech test, you will instantly fail. Don't do it._


**Principles...**

[Sandi Metz's rules for developers](https://thoughtbot.com/blog/sandi-metz-rules-for-developers)

1. Classes can be no longer than one hundred lines of code.
2. Methods can be no longer than five lines of code.
3. Pass no more than four parameters into a method. Hash options are parameters.
4. Controllers can instantiate only one object. Therefore, views can only know about one instance variable and views should only send messages to that object 


## DAY 5

#### Pairing with Cosmin 

Behaviours built on [Tell Don't Ask](https://thoughtbot.com/blog/tell-dont-ask) principle
- Refactor a call to attack method `game.attack(player2)` to `game.attack` ane keeping things inside the method (not making them public)
- [Commit](https://github.com/mattTea/battle/commit/90292ca68a8815949397273197086c051ff246f9) that highlights this change


**New concept**

Singleton pattern ([in this commit](https://github.com/mattTea/battle/commit/6d4c0837a2b3ef7eb284f53acc26b8753cf05bfe))...

```ruby
class Attack

  def initialize(player)
    @player = player
  end

  def self.run(player)
    Attack.new(player).run
  end

  def run
    @player.receive_damage
  end

end
```

`Attack.run` creates an instance of itself that internally calls its `run` method
- Follow up on why this is needed