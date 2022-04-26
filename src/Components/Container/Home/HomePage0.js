import React from "react";
import { Link } from "react-router-dom";

function HomePage0() {
  return (
    <main>
      <div className="flexhome">
        <div className="starthome">
          <div className="homephoto">Hello</div>
          <div className="hometext">
            <Link to="/">Portfolio</Link>
          </div>
        </div>
        <div className="portfolio"></div>
      </div>
    </main>
  );
}
export default HomePage0;
