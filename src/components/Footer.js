import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo64.png";
import CDElogo from "../images/cde-logo-svg.svg";
import InstaLogo from "../images/instagram.svg";

export default function Footer() {
    return (
        <>
        <footer className="footer">
            <span>
                <h1>Bex Backyard</h1>
                <div>
                    <img src={Logo} alt ="Placeholder" />
                </div>
                <div>
                    <img src={InstaLogo} alt="Placeholder" />
                </div>
            </span>
            <span>
                <Link to="/bex-backyard"><p>Home</p></Link>
                <Link to="/bex-backyard/Shop"><p>Shop</p></Link>
                <Link to="/bex-backyard/About"><p>About</p></Link>
                <Link to="/bex-backyard/Contact"><p>Contact</p></Link>
            </span>
            <span>
                <h2>Developed by Casa de EZZ</h2>
                <img src={CDElogo} alt="https://www.casa-de-ezz.com"/>
            </span>
        </footer>
        </>
    )
}