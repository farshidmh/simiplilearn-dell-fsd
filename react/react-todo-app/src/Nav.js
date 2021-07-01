import React from "react";
import {NavLink} from "react-router-dom";


const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/"> Home </NavLink>
            </li>
            <li className="nav-item">

                <NavLink className="nav-link" exact to="/posts"> Posts </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/posts/new"> New Post </NavLink>
            </li>
        </ul>
        </nav>
    );

};

export default Nav;









