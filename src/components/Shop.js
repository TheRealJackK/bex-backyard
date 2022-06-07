import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Shop() {

    const [Item, setItem] = useState([])
    
    useEffect(() => {
        Axios.get('apicall')
        .then((response) => {
            console.log(response)
            setItem(response.data)
        })
    }, [])

    return (
        <>
        <div className="page">
            <h1>Shop</h1>
            <span>
                <h2>See our selection here and on Ebay!</h2>
            </span>
            <div className="card-group">
                <div className="card">
                    <img src="https://picsum.photos/250" alt="product" />
                    <h2>Product Title</h2>
                    <p>Product Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt="product" />
                    <h2>Product Title</h2>
                    <p>Product Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt="product" />
                    <h2>Product Title</h2>
                    <p>Product Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt="product" />
                    <h2>Product Title</h2>
                    <p>Product Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt="product" />
                    <h2>Product Title</h2>
                    <p>Product Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt="product" />
                    <h2>Product Title</h2>
                    <p>Product Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt="product" />
                    <h2>Product Title</h2>
                    <p>Product Description</p>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/250" alt="product" />
                    <h2>Product Title</h2>
                    <p>Product Description</p>
                </div>
            </div>
        </div>
        </>
    )
}