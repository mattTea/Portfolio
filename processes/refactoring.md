My Refactoring process
======================

## General aspects

1. Ensure high test coverage to ensure current functionality does not break when refactoring
    - Start with feature tests
    - Test behaviour not state
    - (This might highlight areas to refactor by doing this)

2. Descriptive naming
    - Are variable, method, & class names clear and descriptive?

3. Don't allocate memory in an instance variable for something that can be a constant

4. Look for repetition
    - If method names contain some similar words, look to extract common items

5. Keep methods short
    - Single responsibility - when describing a method, do you use the work 'and'?
    - What is the core functionality, what could be delegated
    - Keep to 7 lines max
    - Any repetition -> could similar code be combined and made into a separate method
    - If 2 things are always called together, create a custom method that includes them both

6. Do all methods return something (rather than just modifying state)
    - Return `this` to allow method chaining?

7. Extract new classes if there are any super classes handling most of the behaviour
    - Each class less than 50 lines?
    - Ensure a class/object doesn't know too much about any other class/object that its interacting with
      - Just want to ask for something and get that value back
      - Don't delve into another object too much (when interacting with another object don't chain that object's methods together)


## Further detail

- Do unit tests mock the dependencies of the object they are testing?
- Does the linter pass with no warnings?
- Explain briefly how the program works, does the code read clearly as per this description?

- Does the README...
  - Describe how to install dependencies, run tests, and run the project?	
  - Describe the approach?	
  - Describe how the code is structured and why?	
  - Include a screenshot of the running app?	

- Do the commit messages clearly describe what that commit does?
 
- Do you notice any of the following common problems in the code?
  - One or two classes that do all the work
  - One class is significantly longer than all of the others
  - Most methods don't return anything, instead they modify instance variables
  - The feature tests don't use a test framework (e.g. RSpec or Jasmine)
  - The tests only pass today, because dates aren't mocked or passed in as arguments
