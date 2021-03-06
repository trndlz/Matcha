# Matcha
Welcome to Matcha, a simple yet great dating website ! 
Create your profile, browse through a customized suggestion of profile, like, match, chat in just few clicks. 

![alt text](public/preview_readme.png?raw=true "Title")


### Build with
* [NodeJS](https://nodejs.org/en/) - Backend
* [Express](https://expressjs.com/) - Web application framework
* [ReactJS](https://reactjs.org/) - Frontend
* [PostgreSQL](https://www.postgresql.org/) - Database
* [Socket.io](https://socket.io/) - Used to get real time notifications and messages

## Get the requirement

### Prerequisites
You need to have installed [NodeJS](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/).

### Modify the config file
*server/config/dev.js* contains all the information needed by [PostgreSQL](https://www.postgresql.org/) to connect Matcha to its database. Modify it so it matches your Pg config.
```
const db = {
    user: 'yourPgUsername',
    database: 'yourDatabaseName',
    password: 'yourPgPassword',
    port: 'yourPgPort'
};
```

## Let's start

### Make sure all your node modules are installed
```
npm update
```

### Run your server
```
node server/index.js
```

### Create and fill your database with 600 random profiles
```
npm run init
```

### Start the App
```
npm start
```

## Ready Set Match !
Congrats you have successfully set up your Matcha ! You can now create a new profile or sign in with one of the 600 created (password: *Matcha2019*).

![alt text](public/model_readme.png?raw=true "Title")

## Authors
* **Trestan** - *Back* - [check his profile](https://github.com/trndlz)
* **Chloe** - *Front/Back* - [check her profile](https://github.com/ccu-an-b)

