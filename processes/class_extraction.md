My Class Extraction process
===========================

## To support encapsulation & single responsibility principles


1. List all methods on original class
2. Draw class model
3. Highlight methods that fit better in extracted class
4. Draw sequence diagram
5. Move all highlighted methods into new class
6. Watch tests fail and run feature tests in repl (e.g. irb) to guide refactoring
7. Fix tests

_Oystercard example_ - requires some fixes to tests first though