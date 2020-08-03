import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import Footer from "./Footer";
const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.6",
  },
});
const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: false,
                value_area: 900,
              },
            },
            shape: {
              type: ["triangle", "spiral"],
              custom: {
                spiral: {
                  innerRadius: 100,
                  lineSpacing: 100,
                  fill: true,
                  close: false,
                },
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 8,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                opacity_min: 0.1,
                sycn: true,
              },
            },
          },
        }}
      />

      <Footer />
    </div>
  );
};

export default Home;
