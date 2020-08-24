import React from "react";
import "./SingleArticle.css";

function SingleArticle(props) {
  let link = `/article/${props.id}`;
  return (
    <div className="singlearticle">
      <h2 style={{ textDecoration: "underline", marginBottom: "15px" }}>
        {props.title}
      </h2>

      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="topicimage articleimage"
      ></div>
      <div className="moreinfo">
        <div className="details">
          <h5 className="styleHeading">Created by :</h5>

          <h6 className="styleHeading">Is featured : {props.isFeatured}</h6>
        </div>
        <a className="readmore1" href={link}>
          Read More ....
        </a>
      </div>
    </div>
  );
}

export default SingleArticle;
