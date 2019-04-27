# WEEK 7

## DAY 1

### Engineering project for next 2 weeks...

https://github.com/makersacademy/course/blob/master/engineering_projects/README.md


#### Team

https://docs.google.com/spreadsheets/d/1Y5nVRKKWrnlh3T-5X6_v7h79eBfCbs2qi5fFyrJx0l0/edit#gid=592957066

Henry Gambles
Amy Jordan
Matt Thompson
Evelyn Blázquez

All doing rails

#### Primary goals

By the end of the engineering project, the goal is to be able to answer "yes" to the primary question:

**Can you use high-quality processes to build a project in a team?**


#### Criteria

https://github.com/makersacademy/course/blob/master/final_projects/project_criteria.md

PRs to be peer reviewed -> look at comments previously about the fact this should result in changes/refactors to the code

Containerisation is optional

Auto-deploy to either `Heroku` or `AWS` (or something of your choice)


#### Schedule

https://github.com/makersacademy/course/blob/master/engineering_projects/week_schedule.md


## Seed project

Use this, fully read readme, build on top of this rails framework
https://github.com/makersacademy/acebook-rails-template


### Examples card wall

https://trello.com/b/aN3xtXXl/acebook-rails-template


### Toolbox

https://github.com/makersacademy/course/blob/master/engineering_projects/toolbox.md


### Next 15 mins

- Team name
- Repo forked and set up
- Create slack channel -> with Ed and Michael included
- Create a card wall


#### Project setup

https://github.com/makersacademy/course/blob/master/engineering_projects/project_setup.md


`plaicebook`

------

## Estimating

Complexity, not time
Iterative

Michael and Ed POs -> invite to demos?

Looks like repo is using Rails version 5.1


## DAY 2

#### Example CVs

- https://github.com/motri/cv
- https://github.com/AAMani5/cv
- https://github.com/pelensky/cv
- https://github.com/lubosmichalic/cv
- https://github.com/Alicespyglass/cv



## DAY 3

### Rails tutorial

[Rails getting started](https://guides.rubyonrails.org/getting_started.html)

`rails new blog` to create new rails app

Table included to describe what all folders refer to


A `controller's` purpose is to receive specific requests for the application. Routing decides which controller receives which requests. Often, there is more than one route to each controller, and different routes can be served by different actions. Each `action's` purpose is to collect information to provide it to a `view`.

To create a new `controller`, you will need to run the "controller" generator and tell it you want a controller called "Welcome" with an action called "index", just like this:

```
bin/rails generate controller Welcome index
```

[Rails routing](https://guides.rubyonrails.org/routing.html)


If you run `bin/rails routes`, you'll see that it has defined routes for all the standard RESTful actions.


A controller is simply a class that is defined to inherit from ApplicationController. It's inside this class that you'll define methods that will become the actions for this controller. These actions will perform CRUD operations on the articles within our system.

There are public, private and protected methods in Ruby, but only public methods can be actions for controllers.


#### Validation

The model file, `app/models/article.rb` is about as simple as it can get:

```ruby
class Article < ApplicationRecord
end
```

There isn't much to this file - but note that the `Article` class inherits from `ApplicationRecord`. `ApplicationRecord` inherits from `ActiveRecord::Base` which supplies a great deal of functionality to your Rails models for free, including basic database CRUD (Create, Read, Update, Destroy) operations, data validation, as well as sophisticated search support and the ability to relate multiple models to one another.


#### Edit article

The arguments to `form_with` (in edit.html.erb) could be model objects, say, `model: @article` which would cause the helper to fill in the form with the fields of the object. Passing in a symbol scope (`scope: :article`) (as per the new.html.erb) just creates the fields but without anything filled into them

------

## Weekend

#### Planned challenge - instagram

https://github.com/makersacademy/instagram-challenge


#### Other plans

1. Process reviews (2 if poss)
2. Review Amy CV (DONE)
3. Progress News Summary app
4. Learn Kotlin
5. Portfolio bits
6. Projects to finish
    - Airport-js
    - Refactor bowling
    - (Notes app?)