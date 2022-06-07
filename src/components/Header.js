import React from "react";
import { Link } from "react-router-dom";
import EbayLogo from "../images/ebay.svg";
import InstaLogo from "../images/instagram.svg";

export default function Header() {
    return (
        <>
        <header className="header">
            <span>
                <h1>Bex Backyard</h1>
            </span>
            <span>
                <Link to="/bex-backyard"><p>Home</p></Link>
                <Link to="/Shop"><p>Shop</p></Link>
                <Link to="/About"><p>About</p></Link>
                <Link to="/Contact"><p>Contact</p></Link>
            </span>
        </header>
        </>
    )
}