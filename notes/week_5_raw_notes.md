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
// constructor to create object
function Adult(age) {
  this.age = age
}

// to add a function to Adult
Adult.prototype.increaseAge = function() {
  this.age += 10
}

adult = new Adult()

adult.increaseAge() // without () would just return the function, not invoke it

adult.age
// => 40
```

JS doesn't do implicit returns like Ruby

Above has used prototype to encapsulate the behaviour (increaseAge)


### Count practical

Naming conventions (underscore for private methods) don't do anything in the code - just for devs

