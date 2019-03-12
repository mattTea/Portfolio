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
  - Only use `and` when describing it's responsibilty if it is delegating this second responsibility elsewhere
  - But also shouldn't delegate everything - avoid this `god` class!
    - When to `delegate`, when to `encapsulate` -> looked at later this week

- Test behaviour at limits (i.e. test `can I land 20 planes?` and `can I land more than 20 planes?`)

- Testing modules -> test as an extended method in airport Class, but stats didn't show it
  - Sophie doesn't suggest use of modules at this stage (but mentioned in challenge suggested?)


**Isolate tests using doubles**

- Fully double any object that isn't the one under test, so we can be sure that the test is testing the beehaviour of one and only one object


**Dependency injection**

```
class Airport
  def initialize(capacity, weather)
    @capacity = capacity || 20          <- if no arg will default to 20
    @weather = weather || Weather.new   <- injects Weather if no arg provided
  end
end

Airport.new(nil, weather_double)
```

Other option could be to use `named arguments` which will not worry about order, but will require the named argument

```
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
```
let(:in_station){ double :in_station }
```
same as...
```
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