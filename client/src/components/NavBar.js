import React from "react";
import "./navbar.css";
export default function NavBar() {
  return (
    <>
      <div className="row right">
        <div className="col searchNavCol">
          <a href="/">Search</a>
        </div>
        <div className="col bookShelfNavCol">
          <a href="/bookshelf">Bookshelf</a>
        </div>
      </div>
    </>
  );
}
