## WEEK 2
## DAY 1

#### Code Review Workshop

[Peer code review](https://github.com/makersacademy/course/blob/master/goals/recipes/code_review_1.md)

Code reviews -> help learning through reading others' code
- Practice at identifying ways code can be improved
- Different goal when building real-world code (more about quality of code, than improving your skiills)

[Code review checklist](https://github.com/makersacademy/course/blob/master/pills/code_review_checklist.md)

- Probably start with tests
- Then README
- Look at code last

Limit code reviews to 15 mins for `airport_challenge` sized project/repo

[How to: code review](https://github.com/makersacademy/course/blob/master/how-to/code-review.md)

[Code review: more complex](https://github.com/makersacademy/course/blob/master/pills/code_reviews.md)


**TASK:** Pair up and review each others' code (15-30 mins reviewing other pair's code on your own)


1. Find pull requests in github
2. Look at pull request and commits
3. Files changed diffs good place to leave comments against specific lines of code


Code review feedback for **Riya**

- Comments added to [pull request file diffs](https://github.com/makersacademy/airport_challenge/pull/1346) and overall review comment


Push questions regarding what is **good code** to external sources while learing and making up your own mind


Group code review - start by using [rubric](https://github.com/mattTea/airport_challenge/blob/master/docs/review.md)


**Questions & discussion**

- Try to return something from your methods (object, etc) that can be logically used and tested
  - Try to refrain from using `puts` (e.g.) unless building an UI component (otherwise should be pure logic)

- Modelling problems (workshop on Wednesday)

- A method and a class should have a single responsibility
  - Only use `and` when describing it's responsibility if it is delegating this second responsibility elsewhere
  - But also shouldn't delegate everything - avoid this `god` class!
    - When to `delegate`, when to `encapsulate` -> looked at later this week

- Test behaviour at limits (i.e. test `can I land 20 planes?` and `can I land more than 20 planes?`)

- Testing modules -> test as an extended method in airport Class, but stats didn't show it
  - Sophie doesn't suggest use of modules at this stage (but mentioned in challenge suggested?)


#### Isolate tests using doubles

- Fully double any object that isn't the one under test, so we can be sure that the test is testing the beehaviour of one and only one object


#### Dependency injection

```ruby
class Airport
  def initialize(capacity, weather)
    @capacity = capacity || 20          <- if no arg will default to 20
    @weather = weather || Weather.new   <- injects Weather if no arg provided
  end
end

Airport.new(nil, weather_double)
```

Other option could be to use `named arguments` which will not worry about order, but will require the named argument

```ruby
class Airport
  def initialize(:capacity, :weather)
    @capacity = capacity || 20          <- if no arg will default to 20
    @weather = weather || Weather.new
  end
end

Airport.new(weather: double, capacity: 20)
```

Only double to remove dependencies in tests



## Week 2 summary goal

[Outline](https://github.com/makersacademy/course/blob/master/week_outlines.md/#week-2)

#### Write code that is easy to change

Do this using OOP

Test drive code
- Red, green, refactor

Debugging

OOP
- Build with objects
- Break to smaller objects
- Practice encapsulation and delegation


#### Afternoon challenge **Oystercard**

- Focus on feedback and peer code review in pairing sessions

_Stretch for the week... Gilded Rose Design project -> speak to Sophie first if tempted_


#### Pairing

- Paired with Riya
- Used ping pong method when writing tests and then the implementation and refactoring
- Used a timer when doing other activities, like set up and longer refactoring
- Feedback from Riya
  - _Found the breaking down of each user story and problem into an object model table and example feature test (in irb) of how the program would work really useful in planning how we would step through the problem._
  - _Kept great timing to make sure we switched and kept an even split between driver and navigator._


## DAY 2

From Sophie...

This morning's suggested resource covers dependency injection. Get comfortable applying this technique in order to make sure your classes, and therefore your tests, are isolated.

Here is the practical exercise: https://github.com/makersacademy/skills-workshops/blob/master/practicals/object_oriented_design/dependency_injection.md


#### Pairing with Matt Stockman

Working through steps 6-12 of oystercard

Using doubles has been the most difficult concept today, both morning and afternoon
- Starting to understand the use of a double in a test

```ruby
let(:in_station){ double :in_station }
```

same as...

```ruby
in_station = double :in_station
```
  - The above lets us use an `in_station` variable throughout the test suite, without having to set the necessary behaviours

  - We can set methods we want it to respond to as well, as per an example from the morning session...
```
expect(car_double).to receive(:drive_away)
```

#### To work further on

- How to effectively use `Context` blocks in rspec
- READMEs
- More on doubles
- Write up code review process


## DAY 3

Rspec `describe` vs `context`

Jake Goulding [slides](http://jakegoulding.com/presentations/rspec-structure/)

- Use describe for things
- Use context for states

- But...
  - Context isn't available at the top-level
  - RSpec encourages you to organize your tests by things (first)

- Context naming
  - Context names should not match your method names!
  - Should explain why a user would call the method, e.g.
```
context "assigning homework to a student"
```
- Before vs Let
  - `before` eagerly runs code before each test
  - `let` lazily runs code when it is first used

  - Use `before` for actions
  - Use `let` for dependencies (real dependency or test double)

`before` aligns with the `context`...
- `context` is used for state
- `before` lists the actions to get to that state


**A typical test**
```
describe Classroom do
  context "#a_mess?" do
    it "should return true after a party" do
      classroom = Classroom.new
      classroom.throw_pizza_party
      classroom.a_mess?.should be_true
    end
  end
end
```

**A better typical test**
```
describe Classroom do
  subject(:classroom) { Classroom.new }
  context "when the children are rowdy" do
    before { classroom.throw_pizza_party }
    it { should be_a_mess }
  end
end
```


#### Workshop - domain modelling

[Domain model diagramming](https://github.com/makersacademy/skills-workshops/tree/master/week-2/domain_model_diagramming)

[draw.io](https://www.draw.io/) offers some free drawing options
- Try to always start with a whiteboard!

Probably start diagramming with the user interaction


**Sequence diagram**

Does not include the user interaction, only the application domain

_Arrow direction_

- `HeadCount` is calling `flip` on `Coin` (e.g.)
- Each right-directional arrow in a sequence diagram highlights a `delegation` to a different object or system
- Dotted left-directional line refers to the return value

Order of drawing, start with diagramming the first delegation, i.e.
- `HeadCount` to `Coin` sequence and return first
- Then `Coin` to `Randomizer` sequence


**Class diagram**

Thinks about only the messages/methods that can be _received_ by an object


**Exercise**

Model notebook user stories, not coin-flipping example as suggested

Diagramming as a path to code

Outcome expected is the code (aligned to the diagram)

[Sam and my model](https://github.com/mattTea/Portfolio/blob/master/images/notebook_domain_model.jpg)...

And the code...

```ruby
class Note
  def initialize(title, body)
    @title = title
    @body = body
  end

  def add_tag(tag)
    @tag = tag
  end

  def tagged_with?(tag)
    tag == @tag
  end
end

class Notebook
  attr_reader :notebook

  def initialize
    @notebook = []
  end
  
  def add_note(title, body)
    note = Note.new(title, body)
    @notebook << { :title => note }
  end

  def search_notes(tag)
    @notebook.each do |note|
      return note if note.tagged_with?(tag)
    end
  end
end
```

**Exemplar...**

- create a list of things to do (from user stories)
- highlight where there might be choice or gaps in requirements
  - `add a note to notebook` could be from within a notebook, or adding a note into a notebook
  - `add a tag to a note` could suggest some form of retrieval method -> `see all notes`?

- storage of items not included in sequence diagram

- some things more natuarally fit on other diagrams
  - i.e. `Notebook` doesn't need to call a message on `Note` to view all so wouldn't be on sequence diagram
  - However, this could be displayed on a class diagram as a method on the `Notebook` class

- Notebook may have a user interaction method of `view_notes_with_tag(tag)` but the `Notebook` in sequence diagram would call a `has_tag?(tag)` method on `Note`
  - Class diagram would contain the user interaction methods


_Sequence diagrams -> understanding interactions when we are delegating responsibility_

**Class diagram** -> captures interface of each class - what messages it can receive
**Sequence diagrams** -> gives info about what messages return and what objects will call them


Feel like I have gone backwards slightly, not sure how this would be used to improve on techniques I already have to break down problems (yet!)


#### Feedback workshop

_Workshop focuses on being a better feedback receiver (as we can't make everyone perfect at delivering it_

**2 stars and a wish** method in teaching

1. Shift your attitude to feedback
  - You can even extract something to help you improve from poorly delivered feedback
  - And see feedback at being kind

2. Empowered receiver
  - This is free therapy!
  - Pull feedback -> be growth minded and willing to look at yourself

3. Know thyself
  - Non-judgemental self-assessment 
  - Know your triggers (truth, relationship, identify - how we see ourselves)
  - Weigh feedback before rejecting too quickly (we have blind spots)

  - How do we make ourselves more resilient?
    - What's your **baseline happiness**? (Can increase this! -> mindfulness)
    - How deepy do you **swing** - _high-highs and low-lows_ vs _more even_
    - **Recovery** -> how long to return to your baseline happiness? Just be aware

4. Understand feedback
  - Appreciation -> to connect
  - Evaluation -> to rate or rank
  - Coaching -> to improve

5. Use a framework (to give feedback)
  - Give infomation that the receiver can make a decision on
  - **ASK** -> actionable, specific, kind

  - Non-violent communication (nvc)
    - Observation (facts - when I see...)
    - Feeling (I feel...)
    - Need (my... needs aren't being met)
    - Request (would you be willing to...)


Receiving feedback
- You can decline or postpone if not in right headspace
- Know your feedback profile (swing, etc)
- Take your time to evaluate and respond


Takes `courage` to give feedback - one of the XP values

**Help centre** - to be shared by Dana (new site)


#### Pairing with Sam

"Focus on testing behaviour not state" (don't test attr_readers but methods that use the variables)

**Feedback from Sam**

- "Really liked that you initiated a conversation at the start of the session about what I had liked/disliked or wanted to change from previous pairing sessions"
- "Conversation prompted us to set goals about what we wanted to achieve from the pairing session, and these ensured we focused on `doubles` and `refactoring tests to use contexts` (and we were both able to actively talk about changing those goals as we worked through the challenge -> dropped the focus on doubles to work more on domain modelling to break down the `journeys` problem)"
- "I can be be pushy, so it was good that you pushed back when we disagreed enabling us to try both ideas (example on sequence diagram, capturing the response from New Journey and asking me to talk through why my idea would disprove yours)"
- "Kept up regularly keyboard swapping so we shared duties regularly"
- "You gave feedback throughout the session, in lots of things you said, even if you didn't realise"
- "Talk through what you're doing as you do it, so I'm not tempted to correct something that you were already planning to do!"
- "Believe in your own ability and conviction more"
- "Take more breaks, as we burnt out a bit by the end"
- "Great session and really want to carry on working with you!"


**Ideas to do more of**
- Incorporate domain models into airport or an earlier challenge
- Incorporate `context` blocks and `doubles` into airport or an earlier challenge


## DAY 4

[Delegation Workshop](https://github.com/mattTea/skills-workshops/tree/master/week-2/oop_3)

Object-oriented delegation and encapsulation

_Delegation_: pass responsibility to another class, to get some information back
- One class telling another class to do something and the other class encapsulating how to do it.

_Encapsulation_: stuff about an object that isn't available outside that class

Delegation happens in [code](https://github.com/mattTea/skills-workshops/blob/master/week-2/oop_3/company_structure.rb) where an injected class calls its methods
- i.e. in `Coo` class in example, `hr_manager` is injected, and delegation happens when `@hr_manager.reduce_payroll` is called

`Sequence diagram` just outlines the delegation between classes

Inject class rather than call `.new` is to allow testing classes in isolation, but also to allow ease of change of classes
- Look at **polymorphism**
- Look at Gilded Rose example for refactoring to learn polymorphism

Pattern to supprt code being extensible and easy to change...
- Line 64 -> creates a new instance (lydia) and then injects this instance into a new COO (brad)

Image of [class diagram](https://github.com/mattTea/Portfolio/blob/master/images/company_class_diagram.jpg)
Image of [sequqnce diagram (photo)](https://github.com/mattTea/Portfolio/blob/master/images/company_sequence_diagram.jpg)
Image of [sequence diagram (drawn)](https://github.com/mattTea/Portfolio/blob/master/images/oop_3_sequence_diagram.jpeg)

Probably create a default value for instances of dependencies injected


**Exercise**

- Aim to extract one class to start with
- But try to extract more!

- Don't change `feature_spec.rb`
- Get todo_list and spec complete (2 classes)
- Aim for 3 or 4


**Sophie's notes**

Notes:
- Delegation - one class instructing another class to do something
- Encapsulation - a class includes the state and behaviour to do something
- Aim to extract the `terrible` example into classes, for `great`
- Keep your feature tests passing as much as possible
- Dependency Injection enables delegation, while keeping classes isolated


**Solution**

[Solution code](https://github.com/mattTea/skills-workshops/tree/master/week-2/oop_3/solution-do-not-look-until-the-end)

- I almost got to 3 classes
- Solution had 4!

- Injecting the class (rather than an instance) means we can create as many instances as we want, like this...
```
def add(description, todo_class = Todo)
  @todos << todo_class.new(description)
end
```
- Also if you dont have state in a class, you don't need ann instance (class just has behaviour methods)


See diagram on board for how to sequence over a class without interacting (TodoList -> TodoListPrinter, without going via Todo) [diagram](https://github.com/mattTea/Portfolio/blob/master/images/todo_solution.jpg) (can delegate through the levels)

**Ordering of expectation** in tests when using double in code (`todo_class = Todo`)

Look at [todo_list solution spec](https://github.com/mattTea/skills-workshops/blob/master/week-2/oop_3/solution-do-not-look-until-the-end/spec/todo_list_spec.rb), esp ording of test when testing behaviour of mocks (`expect` assertion is made before the delegation call)
- Set expectation, as double needs to know that something is going to happen, and will need to fail if it doesn't happen
- This is why the ordering looks weird on lines 24 and 25 of todo_list solution spec

- _Always target testing behaviour over state_

- To learn about this above testing behaviour Sophie will check if any materials available
  - (Note that there are other ways to achieve the above wihtout this weird order)


_Always think about what the most useful thing a method can return, esp is tempted to return a string_


**Pairing with James Palmer**

Note on doubles syntax in rspec

- `let(:in_station) { double :in_station_stub }` <- could call the double :in_station anything here - its is just saying I assume the input is correct when you use the `in_station` var name in the test


## DAY 5

Check in on Riya and Sam's repo for how they double `Journey` (and `Journey Class`) in their Oystercard tests
- Repo called samanthaixer/oystercard_thurs

TODO
- Refactor some of the Oystercard tests and update the Journey tests, including doubles
- Write up my class extraction process

- Write what I've learnt about `high cohesion` and `loose coupling`, `delegation` and `encapsulation`, [testing behaviour not state](https://github.com/mattTea/skills-workshops/blob/master/practicals/testing/behaviour_not_state.md)


**Stubs, Mocks and Spies in RSpec**
https://about.futurelearn.com/blog/stubs-mocks-spies-rspec


**Ruby and Rspec doubles tutorials**
https://semaphoreci.com/community/tutorials/mocking-with-rspec-doubles-and-expectations

http://testing-for-beginners.rubymonstas.org/test_doubles.html

https://thoughtbot.com/upcase/videos/telling-a-story-with-your-tests


**Useful technology cheatsheets**
https://devhints.io/rspec


