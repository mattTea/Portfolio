My Code Review process
======================

1. Readme
    - Describes the project?
    - Describes how to clone/download/run application?
    - Instructions to run tests, linter, etc?

2. Commit history
    - Does the commit history describe the development story, and show a test-driven and iterative development process?
    - Do commit messages describe what has changed in each commit

3. Tests and code quality (linting and test coverage)
    - Do the tests all pass?
    - Is test coverage high (>90%)?
    - Is the code free from linter errors?
    - Do the tests test behaviour (tests should be calling methods, rather than attributes)?
    - Are tests isolated?
    - Are tests correctly testing classes and methods rather than stubs?

4. Quick wins
    - Class and method naming -> doing what they say they do
    - Single responsibililty (methods and classes)
    - Shorter methods
    - (Use a linter / test coverage)

5. The code
    - Is the code (including tests) DRY?
    - Are variable, method, & class names clear and descriptive?
    - Are methods short with single responsibility?
    - Do all methods return something (rather than just modifying state)?
    - Do classes also have a single responsibility?
    - Are there any _super classes_ that do everything?
    - Do any classes delve into and know too much about other classes?

6. Other good practice
    - Any presentation elements/strings in the business logic layer (model/Class) files
    - Long if/else statements?
    - Continuous integration?
    - Modules or partials used where appropriate?
    - Semantic html elements?
    - Consistent file naming and folder structure
