# Ghost

## Install Instructions

- `git clone https://github.com/stevepeak/ghostblog-heroku.git`
- `cd ghostblog-heroku`
- `heroku create :app-name`
- `heroku addons:add cleardb:ignite sendgrid:starter`
- `heroku config`
- Update your heroku config to match the following below with your database credentials

```sh
heroku config:set MYSQL_DATABASE=<value> \
  MYSQL_HOST=<value> \
  MYSQL_PASSWORD=<value> \
  MYSQL_USER=<value> \
  MY_URL=http://your-url.com \
  NODE_ENV=production
```

- `git push heroku master`
- **Fin.** Enjoy. Goto http://your-url.com/ghost/signup/ to start
