# WEEK 4

## DAY 1

### Weekend challenge code review

Look at [review rubric](https://github.com/makersacademy/rps-challenge/blob/master/docs/review.md) again to learn more about some concepts

Questions to coaches today...

- Does my commit message history tell a sufficient story to highlight test-driven approach?
- Should I do more to evidence my test-driven and structured approach to solving the problem?

[Exemplar solution](https://github.com/makersacademy/rps-exemplar/blob/master/app.rb)


#### Learn more

**Singleton pattern** and alternatives

- [Class variables and methods](http://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/45-more-classes/lessons/113-class-variables)
- [Singleton pattern](https://en.wikipedia.org/wiki/Singleton_pattern)

The problem we are trying to solve is that instance variables defined inside a route handler go out of scope once the response is sent back to the client...

```ruby
post '/names' do
  player_1 = Player.new(params[:player_1_name])
  player_2 = Player.new(params[:player_2_name])
  @game = Game.new(player_1, player_2)
  redirect '/play'
end
```

So, in the example above `@game` goes out of scope and therefore the new `Game` instance it points to becomes unreachable (and Ruby will subsequently destroy it).

[Battle walkthrough step](https://github.com/makersacademy/course/blob/master/intro_to_the_web/walkthroughs/killing_the_global_variable.md) that explains this.


_Instead of using a using a global variable as before, we can introduce static behaviour to the Game class. This means defining methods on the class itself rather than instances of the class._



### Week 4 summary goal

[Outline](https://github.com/makersacademy/course/blob/master/week_outlines.md/#week-4)


### Primary goal

**Can you build a web app that uses a database**


**By the end of the week all developers can...**

- Build a simple web app with a database
- Follow an effective debugging process for database applications
- Explain the basics of how databases work (e.g. tables, SQL, basic relationships)


[Bookmark Manager](https://github.com/makersacademy/course/blob/master/bookmark_manager/00_challenge_map.md) challenge

Full detail of Bookmark Manager learning objectives [here](https://github.com/makersacademy/course/blob/master/bookmark_manager/learning_objectives.md)

Main focus/learning objectives for the week are...

- Agile and TDD
- Engineering and 'Dev Recipes'
- Databases
- Tooling


Understand a little about each dependency you're using
- E.g. pg (postgres?) gem this week


### Databases

#### Tables

`rows` -> records
`columns` -> fields

Relational model -> to remove duplication by splitting table into multiple tables that are related
- Each with a specific responsibility (i.e. customer, orders)
- Way of relating to each other through IDs (i.e. order table would have the customer id in each order record)


(Tomorrow `class responsibility models` - to learn about associations)

**Postgres** (db management system - a server that runs our db)
- Tool to interact with dbs
- Shell is `psql`
- Using sql as a language

(rspec is a DSL - a domain specific language - testing is the domain)

SQL is also a domain specific language

Gem called `pg` - to communicate (create connection) with postgres db
- Allows writing of sql in ruby code


#### SQL

Some practical training tutorials on SQL at [SQLzoo](https://sqlzoo.net/)


### Afternoon challenge - pairing with Arthur

[Bookmark Manager](https://github.com/makersacademy/course/blob/master/bookmark_manager/00_challenge_map.md)


#### Feedback from Arthur

- _Very methodical in approach, and great at pulling us back to focus on test-driving the solution._
- _Really appreciated your curiosity - when we didn't fully understand a concept you were very happy to break things and pull them apart to understand how they were working_
  - _Examples included capybara and rspec setup, and class methods_

------

## DAY 2

### REST (representational state transfer)

[Makers info pill](https://github.com/makersacademy/course/blob/master/pills/rest.md)

#### REST Ideas

1. Urls map to a _resource_ (a noun)

2. We use a set of actions that HTTP allows us to specifiy when we create a request (verbs - GET, etc)

#### Routing for a real application

When writing a web app, we need a few more routes on top of the basic create, read, update and delete...

- A route for listing all the records for a certain resource (e.g. all the restaurants).
- A route to show a web form for entering the details of a new record.
- A route to show a web form for entering the new details of an existing record.

**Rails conventions...**

```
Verb    URI Pattern            Controller#action
------  ---------------------  ------------------
GET     /restaurants           restaurants#index
POST    /restaurants           restaurants#create
GET     /restaurants/new       restaurants#new
GET     /restaurants/:id/edit  restaurants#edit
GET     /restaurants/:id       restaurants#show
PATCH   /restaurants/:id       restaurants#update
PUT     /restaurants/:id       restaurants#update
DELETE  /restaurants/:id       restaurants#destroy
```



### Databases 2 Skills Workshop

[Makers repo](https://github.com/makersacademy/skills-workshops/tree/master/week-4/databases_2)

[Class responsibility collaborator cards](https://github.com/makersacademy/skills-workshops/blob/master/week-4/databases_2/crc_example.md)


**Some summary notes**

Foreign key = customer id being used in the order table (for example)

Primary keys generated for you (usually?) and primary keys are persistent

Can provide rules for data


#### From domain models to database structures

CRC model

```
                           Class name (object)
--------------------------------------------------------------------
Responsibilities (methods and state)  |  Collaborator (dependencies)


```

**Example**

```
As a customer
So I can get a bicycle
I want to withdraw a bicycle from a docking station

As a customer
So I can complete my trip
I want to dock a bicycle back at a docking station

As a customer
So I can have the best cycling experience
I want to only get good bikes from the docking station

As an administrator
So I can tell how many bikes are at each docking station
I want to get a count of the number of bikes at the docking station


                     Docking station
-----------------------------------------------------------
Responsibilities (meth/st.) |  Collaborator (dependencies)
                            |
       release_bike         |            bike
        dock_bike           |
       count_bikes          |



                          Bike
-----------------------------------------------------------
Responsibilities (meth/st.) |  Collaborator (dependencies)
                            |
        is_working?         |


```


Above would suggest 2 tables...

- DockingStation
- Bike


#### Table associations

(Check out workshop documentation)

Types of relationships
- `has a...` -> docking station `has a` bike suggests we should put the docking station id in the bike table


**Exercise**

```
USER STORIES

As a coach
So I can get to know all students
I want to see a list of students' names

As a coach
So I don't get overwhelmed with a massive list of everyone
I want to filter the list of students by cohort name

As a coach
So I can learn students' names
I want each student's name to link to the URL of a picture of the student

As a coach
So I can mark certain students
I want to tag a student with many named tags

As a coach
So I can see students with the same tag
I want to filter students in the list by tag name

As a student
So I can reflect on my days
I want to rate each day out of 10

As a coach
So I can get an overview of feedback
I want to see an average of the day ratings for each student


CRCs

                         Student
-----------------------------------------------------------
Responsibilities (meth/st.) |  Collaborator (dependencies)
                            |
          knows name        |           cohort
         knows cohort       |           (tag)
          image_url         |
          rate_day          |
     average day rating     |
       


                         Cohort
-----------------------------------------------------------
Responsibilities (meth/st.) |  Collaborator (dependencies)
                            |
          knows name        |
       filter_students      |
        


                           Tag
-----------------------------------------------------------
Responsibilities (meth/st.) |  Collaborator (dependencies)
                            |
       knows tag_name       |
       filter_students      |




TABLES

Students
--------

A student has tags, so put the student id in the tags table
(A tag also has students, so put tag id in the students table?)

Join table? See below

|  id  |     name      |  cohort_id  |    image_url   |   average_day_rating   |
|------|---------------|-------------|----------------|------------------------|
|  S1  | Matt Thompson |     001     |   www.me.com   |          4.00          |



Cohorts
-------

(A cohort has a student, so put cohort id in the students table)

|  id   |     name     |
|-------|--------------|
|  C1   |  "May 2016"  |



Tags
----

(A tag has students, so put tag id in the students table)
(A student also has tags, so put student id in the tags table?)

|  id  |     name     |
|---------------------|
|  T1   |    happy     |


Join table (for students and tags)
----------------------------------

|   join_id   |  tag_id  |   student_id    |
|-------------|----------|-----------------|
|     001     |    T1    |       S1        |


```

`has_and_belongs_to_many` association?

[Associations link](https://guides.rubyonrails.org/association_basics.html#the-types-of-associations)

[Many-to-many relationships](https://fmhelp.filemaker.com/help/17/fmp/en/index.html#page/FMP_Help/many-to-many-relationships.html)

"Break the many-to-many relationship into two one-to-many relationships by using a third table, called a _join_ table. Each record in a join table includes a match field that contains the value of the primary keys of the two tables it joins. (In the join table, these match fields are foreign keys.) These foreign key fields are populated with data as records in the join table are created from either table it joins."


**Ruby/rails guide to using association**

[Association basics](https://guides.rubyonrails.org/association_basics.html#the-types-of-associations)


#### Pairing with Kim (and Yoda)

[SQL cheat sheet](http://www.cheat-sheets.org/sites/sql.su/)

[Postgres command line cheat sheet](https://blog.jasonmeridth.com/posts/postgresql-command-line-cheat-sheet/)


`psql postgres` command to start

[Ruby class PG::Result](https://www.rubydoc.info/gems/pg/PG/Result)

_Loved your excitement, it really motivated me through the tougher parts of the challenge!_
_Be sure to continue to balance that with stepping back, researching at the right time. Overall thought we worked really well together maintaining this balance brilliantly between us!_

------

## DAY 3

### More SQL

SQL files are being held in a `migrations` folder for teh afternoon bookmarks manager challenge... so, why?

[What is a Migration Script?](https://www.red-gate.com/simple-talk/sql/database-administration/using-migration-scripts-in-database-deployments/)

_Whereas a build script creates a database, a migration script, or ‘change’ script, alters a database. It is called a migration script because it changes all or part of a database from one version to another. It ‘migrates’ it between versions. This alteration can be as simple as adding or removing a column to a table, or a complex refactoring task such as splitting tables or changing column properties in a way that could affect the data it stores._

_For every likely migration path between database versions, we need to store in version control the migration scripts that describe precisely those steps required to perform the change and, if necessary, moving data around and transforming it in the process_


#### SQL Zoo

SQL zoo [challenges](https://sqlzoo.net/)

See my own [project](https://github.com/mattTea/Portfolio/blob/master/projects/sql_zoo.md)

- Strings in sql queries should be in single quotes

- Can run calculations in queries (e.g. calculating gdp per capita from 2 columns...)


#### Afternoon pairing with Greg


## DAY 4

At conference today, but working through last step of section 11 in the afternoon

[Step 11 - wrapping database.. ](https://github.com/makersacademy/course/blob/master/bookmark_manager/11_wrapping_database_data_in_program_objects.md#wrapping-database-data-in-program-objects)

[SitePoint - intro to ORM](https://www.sitepoint.com/orm-ruby-introduction/)

[Learn.co - intro to ORM](https://learn.co/lessons/ruby-orm)
- An ORM is really just a concept or a design pattern, a conventional way for us to organize our programs when we want those programs to connect to a database
- When "mapping" our program to a database, we equate **classes with database tables** and **instances of those classes with table rows**

You may also see this referred to as "wrapping" a database, because we are writing Ruby code that "wraps" or handles SQL.


## DAY 5

#### RESTful routes

[Learn.io link](https://learn.co/lessons/sinatra-restful-routes-readme)

_"It's important to note that much of the CRUD actions are different actions that occur on the same resource. Let's take the example of an article with the ID 4. If we wanted to view the article, we would make a GET request to /articles/4. But what about when I want to update that article? Am I hitting a different resource? Nope! Just doing a different action to that same resource. So instead of a GET against /articles/4 we do a PUT. That's why separating what you're talking to (the resource/noun) from the action you're doing (the HTTP verb) is important! That's key to REST."_

[Game looking at REST resources and state](https://sjmog.github.io/rest/)


[Example URLs for RESTful routes](https://github.com/makersacademy/course/blob/master/pills/rest.md#routing-for-a-real-application)

```
Rails conventions for URLs & related controller methods

Verb    URI Pattern            Controller#action
------  ---------------------  ------------------
GET     /restaurants           restaurants#index
POST    /restaurants           restaurants#create
GET     /restaurants/new       restaurants#new
GET     /restaurants/:id/edit  restaurants#edit
GET     /restaurants/:id       restaurants#show
PATCH   /restaurants/:id       restaurants#update
PUT     /restaurants/:id       restaurants#update
DELETE  /restaurants/:id       restaurants#destroy
```

#### Routes In Sinatra

In Sinatra, a route is an HTTP method paired with a URL-matching pattern.

Each route is associated with a block:
```ruby
get '/' do
  .. show something ..
end

post '/' do
  .. create something ..
end

put '/' do
  .. replace something ..
end

patch '/' do
  .. modify something ..
end

delete '/' do
  .. annihilate something ..
end

options '/' do
  .. appease something ..
end

link '/' do
  .. affiliate something ..
end

unlink '/' do
  .. separate something ..
end
```

See also [`:method_override`](https://github.com/mattTea/bookmark_manager/blob/master/problem/problem_breakdown.md) for the **POST _method hack**


#### More notes on afternoon challenge (pair not around)

[Useful sinatra routes](https://learn.co/lessons/sinatra-restful-routes-readme)


Capybara 4-phase test...

1. Setting up test data
2. Checking that the data is present
3. Carrying out the DELETE action
4. Checking that the data has been removed

More about good steps for setting up and running tests here: [thoughtbot Four-Phase Test](https://robots.thoughtbot.com/four-phase-test)
