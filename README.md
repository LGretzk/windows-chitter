# Chitter

This is an independent project based on the Makers Chitter challenge. Chitter is a lightweight clone of Twitter that allows users to post messages to a public stream.  
I decided to build a front-end-single-page-app to interface with the existing Chitter API to practice React, Redux, Bootstrap and async Javascript. 

## Demo

### Main page
![main](public/images/main_page.JPG)

### Login page
![login](public/images/login.JPG)

### Registration page
![registration](public/images/registration.JPG)

### Responsive design

|  |  |
|------------|-------------|
|![r-main](public/images/smartphone_main_page.png) | ![r-login](public/images/smartphone_login.png) |


## Technologies Used

- React
- Redux
- Javascript
- HTML
- CSS
- Bootstrap
- External API
- Postman


## How to run locally

### Install Node.js
1. Install `nvs` version manager
```
choco install nvs
```
2. Add the latest version of node
```
nvs add latest
```
3. Add a version of node to your `PATH` for the current shell
```
$ nvs use lts
PATH -= %LOCALAPPDATA%\nvs\default
PATH += %LOCALAPPDATA%\nvs\node\14.17.0\x64
$nvs link lts
```

### Set up the project
1. Fork this repository
2. Clone the fork to your local machine
```
git clone https://github.com/LGretzk/windows-chitter.git
```
3. Install Node.js dependencies
```
npm install
```

### Start
1. Start the server
```
npm start
```
2. Browse to [http://localhost:3000](http://localhost:3000)

## User stories


```
As a User
So that I can let people know what I am doing  
I want to post a message (peep) to chitter
```
```
As a User
So that I can see what others are saying  
I want to see all peeps in reverse chronological order
```
```
As a User
So that I can better appreciate the context of a peep
I want to see the time at which it was made
```
```
As a User
So that I can post messages on Chitter as me
I want to sign up for Chitter
```
```
As a User
So that only I can post messages on Chitter as me
I want to log in to Chitter
```

## API documentation

Each endpoint is illustrated as a curl command.

### Users
POST/users  
Creates a new user.
```
curl "https://chitter-backend-api-v2.herokuapp.com/users" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"user": {"handle":"kay", "password":"mypassword"}}'
```

### Sessions
POST/sessions  
Creates a new session, giving you a user_id and session_key required to perform actions on behalf of the user (e.g. posting peeps, liking peeps).

Creating a new session renders any previous session_keys invalid.
```
curl "https://chitter-backend-api-v2.herokuapp.com/sessions" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"session": {"handle":"kay", "password":"mypassword"}}'
```

### Peeps
GET /peeps  
Returns a list of the last 50 peeps in reverse chronological order.
```
curl "https://chitter-backend-api-v2.herokuapp.com/peeps"
```

POST/peeps
Creates a new Peep.

This endpoint requires a user_id and session_key given as a token in the authorization header.
```
curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
  -X POST \
  -H "Authorization: Token token=a_valid_session_key" \
  -H "Content-Type: application/json" \
  -d '{"peep": {"user_id":1, "body":"my first peep :)"}}'
```


## React documentation

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).