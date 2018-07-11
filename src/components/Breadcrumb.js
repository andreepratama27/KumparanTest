import React from "react";

const Breadcrumb = ({ lastLink }) => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">{lastLink}</a>
      </li>
    </ul>
  </nav>
);

export default Breadcrumb;
