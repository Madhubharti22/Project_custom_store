import React from "react";
import "./aboutSection.css";
import logo from "../../../images/Custom Store.png";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/the.craft_zone/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "15vmax", height: "15vmax", margin: "0vmax 0" }}
              src={logo}
              alt="Founder"
            />
            <Typography>Custom Store</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a wesbite made just for you to choose your personalised gift for your loved ones. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.instagram.com/the.craft_zone/"
              target="blank"
            >
              <FacebookIcon className="FacebookSvgIcon" />
            </a>

            <a href="https://www.instagram.com/the.craft_zone/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
