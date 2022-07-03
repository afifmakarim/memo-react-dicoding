import React from "react";
import CardItem from "./CardItem";

export default function CardList({ notes, onDelete, onArchived }) {
  const archivedList = notes.filter((item) => item.archived === true);
  const nonArchivedList = notes.filter((item) => item.archived === false);

  return (
    <>
      <h1 className="title wrap">Notes</h1>
      <div className="card-list">
        {nonArchivedList.length > 0 ? (
          nonArchivedList.map((item) => (
            <CardItem
              key={item.id}
              id={notes.id}
              onDelete={onDelete}
              {...item}
              onArchived={onArchived}
            />
          ))
        ) : (
          <p>No Content Provide</p>
        )}
      </div>
      <h1 className="wrap">Archived Notes</h1>
      <div className="card-list">
        {archivedList.length > 0 ? (
          archivedList.map((item) => (
            <CardItem
              key={item.id}
              id={notes.id}
              onDelete={onDelete}
              {...item}
              onArchived={onArchived}
            />
          ))
        ) : (
          <p>No Content Provide</p>
        )}
      </div>
    </>
  );
}
