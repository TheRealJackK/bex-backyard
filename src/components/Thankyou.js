import React from "react";
import { Link } from "react-router-dom"

export default function Thankyou() {
    return (
        <>
        <span className="page">
            <h1>Thank You!</h1>
            <span>
                <h2>Thank you for sending us a message!</h2>
                <p>Someone from the team will get back to you shortly. In the meantime check out our other products below!</p>
                <Link to="/Shop"><h3>Check out the shop here!</h3></Link>
            </span>
        </span>
        </>
    )
}