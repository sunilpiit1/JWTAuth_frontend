import React from "react";
import "./SingleTopic.css";
import { Link } from "react-router-dom";

function SingleTopic(props) {
  const view = `/allarticles/${props.id}`;

  const create = `article/${props.id}/create`;

  return (
    <div className="singletopic">
      <h2 className="name">{props.topicname}</h2>

      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="topicimage"
      ></div>
      <div className="buttons">
        <Link to={view}>
          {" "}
          <button className="btn btn-primary primary">All Articles</button>
        </Link>
        <Link to={create}>
          <button className="btn btn-warning">Create Article</button>
        </Link>
      </div>
      <h6 className="last">Topic id : {props.id}</h6>
      <h5 className="last">Created by</h5>
    </div>
  );
}

export default SingleTopic;
