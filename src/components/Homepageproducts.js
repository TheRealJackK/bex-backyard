import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios"

export default function Homepageproducts() {

    const [Loading, setLoading] = useState(false)
    const [Item, setItem] = useState([])

    useEffect(() => {
        setLoading(true)
        Axios.get('https://fakestoreapi.com/products?limit=3')
        .then((response) => {
            setItem(response.data)
            setLoading(false)
        })
    }, []) 

    if(Loading === true) {
        return(
            <>
            <div className="lds-heart"><div></div></div>
            </>
        )
    } else {
        return (
            <>
            {Item.map(item => (
                <div className="card" key={item.id}>
                    <img src={item.image} alt="product" />
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <p>{item.description}</p>
                </div> 
            ))}
            </>
        )
    }
}