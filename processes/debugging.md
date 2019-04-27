## Debugging Process

### Add a few different processes - ruby debugging, web app debugging, web app with db debugging

<!-- tighten the loop and get visibility -->

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


<!-- update using the below  -->
<!-- also update to include tightening the loop and getting visibility in web apps (week 3 notes) -->

**Workshop: Debugging process (week 1)**

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

