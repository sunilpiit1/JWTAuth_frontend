import React, { Component } from "react";
import axios from "axios";
import "./Article.css";

export default class blog extends Component {
  state = {
    user_id: null,
    id: null,
    title: "Loading ...",
    url: "",
    content: "",
    views: 0,
  };

  componentDidMount() {
    const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };

    let temp =
      "https://authentification-system.herokuapp.com" +
      window.location.pathname;
    axios
      .get(temp, config)
      .then((blog) => {
        const data = blog.data[0];
        console.log(data);
        this.setState({
          id: data.article_id,
          title: data.title,
          url: data.image,
          content: data.content,
          views: data.views,
          user_id: data.user_id,
        });
      })
      .catch((err) => console.log("sunil you failed!!"));
  }

  Bottompart = () => {
    if (parseInt(localStorage.getItem("user")) === this.state.user_id) {
      return (
        <div className="blogSummary">
          {this.state.content}
          <button className="btn btn-danger position1">Delete</button>

          <button className="btn btn-warning position2"> Update</button>
        </div>
      );
    } else {
      return <div className="blogSummary">{this.state.content}</div>;
    }
  };

  render() {
    window.scrollTo(0, 0);

    return (
      <div className="outerBoxBlog">
        <div className="innerBoxBlog">
          <div className="blogHeading">{this.state.title}</div>
          <img
            alt="loading .."
            className="blogImage"
            src={this.state.url}
          ></img>
          {this.Bottompart()}
          <div className="articleviews">Views : {this.state.views}</div>
        </div>
      </div>
    );
  }
}
