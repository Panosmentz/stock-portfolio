import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../assets/bg.jpg";
import { Button, Collapse, CssBaseline, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  container: {
    textAlign: "center",
  },
  title: {
    marginTop: "120px",
    color: "#fff",
    fontSize: "3.8rem",
  },
  colorText: {
    color: "#143e55",
  },
  button: {
    width: "150px",
    color: "#fff",
    backgroundColor: "#143e55",
    "&:hover": {
      backgroundColor: "#97abb6",
    },
  },
}));

function LandingPage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  let history = useHistory();

  useEffect(() => {
    setChecked(true);
  }, []);

  const onClickGetStarted = () => {
    history.push("/signin");
  };

  return (
    <Grid className={classes.root}>
      <CssBaseline />

      <Grid item className={classes.container}>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 3000 } : {})}
          collapsedHeight={50}
        >
          <h1 className={classes.title}>
            Welcome to <br />
            your <span className={classes.colorText}>Stock Portfolio</span>
          </h1>
        </Collapse>
        <Button className={classes.button} onClick={onClickGetStarted}>
          Get Started
        </Button>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
