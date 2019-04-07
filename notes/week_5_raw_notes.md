# WEEK 5

## DAY 1

### Weekend challenge code review

[Chitter exemplar](https://github.com/makersacademy/chitter_exemplar)

Mental model of request/response data flow in an app (MVC, etc) to drive test-driving process
- Write this process

Remember the `TDD <--> Play` cycle too (if stuck nip out and play/explore before coming back and then writing tests)

`Rake` is a task manager to automate database setup (on whatever environment)
- Also used to query and run commands/methods on dbs (e.g.)


### TODOs this week

**Questions** to coaches...

- Does my commit message history tell a sufficient story to highlight test-driven approach?
  - Share examples of commit histories
  - [Chitter commit history](https://github.com/mattTea/chitter-challenge/commits/master)
  - [RPS commit history](https://github.com/mattTea/rps-challenge/commits/master)

- Should I do more to evidence my test-driven and structured approach to solving the problem?
  - Share problem breakdown and READMEs from a couple of examples
  - [Chitter README](https://github.com/mattTea/chitter-challenge/blob/master/README.md)
  - [Chitter problem breakdown](https://github.com/mattTea/chitter-challenge/blob/master/problem/problem_breakdown.md)
  - [RPS README](https://github.com/mattTea/rps-challenge/blob/master/README.md)
  - [RPS problem breakdown](https://github.com/mattTea/rps-challenge/blob/master/problem/problem_breakdown.md)

- Does my Chitter app demonstrate my understanding of data flow between client, app, db?
  - Or would you prefer to see this modelled in the problem breakdown/readme 

- Feedback on process and how I've used them
  - Debugging - best way to evidence?
  - Problem breakdown and TDD

- MVC
- Dependency injection and doubling
- Class extraction

- What questions and straightforward things can I show you to see if I'm generally doing ok?


### Week 5 summary goal

[Outline](https://github.com/makersacademy/course/blob/master/week_outlines.md/#week-5)


### Primary goal

**Can you learn a new language and its patterns?**


**By the end of the week all developers can...**

- Test drive a simple front-end web app with Javascript
- Follow an effective process for learning a new language


[Challenges and practicals](https://github.com/makersacademy/course/blob/master/thermostat/README.md)

[Measure understanding against these](https://github.com/makersacademy/course/blob/master/thermostat/README.md#check-your-understanding)


Mini-reflection each day
- Look at Alice's suggestions around processes and behaviour


**NEW PROCESS**

_Learn language_

To learn a language - rewrite a problem you've already solved in the new language
- You've solved the problem, so you can focus on the syntax and rules of the new language

`Problem-centred` learning rather than `subject-centred` learning (solve 'Hello world' rather than 'learn JS')
- What problems can you solve in order to learn (apply to real problems)
- How adults intuitively learn -> I have a problem, solving it will enable me to learn

Learn other languages this week too(!)
- To see how my process to learning language works

Plan - what learning I'm going to do - WHAT PROBLEMS AM I GOING TO SOLVE in XX days this week
- Then review


**Portfolio session mid-next week**

- Get `plan` and `what it means to you` sections filled in


### Afternoon challenge

#### `function` in JS is like `class` in Ruby

In Ruby, we define a class and instantiate it like this:

```ruby
class Car

end

car = Car.new
```

In JavaScript, we see this:

```javascript
function Car() {

}

var car = new Car();
```
Which looks very similar. It's easy to think of Car as a class in JavaScript. But it's not; it's just a function. **There are no classes in JavaScript**, but we do use functions as a convenient way to instantiate objects that share behaviour.

PluralSight Course - Chrome Dev Tools [2:50](https://www.pluralsight.com/courses/chrome-developer-tools)


#### Jasmine test runner

Installation walkthrough [here](https://github.com/makersacademy/course/blob/master/thermostat/walkthroughs/setting_up_jasmine.md)

The downloaded files also show some nice examples (in `src` and `spec` folders)

**JS example**
```javascript
it("should throw an exception if song is already playing", function() {
  player.play(song);

  expect(function() {
    player.resume();
  }).toThrowError("song is already playing");
});
```

**Ruby example**
```ruby
it "should throw an exception if song is already playing" do
  expect { player.resume }.to raise_error("song is already playing")
end
```

------

## DAY 2

### Encapsulation with constructors and prototypes workshop

[Skills workshop details](https://github.com/makersacademy/skills-workshops/tree/master/week-5/encapsulation_with_constructor_and_prototype_pattern)

[Link to my forked repo and solutions](https://github.com/mattTea/skills-workshops/tree/master/week-5/encapsulation_with_constructor_and_prototype_pattern)

[Exemplar](https://github.com/mattTea/skills-workshops/blob/master/week-5/encapsulation_with_constructor_and_prototype_pattern/exemplar_dont_read_until_after_workshop/sheep/src/pen.js)


**Encapsulation**

- Hiding implementation details
- Grouping behaviour with the data (state) it operates on

(In Ruby we have the concept of `public` and `private` methods)

Code smell - `Feature Envy` where a class constantly calls methods on another class

_Look up prototypical inheritance_
[Link to MDN Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

- Every object we create in JS adds a "__proto__"


```javascript
constructor to create object
function Adult(age) {
  this.age = age
}

to add a function to Adult
Adult.prototype.increaseAge = function() {
  this.age += 10
}

adult = new Adult()

adult.increaseAge() without () would just return the function, not invoke it

adult.age
=> 40
```

JS doesn't do implicit returns like Ruby

Above has used prototype to encapsulate the behaviour (increaseAge)


### Count practical

Naming conventions (underscore for private methods) don't do anything in the code - just for devs

------

# DAY 3

## Debugging in JavaScript

[Skills workshop](https://github.com/mattTea/skills-workshops/blob/master/week-5/following_the_flow_and_getting_visibility_in_javascript/README.md)

- I didn't attend the workshop, but use workshop notes above if needed when debugging js.

[Jasmine 2 spy cheatsheet](https://daveceddia.com/jasmine-2-spy-cheat-sheet/)

https://devhints.io/jasmine



## Afternoon pairing with Sam Ixer

### Feedback

Really appreciated your keeping to really simple steps (the simplest possible) as we test-drove the application.
Your longer commit messages -> like that you shared and taught how and why you do this (to build up the detail and commit history story).

Liked your git project collaborator approach to pairing, which forced regular commits and a real focus on test-driving.
Your TDD process is thorough but at times slow -> it might now be time to drop the very simple tests, but it was good in that it taught me some syntax and got us into the swing very comfortably.

Really like your questions on 'what would a user want to do' to keep the focus on how the features should work, and domain model thinking when test-driving - a real strength of yours.

Also really appreciated how you approached our feedback discussion - asking what learning goals I was targeting in the pairing session, and then giving feedback on how I'd performed on exactly those, it really helped me think about what my learning goals were - thank you!

I really enjoyed the session.


# DAY 4

## Workshop 1 - AJAX request and response cycle

[AJAX request and response](https://github.com/matttea/skills-workshops/tree/master/week-5/)following_ajax_request_response_cycle


`$.get()` is an async method, because it's making a server request and needs to wait for a response, so functions passed in as arguments will be callback functions

"All server requests will be async unless you tell it otherwise"

```javascript
$.get("url", function(){}) <- this last function will always be a callback for these async methods
```

AJAX - async js and XML (http) requests

(See also workshop files for a non-jQuery version of the html page - `comparison-with-non-jquery...`)


## Workshop 2 - following the flow of control (call-backs)


[Callbacks - following the flow of control](https://github.com/matttea/skills-workshops/tree/master/week-5/callbacks_following_the_flow_of_control)


#### Learning objectives

- Describe "the flow of control of a program" as "the order in which the parts of the code are executed".
- Explain the process you use to follow the flow of control.
- Follow the flow of control to help you understand how callbacks work.

Link that shows you the [raw JS under jQuery](http://youmightnotneedjquery.com/)

**Q3.** from the practicals, below (slightly wrong code)...

```javascript
console.log(1)
var getReturnValue = $.get("https://async-workshops-api.herokuapp.com/people", console.log(2), function(peopleResponse) {
  return console.log(peopleResponse);
});

console.log(getReturnValue);
```

- The variable `getReturnValue` is the return value of the request object itself, **not what data is returned**

- Storing data returned in a variable can only happen in the callback function (`peopleResponse`), it can't be the request itself (`getReturnValue`)

- Using `getReturnValue` would be wrong in the above (the code is a bit wrong above)

- Callback function will wait for the request to finish


**Explore** what arguments you can use with `$.get`



### Afternoon pairing with Amy

_Take a second to think about the flow of what happens when a user interaction happens:_

**user input -> event listener -> update model -> update view to reflect change in model**


#### Feedback from Amy

Related to `I can Program Fluently` goal
- Showed good confidence navigating around the code and the project
- Making considered choices about design, naming and structure

- Good at attempting new, then quickly researching syntax and style if needed


# DAY 5

## Morning - continued with airport.js

When testing spy methods have been called in Jasmine - do not add the `()` after the method

See assertion in below in example...

```javascript
airport = jasmine.createSpyObj('airport', ['landPlane', 'launchPlane']);

it("calls airport.launchPlane()", function() {
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.launchPlane).toHaveBeenCalledWith(plane);
    });
```
