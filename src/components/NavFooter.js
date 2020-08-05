import React from "react";
import { makeStyles } from "@material-ui/styles";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidht: 250,
    },
    "& .MuiSvgIcon-root":{
        fill:"tan",
        "&:hover":{
            fill:"tomato",
            fontSize:"1.8rem"
        }

    }
  },
});
 const NavFooter = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<FacebookIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<TwitterIcon />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

 export default NavFooter