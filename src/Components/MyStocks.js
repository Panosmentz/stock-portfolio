import {
  CssBaseline,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  TableCell,
  Button,
  Grid,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../config/firebase";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15),
    display: "flex",
  },
  table: {
    flexGrow: 1,
    justifyContent: "center",
    maxWidth: "300px",
  },
  button: {
    width: "150px",
    color: "#fff",
    backgroundColor: "#143e55",
    "&:hover": {
      backgroundColor: "#f5425d",
    },
  },
}));

function MyStocks() {
  const [favorites, setFavorites] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (auth.currentUser != null) {
      db.collection("Favorites")
        .doc("favoriteStock")
        .collection("name")
        .where("user", "==", auth.currentUser.displayName)
        .onSnapshot((snapshot) =>
          setFavorites(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, []);

  const onClickUnfollow = (event) => {
    db.collection("Favorites")
      .doc("favoriteStock")
      .collection("name")
      .where("name", "==", event)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
    toast.warning("You are no longer following " + event, {
      //renders a succes Toast on succesfull API call
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <CssBaseline />
      <Grid container justify="center" className={classes.root}>
        <Grid item className={classes.table}>
          <TableContainer component={Paper} align="center">
            <Table aria-label="favorite stocks table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Stock</TableCell>
                  <TableCell align="center"> Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favorites.map((favorite) => (
                  <TableRow key={favorite.name}>
                    <TableCell align="center">{favorite.name}</TableCell>
                    <TableCell align="center">
                      <Button
                        className={classes.button}
                        onClick={() => onClickUnfollow(favorite.name)}
                      >
                        UNFOLLOW
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyStocks;
