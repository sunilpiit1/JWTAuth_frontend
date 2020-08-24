import React, { Component } from "react";
import InputBox from "./inputBox";
import "./create.component.css";

export class create extends Component {
  state = {
    name: "",
    image: "",
  };

  loginPage = () => {
    window.location = "/login";
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    const topic = {
      name: this.state.name,
      imageURL: this.state.image,
    };
    console.log(topic);

    fetch("https://authentification-system.herokuapp.com/topic/create", {
      method: "POST",

      body: JSON.stringify(topic),

      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        window.location = "/topics";
      })
      .catch((err) => console.log(err));
  };

  nameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  imageChange = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  CreateComp = () => {
    return (
      <form className="form1" onSubmit={this.onSubmitHandler}>
        <h1>ADD NEW Topic !</h1>
        <InputBox
          onchange={this.nameChange}
          name="Topic Name"
          placeholder="Enter Title Here .."
        />
        <InputBox
          onchange={this.imageChange}
          name="Image URL"
          placeholder="Paste url Here .."
        />

        <div className="buttondiv1">
          <button type="submit" className="btn btn-primary butTon">
            Submit
          </button>
        </div>
      </form>
    );
  };

  render() {
    return <div className="createComp">{this.CreateComp()}</div>;
  }
}

export default create;
