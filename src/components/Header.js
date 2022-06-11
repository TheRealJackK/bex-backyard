import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header className="header">
            <h1>Bex Backyard</h1>
            <span>
                <Link to="/bex-backyard"><p>Home</p></Link>
                <Link to="/bex-backyard/Shop"><p>Shop</p></Link>
                <Link to="/bex-backyard/About"><p>About</p></Link>
                <Link to="/bex-backyard/Contact"><p>Contact</p></Link>
            </span>
        </header>
        </>
    )
}