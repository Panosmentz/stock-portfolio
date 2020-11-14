import React, { useState, useContext } from "react";
import { Container, CssBaseline, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { StateContext } from "../Context/StateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Dashboard() {
  const classes = useStyles();
  const { search } = useContext(StateContext);
  const [formData, setFormData] = useState({ searchInput: "" });
  const { searchInput } = formData;

  const onChange = (e) => {
    setFormData({ searchInput: e.target.value });
    console.log(formData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(searchInput);
    search(searchInput); //API call
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.root}>
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
            value={searchInput}
            variant="filled"
            onChange={(e) => onChange(e)}
          />
        </form>
      </div>
    </Container>
  );
}

export default Dashboard;
