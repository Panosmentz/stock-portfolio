import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "none",
  },
  appBarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  title: {
    flexGrow: 1,
    color: "#143e55",
    fontSize: "1.5rem",
  },
  navList: {
    display: "flex",
    color: "#143e55",
  },
  navItems: {
    color: "#143e55",
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
    height: "100%",
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/"),
    },
    {
      text: "Sign In",
      onClick: () => history.push("/"),
    },
    {
      text: "Sign Up",
      onClick: () => {
        history.push("/");
      },
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <Typography variant="h6" className={classes.title}>
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
                  <List>
                    {itemsList.map((item, index) => {
                      const { text, onClick } = item;
                      return (
                        <ListItem button key={text} onClick={onClick}>
                          <ListItemText primary={text} align="center" />
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
              </Drawer>
            </>
          ) : (
            <List className={classes.navList}>
              {itemsList.map((item, index) => {
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
