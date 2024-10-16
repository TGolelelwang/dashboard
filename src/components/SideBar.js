import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faNewspaper} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <Link to="/">Weather <FontAwesomeIcon icon={faCloud} />
          </Link>
        </li>
        <li>
          <Link to="/news">News <FontAwesomeIcon icon={faNewspaper} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
