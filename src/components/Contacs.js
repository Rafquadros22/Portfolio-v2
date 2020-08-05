import React from "react";
import { makeStyles, } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      " & fieldset": {
        borderColor: "tomato",
      },
      "&:hover fieldset": {
        borderColor: "tomato",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tomato",
      },
    },
  },
})(TextField);

const Contacs = () => {
  const classes = useStyles();
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            hire or contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "White" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "White" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company Name"
            variant="outlined"
            inputProps={{ style: { color: "White" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "White" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacs;
