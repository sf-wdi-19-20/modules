# Hidding API Keys in Express

##Steps

#### Step.1 Setting up and Hiding ```config.js```
1. Create a ```config.js``` file in the root folder of your project. This file is where you will define **Development Environment Variables** and **Secret Variables**. It will need to be added to any.

  config.js
    ```
    module.exports = {
      PORT: '1337',
      MONGO_URI: 'mongodb://localhost/harold',
      SESSION_SECRET: 'OurSuperSecretCookieSecret',
    }
    ```
2. Add a ```.gitignore``` file to your project and add ```config.js``` to it and save it.
3. run ```$ git status``` and you will see .gitignore is added to your project but you will not see ```config.js``` because you do not want to save it to github.

#### Step 2. Accessing ```config.js``` and ```process.env```
```process.env``` is a variable available in local and production. It stores various important environment variables. In heroku, ```process.env.PORT``` is equal to the port that heroku will run your app. ```process.env.PORT``` is not defined in localhost, so we will extend these variables with the ```config.js``` file.

1. Define ```config``` to be equal to the contents of your ```config.js``` file or to ```process.env```.

  server.js
  ```
  if (process.env.PORT) {
    var config = process.env;
  } else {
    var config = require('./config');
  };
  ```

2. Now ```config.PORT``` will be equal to the current port in either heroku or on localhost.

  ```
  app.listen(config.PORT)
  ```

##### Step 4. Heroku Config Vars

What about other variables beside PORT? To add those to ```process.env``` in production you have to define **Heroku Config Vars**

see session vars
```
$ heroku config
```
set config vars
```
$ heroku config:set SESSION_SECRET=blakitiblah
```
