# summon-node
Sample heroku application which reads secrets from the environment using the [summon buildpack](https://github.com/dsbyrne/heroku-buildpack-summon).

References to secrets are defined in [secrets.yml](secrets.yml) and read in [server.js](src/server.js). The [Procfile](Procfile) uses summon to launch our node application.
