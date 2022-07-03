import React from "react";
import { showFormattedDate } from "../utils";

export default function CardItemBody({
  title,
  body,
  createdAt,
  archived,
  onDelete,
  id,
  onArchived,
}) {
  return (
    <div className="card-item-body">
      <span className="datetime">{showFormattedDate(createdAt)}</span>
      <h4 className="title">{title}</h4>
      <p>{body}</p>
      <p>{archived}</p>
      <div className="btn-wrapper">
        <button onClick={() => onDelete(id)} className="btn secondary">
          Delete
        </button>
        <button onClick={() => onArchived(id)} className="btn primary">
          Archive
        </button>
      </div>
    </div>
  );
}
