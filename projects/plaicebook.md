# Project: Acebook (PlaiceBook)

## Towards achieving these goals

- I can learn anything by myself
- I grow collaboratively
- I use an agile product development process

------

## Action Plan

In a team, build a FaceBook clone

Link to [challenge](https://github.com/makersacademy/course/tree/master/engineering_projects/rails)
- Setup [repo](https://github.com/makersacademy/acebook-rails-template)

------

## Evidence

- Link to [demo presentation](https://docs.google.com/presentation/d/1G4_IIE2ZSAjdjU69yEMdQYqS11aMUgAvkvzofioMsOM/edit#slide=id.p)
- Link to [deployed app](http://plaicebook.herokuapp.com/)

1. Testing
    - 100% coverage
    - Feature tests throughout and unit tests for custom methods
    - Every member of the team can describe why every test exists

2. Distribution of work
    - All team members own the code, can describe why any part of the app exists, and made regular commits
    - Every completed ticket in the [workflow board](https://trello.com/b/rpTFxQEg/acebook-plaicebook) has a closed or merged pull request

3. Code quality
    - Commit [messages](https://github.com/mattTea/acebook-plaicebook/commits/master) are clear and include...
      - A single line describing the changes
      - A description of the user problem it solves

    - RuboCop linter passes on all commits
    - [Repo](https://github.com/mattTea/acebook-plaicebook/blob/master/README.md) complexity score is low
    - All pull requests are peer reviewed

5. Documentation
    - README contains description, install and run instructions and instructions to run tests
    - Per sprint team learning sessions were also [captured](https://github.com/mattTea/acebook-plaicebook/tree/master/docs), along with progress snapshots

6. Deployment
    - Merging any branch into master automatically runs automated tests and deploys into production (TravisCI)

------

## Updates and comments

Project completed: [3rd May 2019](https://github.com/mattTea/acebook-plaicebook)

Process, relevant comments and new things...

- Building on an existing codebase (provided by Rails generated files and the challenge setup) allowed me to improve my reading and understanding of code that I had not written myself. Modelling aspects of the application enabled me to see familiar patterns, and helped me understand Rails as a framework

- Understanding the MVC pattern in a new technology (Rails), including `ActiveRecord`, Rails routing, and Rails controllers

- Helped improve the whole team's agile development process, through...
  - Maintaining a Kanban workflow board of development items
  - Morning stand-up and evening retro to ensure everyone shared progress, commitments, blockers and improvements
  - Focusing on slicing of minimal functionality for every feature as well as the overall product, before iterating with improvements and richer features