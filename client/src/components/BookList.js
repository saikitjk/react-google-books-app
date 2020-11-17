import React from "react";

import "./booklist.css";

function bookInfo(bookURL) {
  window.open(bookURL, "_blank");
}

function BookList(props) {
  return (
    <div>
      {props.books.length === 0 ? (
        <h3 className="defaultMsg">Book list is empty</h3>
      ) : (
        <div>
          {props.books.map((book, index) => (
            <div className="row bookRow border-bottom" key={index}>
              <div className="col imgCol">
                {book.volumeInfo.imageLinks ? (
                  <a>
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                  </a>
                ) : (
                  <p>Image Not Available</p>
                )}
              </div>

              <div className="col authorCol">
                <span className="authorName">
                  By: {book.volumeInfo.authors}
                </span>
              </div>

              <br></br>
              <div className="row desRow">
                <span> {book.volumeInfo.description} </span>
              </div>
              <br></br>
              <div className="row buttonRow">
                <div className="col">
                  {props.caller === "search" ? (
                    <div className="row">
                      <div className="col">
                        <button
                          onClick={() => props.onBookSave(book, index)}
                          className="btn btn-outline-secondary"
                          type="button"
                        >
                          <span>Save Book</span>
                        </button>
                      </div>
                      <div className="col" id="checkmark"></div>
                      <div className="col" id="msgText">
                        {book.saved ? "Book Saved" : ""}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => props.onDelete(book._id)}
                      className="btn btn-outline-secondary"
                      type="button"
                    >
                      Delete
                    </button>
                  )}
                </div>
                <div className="col">
                  <button
                    onClick={(e) => bookInfo(book.volumeInfo.infoLink)}
                    className="btn btn-outline-secondary"
                    type="button"
                  >
                    Preview
                  </button>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
          )
        </div>
      )}
    </div>
  );
}

export default BookList;
