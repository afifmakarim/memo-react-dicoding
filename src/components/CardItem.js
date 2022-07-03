import React from "react";
import CardItemBody from "./CardItemBody";

export default function CardItem({
  title,
  body,
  createdAt,
  archived,
  onDelete,
  id,
  onArchived,
}) {
  return (
    <div className="card-item">
      <CardItemBody
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        id={id}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    </div>
  );
}
