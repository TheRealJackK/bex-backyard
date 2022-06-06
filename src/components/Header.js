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
                <div>
                    <img src={EbayLogo} alt="Placeholder" />
                </div>
                <div>
                    <img src={InstaLogo} alt="Placeholder" />
                </div>
            </span>
            <span>
                <Link to="/"><p>Home</p></Link>
                <Link to="/Shop"><p>Shop</p></Link>
                <Link to="/About"><p>About</p></Link>
                <Link to="/Contact"><p>Contact</p></Link>
            </span>
        </header>
        </>
    )
}