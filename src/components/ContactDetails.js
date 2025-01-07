

import React from "react";
import user from "../images/face.png";
import { Link } from "react-router-dom";

const ContactDetails = (props) => {
  
  const {name,email} =  props.location.state.contact;
  return (
  <div className="main">
    <div className="ui card centered">
<div className="image">
   <img src={face} alt="face"/>
   </div>
   <div className="content">
    <div className="header">{name}</div>
    <div className="description">{email}</div>
   </div>
   <div className=" .center-div">
    <Link to= "/">
    <button className=" ui button blue center">Back to Contact</button>
    </Link>
   </div>

    </div>
  </div>
  );
};

export default ContactDetails;


