import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Redirect, Link } from "react-router-dom";
import { StateContext } from "../Context/StateContext";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#143e55",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#143e55",
    "&:hover": {
      backgroundColor: "#97abb6",
    },
  },
  google: {
    marginTop: theme.spacing(3),
  },
  textfield: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#143e55",
    },

    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#143e55",
    },
  },
}));

export default function SignIn() {
  const { signIn, signInGoogle } = useContext(StateContext);
  const classes = useStyles();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  const onSubmitGoogle = async (e) => {
    e.preventDefault();
    signInGoogle();
  };

  const isAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (isAuth === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => onChange(e)}
          />
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => onChange(e)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Button component={Link} to="/" color="primary">
              Forgot Password?
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/signup" color="primary">
              Don't have an account? Sign Up
            </Button>
          </Grid>
        </Grid>
      </div>
      <Typography
        className={classes.google}
        component="h1"
        variant="h5"
        align="center"
      >
        or
      </Typography>
      <Grid container>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmitGoogle}
          startIcon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              width="40px"
              height="40px"
            ></img>
          }
        >
          Sign In with Google
        </Button>
      </Grid>
    </Container>
  );
}
