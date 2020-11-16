import React, { createContext, useReducer, useEffect } from "react";
import StateReducer from "./StateReducer";
import { auth, provider } from "../config/firebase";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  registration: false,
  searchResult: null,
  stockInfo: null,
};

export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, initialState);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("isAuthenticated", true);
        dispatch({
          type: "LOAD_USER",
          payload: user,
        });
        //      currentUser = user;
      } else {
        localStorage.setItem("isAuthenticated", false);
        //     currentUser = null;
      }
    });
  }, []);

  async function signInGoogle() {
    try {
      await auth.signInWithPopup(provider).then((result) => {
        dispatch({
          type: "SET_USER",
          payload: result.user,
        });
        if (result.user) {
          toast.success("Welcome " + result.user.displayName, {
            //renders a succes Toast on succesfull API call
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      });
    } catch (error) {
      alert(error);
    }
  }

  async function signIn(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password).then((result) => {
        dispatch({
          type: "SET_USER",
          payload: result.user,
        });
        if (result.user) {
          toast.success("Welcome " + result.user.displayName, {
            //renders a succes Toast on succesfull API call
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      });
    } catch (error) {
      alert(error);
    }
  }
  async function signUpEmailPwd({ fname, lname, email, password }) {
    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          if (userCredential.user) {
            userCredential.user
              .updateProfile({
                displayName: fname + " " + lname,
              })
              .then(() => {
                dispatch({
                  type: "SIGN_UP_EMAIL_PWD",
                  payload: userCredential.user,
                });
                if (userCredential.user) {
                  toast.success(
                    "Your account has been succesfully created. Welcome",
                    {
                      //renders a succes Toast on succesfull API call
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                }
              });
          }
        });
    } catch (error) {
      alert(error);
    }
  }

  async function logOut() {
    try {
      await auth.signOut();
      dispatch({ type: "SIGN_OUT" });
      toast.success("You have succesfully signed out.", {
        //renders a succes Toast on succesfull API call
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      alert(error);
    }
  }

  async function searchStocks(stockInput) {
    toast.dark("Searching for stocks...", {
      //renders a succes Toast on succesfull API call
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    try {
      const res = await axios({
        url: `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockInput}&apikey=CGHS440S984MDUP5`,
        method: "get",
      });
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: "STOCK_SEARCH",
          payload: res.data.bestMatches,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getStockInfo(event) {
    toast.dark("Fetching stock information...", {
      //renders a succes Toast on succesfull API call
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    try {
      const res = await axios({
        url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${event}&apikey=${process.env.REACT_APP_API_KEY}`,
        method: "get",
      });
      if (res.status === 200) {
        dispatch({
          type: "GET_STOCK_INFO",
          payload: res.data,
        });
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StateContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        currentUser: state.currentUser,
        registration: state.registration,
        searchResult: state.searchResult,
        stockInfo: state.stockInfo,
        signIn,
        signInGoogle,
        logOut,
        signUpEmailPwd,
        searchStocks,
        getStockInfo,

        //        loadUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
