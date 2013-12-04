# Ghost blog setup on Heroku

The ghost blog works very well on Heroku, the only problem is the images.

Heroku just store the upload images for a short time, the solution is the Amazon S3 service, but I don't try to change the Ghost for use it.

**This is a small guide for Ghost work on Heroku:**

`git clone https://github.com/patrickespake/ghostblog-heroku.git`

`cd ghostblog-heroku`

`heroku create :app-name`

`heroku addons:add heroku-postgresql:dev`

`heroku addons:add sendgrid:starter`

**Get the Heroku config variables:**

`heroku config`

**And set the variables for work with Ghost:**

You can get the values for the database variables in https://postgres.heroku.com/databases and select your database.

```sh
heroku config:set POSTGRES_DATABASE=<value> \
  POSTGRES_HOST=<value> \
  POSTGRES_PASSWORD=<value> \
  POSTGRES_USER=<value> \
  MY_URL=http://your-url.com \
  NODE_ENV=production
```

**Send the code to Heroku:**

`git push heroku master`

Enjoy! Go to http://your-url.com/ghost/signup/ to start.
