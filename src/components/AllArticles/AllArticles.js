import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllArticles.css";
import SingleArticle from "./SingleArticle";

function AllArticles(props) {
  let [getArticles, setArticles] = useState([]);

  useEffect(() => {
    const config = {
      headers: { "auth-token": localStorage.getItem("token") },
    };

    axios
      .get(
        "https://authentification-system.herokuapp.com" +
          window.location.pathname,
        config
      )
      .then((result) => {
        if (typeof result.data !== "string") {
          setArticles(result.data);
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderArticle = () => {
    if (getArticles.length === 0) {
      return <h1>There are no articles to show related to this topic !</h1>;
    } else {
      return getArticles.map((article) => {
        return (
          <SingleArticle
            key={article.article_id}
            id={article.article_id}
            title={article.title}
            image={article.image}
            content={article.content}
            views={article.views}
            isFeatured={article.isFeatured}
          />
        );
      });
    }
  };

  return <div className="allarticles">{renderArticle()}</div>;
}

export default AllArticles;
