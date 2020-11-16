import React from "react";
import "./booklist.css";

export default function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}
