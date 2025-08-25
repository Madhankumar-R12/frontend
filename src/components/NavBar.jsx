import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">💸 Payment Splitter</h2>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/add">Add Expense</Link></li>
        <li><Link to="/expenses">All Expenses</Link></li>
        <li><Link to="/">Logout</Link></li>
        
      </ul>
    </nav>
  );
}

export default NavBar;
