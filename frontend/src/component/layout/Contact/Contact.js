import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:custom_store@gmail.com">
        <Button>Contact: custom_store@gmail.com</Button><br />
        <Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Call us at 9456238914</Button>   
      </a>
      </div>
  );
};

export default Contact;
