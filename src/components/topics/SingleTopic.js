import React from "react";
import "./SingleTopic.css";

function SingleTopic(props) {
  const onClickHandler = () => {
    window.location = `/allarticles/${props.id}`;
  };

  const addArticle = () => {
    window.location = `article/${props.id}/create`;
  };

  return (
    <div className="singletopic">
      <h2 className="name">{props.topicname}</h2>

      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="topicimage"
      ></div>
      <div className="buttons">
        <button className="btn btn-primary primary" onClick={onClickHandler}>
          All Articles
        </button>
        <button className="btn btn-warning" onClick={addArticle}>
          Create Article
        </button>
      </div>
      <h6 className="last">Topic id : {props.id}</h6>
      <h5 className="last">Created by</h5>
    </div>
  );
}

export default SingleTopic;
