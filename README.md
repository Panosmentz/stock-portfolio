### Stock Portfolio

### Technologies

ReactJS

MaterialUI

Firebase

Axios

React-toastify


### Live demo

https://happy-snyder-f3436c.netlify.app/

### Project Screenshots

![LandingPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/landing.PNG)
![signin](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/signin.PNG)
![suclogin](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/suclogin.PNG)
![dashboard](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/dashboard.PNG)
![mystocks](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/mystocks.PNG)

### App Setup

Clone the repository or download the .zip folder

Open an editor and open the folder stock-portfolio-master

Run `npm install` 

**Setting up Firebase**

Create a new project on Firebase and copy the config data

On the project root folder, create a new file called .env.local

Your .env.local file should look like this :

REACT_APP_FIREBASE_API_KEY=loremipsum

REACT_APP_FIREBASE_AUTH_DOMAIN=loremipsum

REACT_APP_FIREBASE_DATABASE_URL=loremipsum

REACT_APP_FIREBASE_PROJECT_ID=loremipsum

REACT_APP_FIREBASE_STORAGE_BUCKET=loremipsum

REACT_APP_FIREBASE_MESSAGING_SENDER_ID=loremipsum

REACT_APP_FIREBASE_APP_ID=loremipsum

REACT_APP_FIREBASE_MEASUREMENT_ID=loremipsum

Where loremipsum is the data from your Firebase project

Run `npm start`

### Deployment 

Run `npm run build`

Deploy the `build` folder that is generated on the project directory

Set up environment values for the Firebase config data

### To be Implemented

Fix : MyStocks component page reload pulls no data(favorite stocks) from the database because user.displayName is not yet accessible from firebase.auth listener(useEffect on StateContext.js)

Fix : When API limit has been exceeded, render a notification. JSON response has a Note key with a value of "The API limit has been..."

Fix : When populating the stockInfo table, some JSON responses do not have value, causing the App to crash.

Fix : Duplicate entries in the database. Check if the user already has followed the stock he is trying to follow and render a notification

Fix : Responsive design has issues on small devices where the width is bigger than 100% after a stock search

Feature : Add email confirmation when signing up

Feature : Add Forgot Password functionality

Feature : Add more Sign In methods(Facebook, Github, Apple, etc.)

Feature : Add a Footer with contact information, privacy, etc.

Feature : Receive notifications on followed stock price changes

Feature : Visual representations of stock history

Feature : Better UI/UX

Tests : unit tests, path tests
