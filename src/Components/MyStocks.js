import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  TableCell,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../config/firebase";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15),
  },
}));

function MyStocks() {
  const [favorites, setFavorites] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    db.collection("Favorites")
      .doc("favoriteStock")
      .collection("name")
      .onSnapshot((snapshot) =>
        setFavorites(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const onClickUnfollow = (event) => {
    console.log(event);
  };

  console.log(favorites);
  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Stock</TableCell>
              <TableCell> Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorites.map((favorite) => (
              <TableRow key={favorite.name}>
                <TableCell>{favorite.name}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => onClickUnfollow(favorite.name)}>
                    UNFOLLOW
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyStocks;
