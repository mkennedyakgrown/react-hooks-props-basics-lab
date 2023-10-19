import React from "react";
import Links from "./Links.js";

function About(props) {
  function IsBio(bio) {
    {if (bio == null || props.bio == "") {
      return false;
    } else {
      return true;
    }}
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {IsBio(props.bio) ? <p>{props.bio}</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
