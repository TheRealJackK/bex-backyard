import React from "react";
import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api";

const center = {lat: -33.8688, lng: 151.2093}

export default function Map() {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    if(!isLoaded) {
        return(
            <>
            <div id="map-spinner" class="lds-heart"><div></div></div>
            </>
        )
    }

    return (
        <>
        <GoogleMap 
            center={center} 
            zoom={10}
            mapContainerClassName="map-box"
            >
            <Marker position={center} />
        </GoogleMap>
        </>
    )
}