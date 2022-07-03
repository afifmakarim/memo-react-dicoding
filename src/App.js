import React, { Component } from "react";
import CardList from "./components/CardList";
import Content from "./components/Content";
import Header from "./components/Header";
import { getInitialData } from "./utils";

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      chars_left: 50,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  wordCountHandler = (event) => {
    const charCount = event.target.value.length;
    const charLeft = 50 - charCount;

    this.setState({ chars_left: charLeft });
  };

  onArchivedHandler(id) {
    const targetArchived = this.state.notes.filter((item) => item.id === id);
    targetArchived[0].archived = !targetArchived[0].archived;
    console.log(targetArchived);

    this.setState((prevState) => {
      console.log(prevState);
      return {
        notes: [...prevState.notes, targetArchived],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((item) => item.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body, createdAt, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived,
          },
        ],
      };
    });
  }

  render() {
    return (
      <main className="wrapper">
        <Header />

        <Content
          addNotes={this.onAddNotesHandler}
          wordCount={this.wordCountHandler}
          charLeft={this.state.chars_left}
        />
        <CardList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchivedHandler}
        />
      </main>
    );
  }
}
