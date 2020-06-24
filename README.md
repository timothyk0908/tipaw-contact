# Tipaw Contact Page

This project contains the client built with React, and the back-end built with Express, a simple contact page where requests are saved in MongoDB

## Prerequisites
In order to run this project node.js and npm both need to have been installed, as well as MongoDB https://www.mongodb.com

## Installation
cd in tipaw-client and npm install to install all the needed dependencies
cd in tipaw-backend and npm install to install all the needed dependencies

## Start
For client and back-end, run npm start, then launch http://localhost:3000 to access the client application
Click on 'Contact' to access the contact page

## Unit Tests
To run tests for either client or back-end, just cd into the repo and type 'npm run test' to launch them 

## Next big priorities
Webpack configuration: didn't do, I still needed to get updated with all the libraries used and webpack wasn't my first priority
Validation: ( express-validators for back-end should probably be added, with other types than string ), like for Email or phone, limit characters, ...
Refactoring: Redux/Saga, since it's a simple contact page, I already didn't feel the need to extend this implementation, I don't think Redux/saga is appropriate for this exercise, I mostly did it to remember how to do it
Styling: I didn't style much.. Thanks react-bootstrap to give me a quick styled page so I could focus on flow and back-end a bit more
Unit test coverage: and separation of concerns as well, I just learned to unit test in Express with Mocha/Chai which was a good experience, but my React app is not covered and needs more attention


## Built With
* [React.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/fr)
* [Redux]
