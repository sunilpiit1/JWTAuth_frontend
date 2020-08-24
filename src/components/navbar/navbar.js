import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  state = {
    login: 0,
  };
  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      this.setState({ login: 1 });
    }
  }

  logOut = () => {
    localStorage.clear();
    this.setState({ login: 0 });
    window.location = "/login";
  };

  InOut = () => {
    if (this.state.login) {
      return (
        <div onClick={this.logOut} className="login">
          Log out
        </div>
      );
    } else {
      return (
        <Link to="/login" className="login">
          Log in
        </Link>
      );
    }
  };

  render() {
    return (
      <div id="navbar" className="navbarBox" name="navbar">
        <div className="bar"></div>
        <div className="menuitems">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/topics" className="blogs">
            Topics
          </Link>
          <Link to="/create" className="add">
            Add_Topic
          </Link>
          <div className="freespace"></div>
          <Link to="/signup" style={{ animationDelay: "0s" }} className="login">
            SignUp
          </Link>

          {this.InOut()}
        </div>
      </div>
    );
  }
}

//rfc and rcc can be used as a shortcut for component layout directly c for class based and f for function based
