import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato"
  }
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato"
    },
    "& label": {
      color: "white"
    },
    "& .MuiOutlinedInput-root": {
      " & fieldset": {
        borderColor: "tomato"
      },
      "&:hover fieldset": {
        borderColor: "tomato"
      },
      "&.Mui-focused fieldset": {
        borderColor: "tomato"
      }
    }
  }
})(TextField);

const Contacs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_8FTKxc72",
        e.target,
        "user_mLboaVstbVbnAm0kZSQPp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const classes = useStyles();
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="user_name" />
          <label>Email:</label>
          <input type="email" name="user_email" />
          <label>Message:</label>
          <input name="message" />
          <input type="submit" value="Send" />
        </form>
      </Grid>
    </Box>
  );
};

export default Contacs;
