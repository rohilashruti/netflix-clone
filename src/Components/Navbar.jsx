import React, { useState } from 'react'
import "./Navbar.css";

export const Navbar = ({onSearch}) => {
  const[query, setQuery] = useState("");

  const handleSearch = (e) => {
     const value = e.target.value;
     setQuery(value);
     onSearch(value);
  }
  return (
    <nav className='navbar'>
        <div className="navbar-left">
       <h1 className="logo">
  <img
    src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
    alt="Netflix Logo"
    width={230}
    height={150}
  />
</h1>

      </div>
         <div className="navbar-right">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value = {query}
          onChange={handleSearch}
        />
      </div>
    </nav>
  )
}
