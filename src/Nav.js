import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/newpost">New Post</Link>
        </li>
        <li>
          <Link to="/download">Download</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
