import React, { useState, useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link, useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { StateContext } from "../Context/StateContext";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "#143e55",
  },
  appBarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  title: {
    flexGrow: 1,
    color: "#97abb6",
    fontSize: "1.5rem",
  },
  navList: {
    padding: "0",
    display: "flex",
    color: "#97abb6",
  },
  navItems: {
    color: "#97abb6",
    width: "130px",
  },
  listItemText: {
    fontSize: "1.2rem",
    textAlign: "center",
  },

  paper: {
    background: "#143e55",
    color: "#fff",
    width: "100%",
    height: "50%",
  },
}));

function Navbar() {
  const { isAuthenticated, logOut } = useContext(StateContext);
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const itemsListUnauthenticated = [
    {
      text: "Home",
      onClick: () => history.push("/"),
    },
    {
      text: "Sign In",
      onClick: () => history.push("/signin"),
    },
    {
      text: "Sign Up",
      onClick: () => {
        history.push("/signup");
      },
    },
  ];

  const itemsListAuthenticated = [
    {
      text: "Home",
      onClick: () => history.push("/"),
    },
    {
      text: "Dashboard",
      onClick: () => history.push("/dashboard"),
    },
    {
      text: "My Stocks",
      onClick: () => history.push("/mystocks"),
    },
    {
      text: "Log Out",
      onClick: () => {
        logOut();
        history.push("/");
      },
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <Typography variant="h6" className={classes.title} display="inline">
            Stock Portfolio
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={"left"}
                open={state}
                classes={{ paper: classes.paper }}
                onClose={toggleDrawer(false)}
              >
                <div onClick={toggleDrawer(false)}>
                  {isAuthenticated ? (
                    <List>
                      {itemsListAuthenticated.map((item, index) => {
                        const { text, onClick } = item;
                        return (
                          <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary={text} align="center" />
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : (
                    <List>
                      {itemsListUnauthenticated.map((item, index) => {
                        const { text, onClick } = item;
                        return (
                          <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary={text} align="center" />
                          </ListItem>
                        );
                      })}
                    </List>
                  )}
                </div>
              </Drawer>
            </>
          ) : (
            <>
              {isAuthenticated ? (
                <List className={classes.navList}>
                  {itemsListAuthenticated.map((item, index) => {
                    const { text, onClick } = item;
                    return (
                      <ListItem
                        button
                        key={text}
                        onClick={onClick}
                        className={classes.navItems}
                      >
                        <ListItemText
                          classes={{ primary: classes.listItemText }}
                          primary={text}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <List className={classes.navList}>
                  {itemsListUnauthenticated.map((item, index) => {
                    const { text, onClick } = item;
                    return (
                      <ListItem
                        button
                        key={text}
                        onClick={onClick}
                        className={classes.navItems}
                      >
                        <ListItemText
                          classes={{ primary: classes.listItemText }}
                          primary={text}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
