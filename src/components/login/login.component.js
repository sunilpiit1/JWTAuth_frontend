import React, { Component } from "react";
import "./login.component.css";
import InputBox from "./inputBox1";
import axios from "axios";

export class login extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      email: this.state.username,
      password: this.state.password,
    };

    axios
      .post("https://authentification-system.herokuapp.com/user/login", user)
      .then((res) => {
        console.log(res);
        if (res.data.token !== undefined) {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.user);
          window.location = "/topics";
        }
      })
      .catch((err) => console.log(err));
  };

  usernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  passwordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <div className="bigbox">
        <div className="box"></div>

        <form className="form" onSubmit={this.onSubmitHandler}>
          <h1 className="heading">login form</h1>
          <InputBox
            onchange={this.usernameChange}
            name="Email"
            placeholder="enter email"
            type="text"
          />
          <InputBox
            onchange={this.passwordChange}
            name="Password"
            placeholder="enter password"
            type="password"
          />
          <button
            onClick={this.onSubmitHandler}
            className="btn btn-primary"
            type="submit"
          >
            {" "}
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default login;
