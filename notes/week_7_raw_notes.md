# WEEK 7

## DAY 1

### Weekend challenge (bowling) code review

[Exemplar without interface](https://github.com/makersacademy/bowling-challenge/blob/master/docs/review.md#example-solutions)
[Exemplar with interface](https://github.com/mdsomerfield/bowling-challenge)

Any hard coded values or function calls in body of functions are hard to test, so get into habit of passing them in as arguments (default arguments), so they can be injected and controlled in tests


Feature tests help guide us to know when we're done on a feature (unit tests on their own tend to lead to more and more smaller unit tests, and not really knowing when done)

Suggestion is only to push on a `green` feature test

_Uncle Bob - walkthrough of TDD approach to bowling challenge_

http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata


### Kick-off

MVC Questions this week

- How does MVC differ between Ruby/Sinatra apps and JS apps (doing stuff on client)
- How does the MVC pattern work with Single Page Apps?

What things need to happen for things to be considered a `Model` or a `View` or a `Controller`?


#### Single Page Apps

- No longer a `client` and a `server`
- But still an MVC pattern inside the client

- Instead of `requests`, there will be `events`
  - Browser has a list of these things
  - Our `controller` essentially becomes a thing that listens for all these events

![image](https://github.com/mattTea/Portfolio/blob/master/images/IMG_6095.JPG)


In Sinatra apps we used a `config.ru` file to run -> there is an equivalent app runner to run JS SPAs



### Week 7 summary goal

[Outline](https://github.com/makersacademy/course/blob/master/week_outlines.md/#week-7)

### Primary goal

**By the end of the week all developers can**

- Build a front-end app in Javascript
- Work competently in Javascript
- Reason about asynchronous behaviour in Javascript

- This week is analogous to week 2 in that developers will be wrestling with some underlying language concepts that are not well understood (by Makers).

- Most of the work and interventions we have run historically are meant to 'de-magic' Javascript and force developers to confront the pieces they are glossing over in an attempt to get work done.


#### Secondary goal

To help you towards your primary goal, your secondary goal will be to produce a diagram of how all the parts of your notes app interact.

- Draw the diagram on Tuesday.
- Each morning, update the diagram with your latest understanding.
- Your diagram might include: model, view, controller, external API, browser page, unit tests, feature tests, static server, node, XMLHttpRequest, the DOM.

[Challenge outlines](https://github.com/makersacademy/course/tree/master/further_javascript)

[Challenge track](https://github.com/makersacademy/course/blob/master/further_javascript/00_challenge_track.md)



## Afternon challenge notes

### IIFEs - Immediately Invoked Function Expression (IIFE)

### And the js module pattern

https://github.com/makersacademy/course/blob/master/pills/javascript_module_pattern.md

```javascript
(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5

  function exclaim(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  };

  exports.exclaim = exclaim;
})(this);

// prints "hi!!!!!"
console.log(exclaim("hi"));

// throws a ReferenceError
console.log(EXCLAMATION_MARK_COUNT);
```

So we can access exclaim, but EXCLAMATION_MARK_COUNT is hidden. Cool. We've made available the function we want people to use, but hidden some implementation details that we don't want to bother them with.


## DAY 2

### JavaScript module pattern workshop

Downside of `constructor/prototype` pattern in JS is visible and accessible throughout

#### Learning objectives...

- Describe the module pattern as a way to encapsulate and share code.
- Explain how the module pattern makes some code available and hides other code.
- Write code using the module pattern.


Encapsulate a function in an object by using the prototype pattern


**STEP 1**

```javascript
(function() {
  function Human() {}

  var name = "Matt"

  Human.prototype.sayName() {
    return "My name is " + name
  }
})()
```

`()` at end of module is to immediately invoke the function (IIFE)


**STEP 2**

```javascript
(function(exports) {
  function Human() {}

  var name = "Matt"

  Human.prototype.sayName() {
    return "My name is " + name
  }

  exports.Human = Human;
})(this)
```

`this` passed in as it is the `window` object (representing global scope)

`exports` is named as such as a convention - can use any name in argument as usual

`exports.Human = Human` means that the Human function is now available on the global scope (made it public by exporting what we want out of the module)
- Still can't get `name` var outside of the scope, but the `sayName()` function is as we've exported it

```javascript
human = new Human()
human.sayName()
// => "My name is Matt"

human.name
// => undefined (as this is not available outside the module scope)
```


If we define behaviour using `prototype` it is bound to `Human` (which is already being exported), so is not private

So we just define it without using `prototype` pattern


**STEP 3**

```javascript
(function(exports) {
  function Human() {}

  var name = "Matt"

  Human.prototype.sayName() {
    return "My name is " + uppercase(name)
  }

  function uppercase(text) {
    return text.toUpperCase()
  }

  exports.Human = Human;
})(this)
```

`human.uppercase` is no available directly, as it's now private


#### Workshop Pairing

Q: we removed all function arguments passed to interrobang and it still worked (as they were already on exported to the global scope) -> why were they there in the first place?

1. How does the function that wraps the question module keep `QUESTION_MARK_COUNT` private? Why is this useful?
    - It's not created inside the part that is exported


------

FROM KATERINA on last workshop `this` question...

To clear up the last question from today’s workshop, the main focus of that question is to make you aware that the value of this can change depending on the context it’s run from. Try running the following example in your console:

```javascript
(function(exports) {
  var a = 1
    console.log(this)
    console.log(exports)

  function test1() {
    console.log(this)
    return a
  }

  function test2() {
    return _add5()
  }

  function _add5() {
    return a + 5
  }

  exports.notes = {
    test1: test1,
    test2: test2
  }
})(this)
```

1. Look at what is printed in the console from the first two console logs.
2. Call *notes.test1()* and see if what is printed in the console is surprising.
3. Look at the docs to find out more about *this* - but don’t get too hung up on it just be aware that the value of *this* can change - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

------


THIS IS HELPFUL...

https://coryrylan.com/blog/javascript-module-pattern-basics



## DAY 3

### Practical - Ed writing a notes app

The practical this morning will show you an alternative approach to building a notes single page web app.

1. Watch the following video: https://www.youtube.com/watch?v=7wLEwj6mOrE

2. If this isn’t already part of your process then do note that before you start to code you should have already done some sort of planning. This can be as basic as a small diagram which allows you to see the flow of the program.

3. Once you’ve watched the video, get together in pairs or small groups to discuss anything interesting or surprising about Ed’s process and approach



### Process workshop with Arthur (middle letter)

![Screen recording]()

#### Feedback from Arthur

- back yourself before trying an alternative route 
- broke down problem more in problem file
- could have done more with assumptions -> write any assumptions down -> planned a bit more explicitly what it was going to look like (Class, methods, etc)
- pure tdd missed a but, but caught yourself and commented out to let tests drive
- read all of stack trace for errors and typos
- better once warmed up into it -> be confident in what you know
- started puts-ing out result before testing - unnecessary - use the test to tell you this!


#### Feedback for Arthur

- reading problem and AC expectations
- setting out immediately assumptions and how the program to be built will be structured, including inputs and returns - might have been easier to think about how a user might interact - like in a feature test
- "_might make a class_" - describe why?
- started writing pseudo code - another way of modelling that may have helped, as you appeared a bit stuck talking through data types and method

- renaming of classes at the start to "follow conventions of ACs" - initially felt you were playing for time, but liked your reasoning (keeping with the domain language)

- good use of rubber ducking with yourself... said you didn't know how to test drive returning a hash, and although I may have asked a couple of questions, you talked yourself round to writing a simple, single letter value test first
- quick to debug at 15 mins in -> setting up Class to take an argument was wrong, which you followed the trace to find that you needed an initialize method

- was ok to take a minute to think about how to set up score (looked uncomfortable, but it was < 1min)
- also looked uncomfortable passing a test with a hard-coded value, but it was good - it led you to the next test and next bit of functionality

- when you wrote the 5/1 if/else statement didn't follow failed test errors

- didn't commit