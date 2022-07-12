import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header className="header">
            <div>
                <h1>Bex Backyard</h1>
            </div>
            <span>
                <Link to="/bex-backyard"><p>Home</p></Link>
                <Link to="/bex-backyard/Shop"><p>Shop</p></Link>
                <Link to="/bex-backyard/Contact"><p>Contact</p></Link>
            </span>
            <div id="hamburger-container">
                <img id="hamburger-icon" src="https://nceptior.sirv.com/compatibilityfriend/hamburger-svg-black.svg" alt="hamburger" />
                <ul id="hamburger-links">
                    <li><Link to="/bex-backyard"><p>Home</p></Link></li>
                    <li><Link to="/bex-backyard/Shop"><p>Shop</p></Link></li>
                    <li><Link to="/bex-backyard/Contact"><p>Contact</p></Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}