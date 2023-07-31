import React from 'react';
import "./styles.css"
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="logo">
        <a href="#"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Vanamo_Logo.png/240px-Vanamo_Logo.png" alt="Logo"/></a>
      </div>
      <div className="search">
        <input type="text" placeholder="Search"/>
        <button type="submit">Search</button>
      </div>
      <div className="signin">
        <a href="#" >Sign In</a> </div>
        <div className="cart">  <a href="#">Cart </a></div>
     
    </header>
  );
}

export default Header;