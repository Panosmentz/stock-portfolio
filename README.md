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

REACT_APP_API_KEY=placeholder

REACT_APP_FIREBASE_API_KEY=placeholder

REACT_APP_FIREBASE_AUTH_DOMAIN=placeholder

REACT_APP_FIREBASE_DATABASE_URL=placeholder

REACT_APP_FIREBASE_PROJECT_ID=placeholder

REACT_APP_FIREBASE_STORAGE_BUCKET=placeholder

REACT_APP_FIREBASE_MESSAGING_SENDER_ID=placeholder

REACT_APP_FIREBASE_APP_ID=placeholder

REACT_APP_FIREBASE_MEASUREMENT_ID=placeholder

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

### Thought Process

As I was reading through the scenario and components to be implemented I knew I wanted to use React for the Front End and the technologies below :

- login to their portfolio --> Firebase Authentication, sign up with email and password, sign in(email/pwd) and Sign In with Google

- search for stocks --> AlphaVantage API call

- follow stocks they are interested in --> Firebase's Cloud Firestore

- unfollow stocks they are no longer interested in --> Firebase's Cloud Firestore

### Tradeoffs

Quality and Quantity.

Due to the limited time I had to work on this solution I have made the following decisions :

As for quality, I am not happy with the visual representation of data pulled from the API. It is not very user friendly. Also there are some bugs in my solution.

Quantity -> I wanted to add some more features, please see below.

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
