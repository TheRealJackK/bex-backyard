import React from "react";
import { Link } from "react-router-dom";

export default function About() {

    return (
        <>
        <div className="page">
            <h1>About</h1>
            <span>
                <h2>What is Bex Backyard?</h2>
                <p>Paragraph about bex backyard... 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                    <img className="about-image" src="https://picsum.photos/400/250" alt="about" />
                </div>
            </span>
            <span>
                <h2>Website Development Services Provided By</h2>
                <img id="cdelogo" src="https://nceptior.sirv.com/cde-logo-svg.svg" alt="casa-de-ezz logo" />
                <Link to={{pathname: "https://www.casa-de-ezz.com"}} target="_blank"><h2>www.casa-de-ezz.com</h2></Link>
                <Link to={{pathname: "https://github.com/TheRealJackK"}} target="_blank"><h3>github.com/TheRealJackK</h3></Link>
            </span>
        </div>
        </>
    )
}