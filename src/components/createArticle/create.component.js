import React, { Component } from "react";
import InputBox from "./inputBox";
import "./create.component.css";

export class create extends Component {
  state = {
    title: "",
    imageURL: "",
    content: "",
    isFeatured: 0,
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    const article = {
      title: this.state.title,
      imageURL: this.state.imageURL,
      content: this.state.content,
      isFeatured: this.state.isFeatured,
    };
    console.log(article);

    fetch(
      `https://authentification-system.herokuapp.com${window.location.pathname}`,
      {
        method: "POST",

        body: JSON.stringify(article),

        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        console.log(res);
        window.location = "/topics";
      })
      .catch((err) => console.log(err));
  };

  nameChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  imageChange = (event) => {
    this.setState({
      imageURL: event.target.value,
    });
  };

  contentChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  checkboxHandler = () => {
    let temp = this.state.isFeatured ? 0 : 1;
    console.log(temp);
    this.setState({
      isFeatured: temp,
    });
  };

  CreateComp = () => {
    return (
      <form className="form2" onSubmit={this.onSubmitHandler}>
        <h1>ADD NEW ARTICLE !</h1>
        <InputBox
          onchange={this.nameChange}
          name="Title Name"
          placeholder="Enter Title Here .."
        />
        <InputBox
          onchange={this.imageChange}
          name="Image URL"
          placeholder="Paste url Here .."
        />
        <div className="summary">
          <div className="summaryStyle"> Content</div>
          <textarea
            name="content"
            onChange={this.contentChange}
            className="textarea"
            placeholder="Content goes here .."
          ></textarea>
        </div>
        <div className="isfeatureddiv">
          <input type="checkBox" onChange={this.checkboxHandler}></input>
          <div className="isFeatured">Is Featured</div>
        </div>

        <div className="buttondiv1">
          <button type="submit" className="btn btn-primary butTon">
            Submit
          </button>
        </div>
      </form>
    );
  };

  render() {
    return <div className="createComp">{this.CreateComp()}</div>;
  }
}

export default create;
