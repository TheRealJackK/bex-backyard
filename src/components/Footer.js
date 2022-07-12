import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <footer className="footer">
            <span>
                <h2>Bex Backyard</h2>
                <img src="" alt="logo" />
                <h2>https://bexbackyard.com.au</h2>
            </span>
            <div></div>
            <span>
                <Link to="/bex-backyard"><p>Home</p></Link>
                <Link to="/bex-backyard/Shop"><p>Shop</p></Link>
                <Link to="/bex-backyard/Contact"><p>Contact</p></Link>
            </span>
            <div></div>
            <span>
                <h2>Developed by Casa de EZZ</h2>
                <img src="" alt="https://www.casa-de-ezz.com"/>
                <h2>https://casa-de-ezz.com</h2>
            </span>
        </footer>
        </>
    )
}