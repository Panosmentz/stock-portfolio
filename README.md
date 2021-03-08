# Stock Portfolio
> This is a Full Stack Stock Tracking App using the [Alphavantage API]( https://www.alphavantage.co/).

## Table of contents
* [Overview](#overview)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Live-Demo](#live-demo)
* [Contact](#contact)

## Overview
> This is a  Stock tracking App where users can sign up, sign in, search for stocks, get up to date information on each stock and lastly, follow stocks that they are interested in.
## Screenshots
![LandingPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/landing.PNG)
![signin](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/signin.PNG)
![suclogin](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/suclogin.PNG)
![dashboard](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/dashboard.PNG)
![mystocks](https://github.com/Panosmentz/Projects-Screenshots/blob/master/stock%20portfolio%20screenshots/mystocks.PNG)
## Technologies
* ReactJS
* Material UI
* Firebase
* Axios
* React-toastify

## Setup
Clone this repository or download .zip and open the folder in your editor.
>Open a cmd and install the dependencies on the root folder 
>`npm install`

**Alphavantage API**
[Sign up and request an API key]( https://www.alphavantage.co/)

**Setting up Firebase**

Create a new project on Firebase and copy the config data

On the project root folder, create a new file called .env.local

Your .env.local file should look like this :

REACT_APP_API_KEY = YOUR ALPHAVANTAGE API KEY

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

## Live-Demo
[Live Demo](https://happy-snyder-f3436c.netlify.app/)

## Contact
Created by [@Panagiotis Mentzelopoulos](https://determined-saha-b25d49.netlify.app/) - feel free to contact me!
