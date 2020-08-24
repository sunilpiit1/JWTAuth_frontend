import React from "react";
import "./email.css";

function Email(props) {
  let temp = `enter ${props.heading}`;
  let type = "email";
  return (
    <div className="Emailclass">
      <div className="Inner_Box1">
        <h5 className="Emailtitle">{props.heading}</h5>
        <input
          onChange={props.onchange}
          className="Emailinput"
          placeholder={temp}
          name={props.heading}
          type={type}
        ></input>
      </div>
    </div>
  );
}

export default Email;
