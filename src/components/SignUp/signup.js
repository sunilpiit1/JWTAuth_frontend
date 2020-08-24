import React, { Component } from "react";
import Name from "./Name/name";
import Email from "./Email/email";
import Password from "./password/password";
import "./signup.css";

export default class signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password1: "",
    password2: "",
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.firstname.trim() + " " + this.state.lastname.trim(),
      email: this.state.email,
      password: this.state.password1,
    };

    fetch("https://authentification-system.herokuapp.com/user/signup", {
      method: "POST",

      body: JSON.stringify(user),

      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log("user added successfully !!");
        window.location = "/login";
      })
      .catch((err) => console.log(err));
  };

  onFirstChangeHandler = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  onLastChangeHandler = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  onEmailChangeHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  onPasswordChangeHandler1 = (event) => {
    this.setState({
      password1: event.target.value,
    });
  };
  onPasswordChangeHandler2 = (event) => {
    this.setState({
      password2: event.target.value,
    });
  };

  render() {
    return (
      <div className="signupBG">
        <div className="signupbackground"></div>
        <form className="signupForm">
          <h1>Sign Up Here !</h1>
          <div className="signupnames">
            <Name onchange={this.onFirstChangeHandler} heading="Firstname" />
            <Name onchange={this.onLastChangeHandler} heading="Lastname" />
          </div>
          <Email onchange={this.onEmailChangeHandler} heading="Email" />
          <div className="signupPassword">
            <Password
              onchange={this.onPasswordChangeHandler1}
              heading="Choose password"
            />
            <Password
              heading="Confirm password"
              onchange={this.onPasswordChangeHandler2}
            />
          </div>

          <button onClick={this.onSubmitHandler} className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
