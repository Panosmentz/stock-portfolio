import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  CssBaseline,
  IconButton,
  TableCell,
  TextField,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Button,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { StateContext } from "../Context/StateContext";
import db from "../config/firebase";
import { auth } from "../config/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(6),
  },
  searchbar: {
    minWidth: "400px",
    marginTop: theme.spacing(6),
  },
  table: {
    flexGrow: 1,
    maxWidth: "950px",
    justifyContent: "center",
  },
  followContainer: {
    padding: "20px",
  },
  button: {
    marginTop: "20px",
    width: "150px",
    color: "#fff",
    backgroundColor: "#143e55",
    "&:hover": {
      backgroundColor: "#0599a3",
    },
  },
}));

function Dashboard() {
  const classes = useStyles();
  const { searchStocks, searchResult, getStockInfo, stockInfo } = useContext(
    StateContext
  );
  const [formData, setFormData] = useState({ searchInput: "" });
  const [searchEntered, setSearchEntered] = useState(false);
  const [rowClicked, setRowClicked] = useState(false);
  const { searchInput } = formData;

  const onChange = (e) => {
    setFormData({ searchInput: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    searchStocks(searchInput); //API call
    setSearchEntered(true);
  };

  //////////////////////       stockInfo["Meta Data"]["2. Symbol"]

  const stockSearchColumns = [
    { id: "symbol", label: "Symbol" },
    { id: "company", label: "Company" },
    {
      id: "type",
      label: "Type",
    },
    {
      id: "region",
      label: "Region",
    },
    {
      id: "marketOpen",
      label: "Market Open",
    },
    {
      id: "marketClose",
      label: "Market Close",
    },
    {
      id: "timezone",
      label: "Timezone",
    },
    {
      id: "currency",
      label: "Currency",
    },
  ];

  const stockInfoColumns = [
    { id: "date", label: "Date" },
    { id: "open", label: "Open" },
    { id: "high", label: "High" },
    {
      id: "low",
      label: "Low",
    },
    {
      id: "close",
      label: "Close",
    },
    {
      id: "volume",
      label: "Volume",
    },
  ];
  const stockSearchRows = [];
  const stockInfoRows = [];

  const handleFavorite = () => {
    console.log(
      "from Handle favorite function",
      stockInfo["Meta Data"]["2. Symbol"]
    );
    db.collection("Favorites").doc("favoriteStock").collection("name").add({
      name: stockInfo["Meta Data"]["2. Symbol"],
      user: auth.currentUser.displayName,
    });
  };

  const handleRowClick = (event) => {
    getStockInfo(event);
    setRowClicked(true);
  };
  if (searchEntered && searchResult != null) {
    for (let i = 0; i < searchResult.length; i++) {
      stockSearchRows.push({
        symbol: searchResult[i]["1. symbol"],
        company: searchResult[i]["2. name"],
        type: searchResult[i]["3. type"],
        region: searchResult[i]["4. region"],
        marketOpen: searchResult[i]["5. marketOpen"],
        marketClose: searchResult[i]["6. marketClose"],
        timezone: searchResult[i]["7. timezone"],
        currency: searchResult[i]["8. currency"],
      });
    }
    if (rowClicked === true && stockInfo != null) {
      let tempDataStore = [];
      let tSeries = stockInfo["Time Series (Daily)"];
      //  stockSymbol = stockInfo["Meta Data"];
      //  console.log(metaData["2. Symbol"]);
      for (let tempData in tSeries) {
        tempDataStore.push({
          date: tempData,
          open: tSeries[tempData]["1. open"],
          high: tSeries[tempData]["2. high"],
          low: tSeries[tempData]["3. low"],
          close: tSeries[tempData]["4. close"],
          volume: tSeries[tempData]["5. volume"],
        });
      }

      for (let i = 0; i < 10; i++) {
        stockInfoRows.push({
          date: tempDataStore[i].date,
          open: tempDataStore[i].open,
          high: tempDataStore[i].high,
          low: tempDataStore[i].low,
          close: tempDataStore[i].close,
          volume: tempDataStore[i].volume,
        });
      }
    }

    return (
      <div>
        <CssBaseline />
        <Grid container justify="center" className={classes.root}>
          <Grid item className={classes.searchbar}>
            <form onSubmit={onSubmit}>
              <TextField
                id="filled-full-width"
                label="Search stock"
                style={{ margin: 8 }}
                placeholder="IBM"
                helperText=""
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton aria-label="search stocks" onClick={onSubmit}>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
                value={searchInput}
                variant="filled"
                onChange={(e) => onChange(e)}
              />
            </form>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.root}>
          <Grid item className={classes.table}>
            <TableContainer component={Paper}>
              <Table
                size="small"
                align="center"
                aria-label="ticket search results"
              >
                <TableHead>
                  <TableRow>
                    {stockSearchColumns.map((column) => (
                      <TableCell align="center" key={column.id}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stockSearchRows.map((row) => {
                    return (
                      <TableRow
                        tabIndex={-1}
                        key={row.code}
                        onClick={() => handleRowClick(row.symbol)}
                        hover={true}
                      >
                        {stockSearchColumns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell align="center" key={column.id}>
                              {column.format ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        {rowClicked ? ( //display stock info
          <Grid container justify="center" className={classes.root}>
            <Grid item className={classes.table}>
              <TableContainer component={Paper} align="center">
                <Paper className={classes.followContainer}>
                  <Typography>
                    Daily Prices (open, high, low, close) and Volumes
                  </Typography>
                  <Button
                    className={classes.button}
                    onClick={handleFavorite}
                    align="center"
                    endIcon={<FavoriteBorderIcon />}
                  >
                    Follow Stock
                  </Button>
                </Paper>
                <TableContainer component={Paper} align="center">
                  <Table
                    size="small"
                    className={classes.table}
                    aria-label="stock info"
                  >
                    <TableHead>
                      <TableRow>
                        {stockInfoColumns.map((column) => (
                          <TableCell align="center" key={column.id}>
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {stockInfoRows.map((row) => {
                        return (
                          <TableRow tabIndex={-1} key={row.code}>
                            {stockInfoColumns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell align="center" key={column.id}>
                                  {column.format ? column.format(value) : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TableContainer>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <CssBaseline />
        <Grid container justify="center" className={classes.root}>
          <Grid item className={classes.searchbar}>
            <form className={classes.form} onSubmit={onSubmit}>
              <TextField
                id="filled-full-width"
                label="Search stock"
                style={{ margin: 8 }}
                placeholder="IBM"
                helperText=""
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton aria-label="search stocks" onClick={onSubmit}>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
                value={searchInput}
                variant="filled"
                onChange={(e) => onChange(e)}
              />
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
