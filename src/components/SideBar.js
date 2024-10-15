import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <Link to="/">Weather</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
