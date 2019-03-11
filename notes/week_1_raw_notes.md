https://github.com/makersacademy/course/blob/master/weekoutlines.md/

Schedule: https://airtable.com/shrRMPTxzEWim8r7r


## WEEK 1
## DAY 1

Each day fork or clone repo of person who is not as far in challenges. And collaborate on same repo 
- Fork - clone to your github repo
- Clone - clone to your local machine repo
  - Call project - “Monday pair”, “Tuesday pair” for example

Always build towards week goals
- Have a checklist against the goals - Will or Sarah?

Speak to mentor about what to work on in the morning and how to structure goals

_Mornings_
- Practicals
- Follow up on stuff from prev day pair questions/resources
- Skills workshops
- Personal projects

_Afternoons_
- Challenges

Diode
- Clone project in diode - will add it to you own


**Week 1 Goals...**
Test-drive a simple program using objects and methods
- Tuesday: [Test driving 1 project](https://diode.makersacademy.com/students/mattTea/projects/4451)
  - _I have a methodical approach to solving problems_ (decide what software to write)
  - _I can model anything_
  - _I can TDD anything_

- Pair using the driver-navigator style
- Follow an effective debugging process
- Describe some basic OO principles like encapsulation, SRP


## DAY 2
**(Tuesday) log…**

Pairing - both timer and ping-pong on tests
TDD using rspec - assertion methods
OOP - usings objects in other objects, require syntax and use
Domain model -> converting user stories to domain objects and methods

============
Note from Alice…

This morning, before you start, take some time to reflect on what you have learnt until now.
There may be some new concrete things you have done like write a test or set up rspec
There may be some new concepts, like user stories, TDD, classes and methods
There may be some processes you have followed, like the debugging process, unblocking yourself through research or test-driving
And finally some new behaviours or mindset that you have picked up on like keeping my goal in mind when learning or rephrasing some of my thoughts from "I can't do this" to "I cannot do this yet, but here's how I'll try"

At Makers, we believe that the last two, processes and behaviours are the ones most worth acquiring during your time with us.

This is because the first two will always be googlable, while the other two are best learnt through a community of practice, feedback, reflection and modelling behaviours of experts. Obviously, they have to be applied to concrete tasks, and the practice of code is indispensable. But practice alone may not create them.

In order to identify and reinforce processes and behaviours, we encourage reflection.

Each morning, or each night, reflect on what you have learnt, and focus especially on the two latter categories.

How would you describe your newly acquired processes? What are the steps that you have taken to achieve something.

How would you describe your mindset? Have things changed in your behaviour as you were pairing or writing code?
============

Writing down my debugging process
- Every day write down one process


## DAY 3
Attr_reader use and syntax
- Interesting that it has symbol like syntax (:bikes), but when the variable is read within the class methods it still needs instance variable syntax (@bikes)

Class CONSTANTS - has to be called on parent class (not instance)

Some pairing feedback from Paul Martin today…
- Good prompting to switch driver navigator regularly to ensure we were both engaged.
- Methodical debugging to read irb errors (when running manual feature tests) to investigate feature file code to see what was actually happening


## DAY 4
_Reflection_

**Process**
What is my debugging process?

1. Read the error message: error type and line in code affected
2. Is the error expected behaviour - did an exception get raised or test fail as expected?
3. Does the irb error match, or give any additional hints?

4. If a test failed look at the spec, is it testing for the correct program/user behaviour?
5. Follow the flow of the program, look for some obvious reasons…
  - Typos
  - Are we overwriting a variable anywhere?
  - Are we doing things in the right order?
  - Are we returning too early/too late in a method?

6. Add puts or print statements at positions in the code to see if values are as we expect at different points, in order to narrow down the cause of the bug 


**Breaking down the problem process** user stories -> object model design process [example](https://docs.google.com/spreadsheets/d/1jz45S_eXPiM1V3e1wjeAmRVYUqutp-wNlhVGWmlTh04/edit#gid=0)

1. How would the user expect to use the program (not sure if this should be the first step)
2. Take user story -> extract nouns and verbs
3. Nouns are the objects, verbs are the messages (methods) to send to the objects
4. Map methods to objects to see which messages can be sent to which objects
5. Draw out how they need to interact
6. Each object can be a separate file


**Behaviour**
Has my mindset changed at all?

_Unblocking things_

- Morning session yesterday I was blocked on writing a test
- I knew I had to break it down to something simpler
- I took a break (after too long!) and came back fresh - I solved it quickly

_Pairing (not necessarily formal pairing)_

- Really saw the benefit of trying to explain a concept yesterday (TDD)
  - Using my own code on the birthdays exercise I talked through an example of test-driving using the smallest, simplest increments, only to discover that I had not followed a very sensible process to write meaningful tests, and the tests weren’t actually testing what the code was doing!
  - Next process to reflect on, **how I write the next meaningful test** in TDD


**Workshop: Debugging process**

Objectives
1. Explain what debugging is
2. Describe the process of debugging
3. Apply the process (to find bugs in your program)

What is a bug?
- Error in code
- Wrong behaviour (inc. logic errors -> doesn’t give an actual error or line number)
- Unintended behaviour
- Negative impacts to users

Complexity of bugs
- Syntax error (cannot parse)
- NameError
- Wrong behaviour
- Unintended behaviour -> need to start by writing a test - need to care about a different way of using your program


What is debugging?
- Remove bugs
- Identifying cause of problem


[Skills workshop in week 1 github](https://github.com/makersacademy/skills-workshops/tree/master/week-1/debugging_1)

There are 3 bugs to find

Process
- Read error message
- Find line in code
- Understand error message
- Seen before? If not research

- Debug failing tests in order (TDD tests generally get more complex and code executes in order)

- In spec file -> get visibility (p appointment.title -> prints to terminal in test run)


Bug 1 process...
- Get visibility from spec file
- Shows that appt initialized with @title=nil
- See where that is being called from (appointment class file has a publicly readable :title variable
- ‘title’ is initialized for each instance of class
- ‘title’ also included as second arg in the ‘described_class’ in spec file
- Appointment in spec file run shows other args captured as initialized
- Read back through initialize method in class file - spotted typo in tit1e

- (Review: Keep reducing space search to narrow down where you are looking -> reduce to one line)


Bug 2 process…

My attempt
- 3 line refs given, and error highlights NoMethodError for ‘search’
- Looked at 3 lines to see which had a reference to search -> line 22 in appointment.rb class file
- Tried to ‘p’ appointment.location from inside spec, but got error private method `location' called for #<Appointment:0x00007fc47a8741f0>
- Commented out ‘private’ in class file and location shows as that initialized, but search still giving a method error
- Look up to see if search is a Geocoder method - it is
- Saw that instance variable @geocoder may not have been accessible in geo_location method -> added this in
p appointment.geocoder in spec file gives “Geocoder”

Alice’s process...
- Alice went into first link in error (gem file) [if prob not found here, you would move to the next, but first is usually closer to the error, others are next steps in the stack trace. Although, wouldn’t do this if you really trust a gem, and was working before you made a change.]
- Did some p’s
- Found that lookup was nil in execute method
- Also did a p self here [not actually needed]
- Then a self.methods in this (execute) method (still in the gem file) [not actually needed]
- Went to lookup method
- Added a p at the start
- Also saw that return from this method is just ‘return’ -> will always return nil
- Tried commenting out return and saw if the error changed - it did, but still an error
- Then p’d the actual last line in the method to see if it getting a lookup object as the comments suggest
- (Don’t assume a typo is the error -> it might be a typo everywhere, so don’t change it just in one place until you have narrowed down and know this is the error!)

- [Also if gem or test relies on network to get a response - can be inconsistent error (mine fixed itself when network dropped out!)]


Bug 3 process (Alice)
- Terminal gave suggestion of correcting spelling of array method ‘include?’



**Pairing notes…**

- Calling a CONSTANT in rpsec file needs to also include the Class context (not the instance of the class), like this… **Class::CONSTANT**

**Feedback from Lauren**
_Really good that you approached it as if if was the first time you’d conducted the challenges, you didn’t let us cheat and look up your previous code, and made us research the methods, etc if we didn’t understand them_
_You didn’t make me feel in any way inferior for not having reached the same point as you!_


## DAY 5
**Continuing with birthdays challenge**

Focus on breaking down problem process…

1. How would the user expect to interact with the program
  - (Example is the 3rd requirement -> check whose birthday it is today)
  - => check_birthday(today’s date)
  - => "It's Mary Poppin's birthday today! They are 124 years old!"

2. Object model…

```
As a good person,
So that I don’t miss a friend’s birthday,
I'd like to know if any friends have a birthday today.
```

Object | Messages
----------------- | ----------------------
Good_person
Friend | birthday_today?


**Rubocop linting**

The letters correspond to the problems found in the file under inspection.
**C** is for `convention`
**W** is for `warning`
**E** is for `error`
**F** is for `fatal`
**.** means that no problems were found in the file

Linting done for my own files (not the `_solution` file)




[Does TDD Guarantee Higher Code Quality?](https://github.com/makersacademy/course/blob/master/pills/tdd_quality_discussion.md)

“_Code has to be evolved as it's being test driven in order to ensure it follows SOLID principles, removes code smells and makes effective use of design patterns_"

#### SOLID

SOLID | Definition
-------------------- | ----------------------------------------
**Single responsibility principle** | A class should have only a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.
** Open–closed principle** | "Software entities ... should be open for extension, but closed for modification."
**Liskov substitution principle** | "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also design by contract.
**Interface segregation principle** | "Many client-specific interfaces are better than one general-purpose interface."
**Dependency inversion principle** | One should "depend upon abstractions, (not) concretions."


#### OOP

**Encapsulation**

[Encapsulation exercise](https://diode.makersacademy.com/students/dearshrewdwit/projects/2703)

[Skills workshop](https://github.com/makersacademy/skills-workshops/blob/master/practicals/object_oriented_design/encapsulation.md)


**Cohesion**

Each class should have one purpose or job, sometimes referred to as its responsibility.
A class has high cohesion when everything inside of it relates to that purpose, without anything extraneous. Perfection is achieved when there is nothing left to take away.


1. Exercise 1-2

Group methods in [example](https://docs.google.com/spreadsheets/d/1W4UJHaYvUUx6f2zui_N25YbReJBq_pvXFgTD6LmhMgw/edit?usp=sharing)


2. Exercise 4

How would user expect to interact?

- For new diary -> get/create (initialize) new diary
```
=> SecretDiary.new
```

To unlock diary
=>

(_Incomplete exercise here_)


#### Behaviour changes (what I've learnt)

Have focused a lot more on refactoring yesterday and today, including refactoring tests (removing is needed), and SRP
Trying to push pair partners (and myself) to break down tests (and features/problem) to smallest element 


#### Problem Solving workshop

_What is your process to break down the following problem…?_

Build a romans numerals prog
- Take arabic no.
- Convert to roman numerals (for numbers up to 10)

1. How would user expect this to work?

```
=> roman_numeral(10)
=> “X”
```

2. User stories

```
As a person
So that I can tell the time on my roman clock
I want to be able convert arabic numbers to roman numerals
```


Break stuff down to simplest things… (and these below, actually become the tests!)

```
return a single type (string)
```

```
converts 0 to “”
```

```
converts 1 to “I”
```

```
converts 2 to “II”
```

```
converts 5 to “V”
```


3. Object model

Object | Messages
----------------- | --------------------
Person |
Arabic_number | convert


4. First tests…

```
it “responds to convert… method” do
	
end
```

```
it “returns ‘X’ for arabic number of 10” do
	expect(convert_to_roman_numeral(10)).to eq “X”
end
```

5. First code…

```
def convert
end
```


_Simplest test_
_Simplest code to pass the test_
