import React from "react";
import Map from "./Map";
import Logo from "../images/logo.png"

export default function Home() {
    return (
        <>
        <div className="page">
            <h1>Home</h1>
            <img src={Logo} alt="logo" />
            <span>
                <h2>Welcome to Bex Backyard</h2>
                <p>Terrariums Made with Love</p>
            </span>
            <span className="map-container">
                <h2>Free Delivery Sydney Wide!</h2>
                <Map />
            </span>
            <span>
                <h2>Featured Works</h2>
            </span>
            <div className="card-group">
                <div className="card">
                    <img src="https://picsum.photos/250" alt ="img" />
                    <h2>Card Title</h2>
                    <p>Card Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt ="img" />
                    <h2>Card Title</h2>
                    <p>Card Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt ="img" />
                    <h2>Card Title</h2>
                    <p>Card Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt ="img" />
                    <h2>Card Title</h2>
                    <p>Card Description</p>
                </div>
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