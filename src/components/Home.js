import React from "react";
import {Link} from "react-router-dom"
import Map from "./Map";
import Logo from "../images/logo.png";
import AuspostLogo from "../images/auspostlogo.png"
import Homepageproducts from "./Homepageproducts";

export default function Home() {
    return (
        <>
        <div className="page">
            <h1>Home</h1>
            <img src={Logo} id="logo" alt="logo" />
            <span>
                <h2>Welcome to Bex Backyard</h2>
                <p>Terrariums Made with Love</p>
            </span>
            <span className="map-container">
                <div>   
                    <h2>Free Delivery Sydney Wide!</h2>
                    <p>For deliveries outside of Sydney please <Link to="/bex-backyard/Contact">contact</Link> us.</p>
                    <img src={AuspostLogo} alt="delivery" />
                </div>
                <Map />
            </span>
            <h2>Featured Works</h2>
            <div className="card-group">
                <Homepageproducts />
            </div>
            <span>
                <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                </p>
            </span>
        </div>
        </>
    )
}