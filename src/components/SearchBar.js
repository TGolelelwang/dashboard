import React from 'react'
function SearchBar() {
  return (
    <div className = "search-bar">
        <input className="input-location" type="text" placeholder ="Enter City" >

        </input>
        <button>
          <FontAwesomeIcon icon ={faMagnifyingGlass}/>
        </button>
    </div>
    );
  }
  
  export default SearchBar;