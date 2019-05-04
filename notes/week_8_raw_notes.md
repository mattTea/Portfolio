# WEEK 8-9

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



# WEEK 9

[Feedback from Jeremy](https://github.com/mattTea/instagram-challenge/commit/c559f397d4580e4aed148bb1084b829b64cb5743#commitcomment-33343660) - Instagram code review

- _Have led with the TDD'ing strictly, which is good._

## Project

https://medium.com/full-taxx/how-to-add-likes-to-posts-in-rails-e81430101bc2


[Project team assessment criteria spreadsheet](https://docs.google.com/spreadsheets/d/1VjN54FDddP1dlHVDHyP8diOCBYfJrn61VxgKVFALR84/edit#gid=104272588)


### End day 7 retro and learning

- **Learning**: having a retro at the end of each day enabled a really honest check-in on how each of us were feeling -> those who had had a frustrating day could get it out and others talked though the positives that person had given during the day. We were all able to give and receive ideas for helping any negative feelings, take more breaks, don’t open your laptop that night, spend time with a coach. Felt like we really owned what we were doing and each others’ wellbeing

- **Learning**: DO MORE - demo to our PO/coach. Got opinions and decisions but should have done more active demoing for faster feedback

- **Learning**: Go straight to the root of a code smell (something you know doesn't feel right), don’t keep adding to it or ignoring it hoping it will get better! Examples: a non-foreign keyed reference column in a db table, devise library redirect code


## DAY 8

Preventing page refresh for likes

https://www.rubyguides.com/2019/03/rails-ajax/

This one seems better
https://medium.com/@codenode/how-to-use-remote-true-to-make-ajax-calls-in-rails-3ecbed40869b

https://www.youtube.com/watch?v=eJHHIcScqYA

Getting data to db and updates on refresh now just need to handle response!


### Some team love (feedback) on Slack!

#### Matt Thompson [11:18 AM]
:star: Thanks for the last 2 weeks guys, really enjoyed the project with you all! :grin: :fish:

#### Evelyn Blázquez [12:15 PM]
Thank you Matt for the very nice and supportive words! I would like to apologise to all of you for not being able to cope with the project the way I would have liked to. And I would like to thank you for allowing me to be part of the final demo. You are all amazing people! :muscle::blush:

#### Amy Jordan [3:12 PM]
Was having all the feels last night for our team and Mighty March. What a fab couple of weeks. Cod we have done any better? :joy:
