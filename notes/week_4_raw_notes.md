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
