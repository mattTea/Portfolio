# Project: Bookmark Manager

## Towards achieving these goals

- I can learn anything by myself
- I use an agile product development process
- I can TDD anything

------

## Action Plan

Link to practical or challenge [repo](https://github.com/makersacademy/course/blob/master/bookmark_manager/00_challenge_map.md)

[Challenge learning objectives](https://github.com/makersacademy/course/blob/master/bookmark_manager/learning_objectives.md)

[Reflection objectives](https://github.com/makersacademy/course/blob/master/bookmark_manager/reflection_objectives.md)

------

## Evidence

_Evidence plan and links to examples_

Build a [web app that uses a database](https://github.com/mattTea/bookmark_manager)

The above project enabled me to meet the achieves the following goals...

#### Agile & TDD

- Generate user stories from requirements
- Build a complete full-stack feature.


#### Engineering and 'Dev Recipes'

- Set up a Ruby web project
- Attach a database to a web application
- Separate application behaviour from database behaviour (a controller method gets all bookmarks from a database and renders them into a view)
- Map objects across systems (a `bookmark` database record is wrapped in a new `bookmark` instance when `.create` is called)
- Create a CRUD system
- Implement a RESTful routing convention
- Wrap an adapter object (on calling `Bookmark.create` an instance of the Bookmark class is returned with all the attributes that were passed to `.create`, plus `id`).


#### Databases

- Install PostgreSQL and create a database
- Implement a one-to-many database object relationship
- Create tables using SQL
- Use SQL query terms like `SELECT`, `FROM`, `WHERE`, `*`, `INSERT`, `DELETE`, and `UPDATE`
- Use the psql command to interact with PostgreSQL


#### Tooling

- Set up a test environment
- Use database GUIs to interact with databases (TablePlus)


#### Skills

- Test-Drive advanced objects in Ruby, including adapter, wrapper, and service objects ([this test](https://github.com/mattTea/bookmark_manager/blob/f0aec552cd0514d558fdaa55b14db2cdfd5f8cb2/spec/bookmark_spec.rb#L23) for the `Bookmark.create` method takes properties as arguments, and returns an object which exposes all those properties as attributes, with an id attribute).
- Use a step-by-step approach to pull out logic from concretes to abstractions. (SQL written in the controller reads bookmarks from the database which are encapsulated in a method on the Bookmark model).


------

## Updates and comments

Project completed to current start: [29th March 2019](https://github.com/mattTea/bookmark_manager)


**What I learnt more of...**

- Wrapping database data in program objects


**What I found difficult and want to work on more...**

- Wrapping database data, and ORM (object relational mapping)

