import React from "react";
import "./home.component.css";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className="home1">
      <h1>hello world !</h1>
      <h3>
        This is a website where you can post aticles to the related Topics !!{" "}
      </h3>
      <h5>You need to login to create articles and topics</h5>
      <button className="btn btn-primary linkbutton">
        <Link className="blogslink" to="/topics">
          see Topics
        </Link>
      </button>
    </div>
  );
}
