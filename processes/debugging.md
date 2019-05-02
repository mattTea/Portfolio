My Debugging process
====================

## General

### Mantra: _tighten the loop and get visibility_

1. Read error message for error type and the line(s) in the code it is being generated

2. Find line in code

3. Do you understand the error message, have you seen it before?

4. If the error is new, research it, using official docs, stack overflow, OSS maintainer forums

5. Debug failing tests in order (tests in test-driven programs generally get more complex as they build up)

6. If the error is from a failing test, get visibility in the test file (e.g. `puts` or `console.log()`)

7. Is the test testing for the correct program or user behaviour?

8. Does the REPL or console error match, or give any additional hints?

9. Model and follow the flow of the program, look for some obvious reasons…
    - Typos
    - Are we overwriting a variable anywhere?
    - Are we doing things in the right order?
    - Are we returning too early/too late/at all in a method?

10. Get further visibility in the flow of the program to see if values are as we expect at different points, in order to narrow down the cause of the bug 
    - `console.log()` or `puts` statements to output values at specific points
    - Tools such as **Pry** or **Capybara** `save_and_open_page` to pause program flow and inspect state at certain points

11. N.B. Don’t assume an obvious error is the cause -> a typo might be a typo throughout the program and not be causing any problems. Don't change something in one place until you have narrowed down and know this is the error

------

## Debugging across the web stack

1. To **tighten the loop**, model/follow the path of execution (or _flow of control_) - understand and the journey of the code executing on the server...
    - Request comes from client
    - `Controller` (for routing) catches the request
    - (If there are any `models` these may be called here, sent back to `controller`, which would then call `view`)
    - Returns relevant `view` (or return value from route method)
    - `View` processes (transforms to html)
    - `View` returns something to controller
    - `Controller` sends html back to client 

2. Get visibility using tools available for different parts of the stack
    - `puts` in .rb or .erb code
    - `console.log()` for client code
    - tools to pause flow and open pages for `view` files
    - server logs to understand requests made and responses received
