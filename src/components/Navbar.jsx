import React from "react";
import { Link } from "react-router";
import "../App.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">💰 Freelancer Earnings Tracker</div>
            <ul className="nav-links">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/earnings">All Earnings</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
