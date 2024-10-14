import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faNewspaper, faCloud, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
  return (
    <div className="side-bar">

          <div className = "search-bar">
              <input className="input-location" type="text" placeholder ="Enter City" >
          
              </input>
              <button>
                <FontAwesomeIcon icon ={faMagnifyingGlass}/>
              </button>
          </div>
    
      <ul>
      
        <li>
      
          <Link to="/">Weather <FontAwesomeIcon icon={faCloud}/>
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
