import React from "react";
import "./bookListItem.css";

export default function BookListItem({
  id,
  title,
  authors,
  description,
  thumbnail,
  infoLink,
  clickEvent,
  saved,
}) {
  console.log("This is saved " + saved);
  return (
    <li className="list-group-item m-2">
      <div className="float-right">
        {!saved ? (
          <button
            className="btn btn-success"
            onClick={(event) =>
              clickEvent(
                event,
                id,
                title,
                authors,
                description,
                infoLink,
                thumbnail
              )
            }
          >
            Save
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={(event) => clickEvent(event, id)}
          >
            Unsave
          </button>
        )}
        <a
          className="btn btn-primary ml-2 mr-2"
          href={infoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>

      <h4 className="title">{title}</h4>
      <h5>
        by{" "}
        {authors.length > 1
          ? authors.reduce((prev, curr) => [prev, ", ", curr])
          : authors[0]}
      </h5>
      <div className="row">
        <div className="col-sm-12 col-md-auto text-center">
          <img src={thumbnail} alt={title} className="mt-1 mb-2" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          {!saved ? (
            <button
              className="btn btn-success btn-block"
              onClick={(event) =>
                clickEvent(
                  event,
                  id,
                  title,
                  authors,
                  description,
                  infoLink,
                  thumbnail
                )
              }
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-danger btn-block"
              onClick={(event) => clickEvent(event, id)}
            >
              Unsave
            </button>
          )}
        </div>
        <div className="col">
          <a
            className="btn btn-primary btn-block"
            href={infoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>

      {saved && <div className="row"></div>}
    </li>
  );
}
