import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Signup from "./components/SignUp/signup";
import Login from "./components/login/login.component";
import Home from "./components/home/home.component";
import Topic from "./components/topics/topic";
import Create from "./components/createTopic/create.component";
import AllArticles from "./components/AllArticles/AllArticles";
import AddArticle from "./components/createArticle/create.component";
import Article from "./components/Article/Article";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="upper">
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/topics" exact component={Topic}></Route>
          <Route path="/create" exact component={Create}></Route>
          <Route
            path="/allarticles/:topic_id"
            exact
            component={AllArticles}
          ></Route>
          <Route
            path="/article/:topic_id/create"
            component={AddArticle}
            exact
          ></Route>
          <Route path="/article/:article_id" component={Article} exact></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;

/*

          <Route path="/blog/:id/edit" exact component={Edit}></Route>
          
          */
