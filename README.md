### Stock Portfolio

### App set up

Prerequisites : `https://nodejs.org/en/`

Open a terminal, create a new folder and CD into that folder

Clone the repository : `git clone https://github.com/Panosmentz/stock-portfolio.git` or Download ZIP and extract files

`cd stock-portfolio`

Install the dependencies:

`npm install`

### Setting up environment variables

On the project's root directory, create a new file called `.env.local`

This is where the AlphaVantage API KEY and firebase's config settings are defined

REACT_APP_API_KEY=*******

REACT_APP_FIREBASE_API_KEY=*******

REACT_APP_FIREBASE_AUTH_DOMAIN=*******

REACT_APP_FIREBASE_DATABASE_URL=*******

REACT_APP_FIREBASE_PROJECT_ID=*******

REACT_APP_FIREBASE_STORAGE_BUCKET=*******

REACT_APP_FIREBASE_MESSAGING_SENDER_ID=*******

REACT_APP_FIREBASE_APP_ID=*******

REACT_APP_FIREBASE_MEASUREMENT_ID=*******

### Running the App

Run the app:

`npm start`

### Building the App for deployment

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Note that the environment variables need to be configured on the hosting provider.
App is now ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Testing

Not yet implemented.
To be done with Jest and Enzyme.

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

Tests : To write unit tests, path tests
