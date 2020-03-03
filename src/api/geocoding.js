import axios from "axios";

const getLocation = address => {
    let location;
    if (!address) {
        location = "166+adedaile+street+brisbane";
    } else {
        location = address.split(' ').join('+') || "166+adedaile+street+brisbane";
    }

    const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    const GEOCODE_URL = `https://maps.googleapis.com/maps/apigeocode/json?address=${location}&key=${GOOGLE_MAP_API_KEY}`;

    return axios.get(GEOCODE_URL).then(res => ({
        lat: res.data.result.geometry.location.lat,
        lng: res.data.result.geometry.location.lng

    }))
}

export default getLocation;
