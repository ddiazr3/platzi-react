import { useState,useEffect} from "react";
import axios from "axios";

const useGoogleAddress = () => {
    const [map, setMap] = useState({})

    // para consumir el api de google
    //const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyASTLZOOLWtxYcJ-PUGivUFSoMiqX4rHrs`
    // useEffect(async () => {
    //     const response = await axios(API);
    //     setMap(response.data.results[0].geometry.location);
    // },[])
    const nuevaUbicacion = {
        lat: 14.305234116585888,
        lng: -90.35731179326335
    }
    setMap(nuevaUbicacion);

    return map
}

export default useGoogleAddress