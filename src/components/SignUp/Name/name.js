import React from "react";
import "./name.css";

function Name(props) {
  let temp = `enter ${props.heading}`;
  let type = "text";
  return (
    <div className="Nameclass">
      <div className="Inner_Box">
        <h5 className="Nametitle">{props.heading}</h5>
        <input
          onChange={props.onchange}
          className="Nameinput"
          placeholder={temp}
          name={props.heading}
          type={type}
        ></input>
      </div>
    </div>
  );
}

export default Name;
