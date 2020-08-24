import React from "react";
import "./password.css";

function Password(props) {
  let temp = `enter ${props.heading}`;
  let type = "password";
  return (
    <div className="Passwordclass">
      <div className="Inner_Box3">
        <h5 className="Passwordtitle">{props.heading}</h5>
        <input
          onChange={props.onchange}
          className="Passwordinput"
          placeholder={temp}
          name={props.heading}
          type={type}
        ></input>
      </div>
    </div>
  );
}

export default Password;
