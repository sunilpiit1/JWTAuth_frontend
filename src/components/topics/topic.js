import React, { useState, useEffect } from "react";
import "./topic.css";
import axios from "axios";
import SingleTopic from "./SingleTopic";

function Topic() {
  let [getTopics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get("https://authentification-system.herokuapp.com/topic")
      .then(async (result) => {
        await setTopics(result.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const topicRendering = () => {
    if (typeof getTopics === "string") {
      return <h1>{getTopics}</h1>;
    } else {
      return getTopics.map((topic) => {
        return (
          <SingleTopic
            topicname={topic.name}
            key={topic.topic_id}
            id={topic.topic_id}
            image={topic.image}
          />
        );
      });
    }
  };

  return <div className="topic">{topicRendering()}</div>;
}

export default Topic;
