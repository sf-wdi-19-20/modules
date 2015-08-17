# Sample Terminal Commands

These terminal commands show what Brianna did to publish Cameron's recipe app from last week's review.  DO NOT BLINDLY FOLLOW these commands -- read the docs linked in the readme!


```bash
// cloning Cameron's group review recipe project to publish to heroku
 5642  git clone https://github.com/bgveenstra/recipe_app.git
 5643  ls
 5644  cd recipe_app
 5645  ls
 5646  subl .
// updating Gemfile according to https://devcenter.heroku.com/articles/rails4
 5649  bundle install
 5650  git status
 5651  git add .
 5652  git commit -m "added 12factor gem for heroku"
 5653  git status
 // creating project on heroku
 5659  heroku login
 5660  heroku create camerons-macaroon-recipes
 5661  git remote -v
 5662  git push heroku master
 // checking my site works... 
 // nope -- there's an error; check logs
 5663  heroku logs --tail
 // turns out I didn't have a db yet!
 // adding db according to https://devcenter.heroku.com/articles/heroku-postgresql
 5668  heroku addons | grep postgres
 5670  heroku addons:create heroku-postgresql
 // checking heroku config file to see DB URLs
 5672  heroku config
 // setting up heroku db based on project's migrations and seed file, according to https://devcenter.heroku.com/articles/rake
 5674  heroku run rake db:migrate
 5675  heroku run rake db:seed
 // command to output last 50 lines of terminal history into a history.txt file to save and share!
 //  $ touch history.txt
 //  $ history | tail -50 >> history.txt
 ```
