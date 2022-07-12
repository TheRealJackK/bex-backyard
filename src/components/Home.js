import React from "react";
import {Link} from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Form from "./Form";
import Map from "./Map";

export default function Home() {
    return (
        <>
        <div className="page">
            <h2>Welcome to Bex Backyard</h2>
            <span>
                {/* <img id="logo" src="https://nceptior.sirv.com/bexbackyard.com.au/logo256.png" alt="logo" /> */}
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
                    <div>
                        <img src="https://nceptior.sirv.com/bexbackyard.com.au/logo192.png" alt="carousel" />
                        <p className="legend">Hello World!</p>
                    </div>
                    <div>
                        <img src="https://nceptior.sirv.com/bexbackyard.com.au/logo192.png" alt="carousel" />
                        <p className="legend">Hello World!</p>
                    </div>
                    <div>
                        <img src="https://nceptior.sirv.com/bexbackyard.com.au/logo192.png" alt="carousel" />
                        <p className="legend">Hello World!</p>
                    </div>
                </Carousel>
            </span>
            <span className="map-container">
                <div>   
                    <h4>Free Delivery Sydney Wide!</h4>
                    <img src="https://nceptior.sirv.com/bexbackyard.com.au/auspostlogo.png" alt="delivery" />
                    <p>For deliveries outside of Sydney please <Link to="/bex-backyard/Contact">contact</Link> us.</p>
                </div>
                <Map />
            </span>
            <h4>We do Custom Orders!</h4>
            <span>
                <Form />
            </span>
            <h4>What is Bex Backyard?</h4>
            <span>
                <p></p>
            </span>
        </div>
        </>
    )
}