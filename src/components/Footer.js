import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <footer className="footer">
            <span>
                <h1>Bex Backyard</h1>
                <img src="https://nceptior.sirv.com/bexbackyard.com.au/logo192.png" alt ="Placeholder" />
                <img src="https://nceptior.sirv.com/bexbackyard/instagram.svg" alt="Placeholder" />
            </span>
            <span>
                <Link to="/bex-backyard"><p>Home</p></Link>
                <Link to="/bex-backyard/Shop"><p>Shop</p></Link>
                <Link to="/bex-backyard/About"><p>About</p></Link>
                <Link to="/bex-backyard/Contact"><p>Contact</p></Link>
            </span>
            <span>
                <h2>Developed by Casa de EZZ</h2>
                <img src="https://nceptior.sirv.com/cde-logo-svg.svg" alt="https://www.casa-de-ezz.com"/>
            </span>
        </footer>
        </>
    )
}