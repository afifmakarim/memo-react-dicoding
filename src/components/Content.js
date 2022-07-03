import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      createdAt: new Date(),
      archived: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.props.wordCount(event);

    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, 49),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <form className="input-notes" onSubmit={this.onSubmitEventHandler}>
        <h4 className="head-title">Write Notes</h4>
        <p>{this.props.charLeft} Characters Left</p>
        <input
          className="title"
          type="text"
          placeholder="write title here ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          className="notes"
          rows="8"
          cols="50"
          placeholder="Write your notes here ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit" className="btn-notes">
          Add
        </button>
      </form>
    );
  }
}
