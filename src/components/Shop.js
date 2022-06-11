import React from "react";
import Shopproducts from "./Shopproducts";

export default function Shop() {
       
    return (
        <>
        <div className="page">
            <h1>Shop</h1>
            <span>
                <h2>See our selection here and on Etsy!</h2>
            </span>
            <div className="card-group">
                <Shopproducts />
            </div>
        </div>
        </>
    )
}