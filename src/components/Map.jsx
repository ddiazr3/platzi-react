import React from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({data}) => {
    console.log("*****position***")
    const defaultCenter = data
    const style = {
        height: "50vh",
        width: "100%"
    }
    return (
       <LoadScript googleMapsApiKey={"AIzaSyASTLZOOLWtxYcJ-PUGivUFSoMiqX4rHrs"}>
            <GoogleMap mapContainerStyle={style} zoom={10} center={defaultCenter}>
                <Marker position={defaultCenter}/>
            </GoogleMap>
       </LoadScript>
    );
};

export default Map;