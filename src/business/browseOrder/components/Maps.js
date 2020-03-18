import React, { useEffect } from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";
import Geocode from "react-geocode";

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;

Geocode.setApiKey(`${GOOGLE_MAP_API_KEY}`);
Geocode.setLanguage("en");
Geocode.setRegion("au");

const stylesArray = [
	{
		featureType: "water",
		stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }]
	},
	{
		featureType: "road",
		elementType: "geometry.fill",
		stylers: [{ hue: "#ff0000" }, { saturation: -100 }, { lightness: 99 }]
	},
	{
		featureType: "road",
		elementType: "geometry.stroke",
		stylers: [{ color: "#808080" }, { lightness: 54 }]
	},
	{
		featureType: "landscape.man_made",
		elementType: "geometry.fill",
		stylers: [{ color: "#ece2d9" }]
	},
	{
		featureType: "poi.park",
		elementType: "geometry.fill",
		stylers: [{ color: "#ccdca1" }]
	},
	{
		featureType: "road",
		elementType: "labels.text.fill",
		stylers: [{ color: "#767676" }]
	},
	{
		featureType: "road",
		elementType: "labels.text.stroke",
		stylers: [{ color: "#ffffff" }]
	},
	{ featureType: "poi", stylers: [{ visibility: "off" }] },
	{
		featureType: "landscape.natural",
		elementType: "geometry.fill",
		stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
	},
	{
		featureType: "poi.park",
		stylers: [{ visibility: "on" }]
	},
	{
		featureType: "poi.sports_complex",
		stylers: [{ visibility: "on" }]
	},
	{
		featureType: "poi.medical",
		stylers: [{ visibility: "on" }]
	},
	{
		featureType: "poi.business",
		stylers: [{ visibility: "simplified" }]
	}
];

const CustomSkinMap = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: -27.468055, lng: 153.025035 }}
			defaultOptions={{
				scrollwheel: false,
				zoomControl: true,
				styles: stylesArray
			}}
		>
			<Marker position={{ lat: -27.468055, lng: 153.025035 }} />
			{props.locations.map(location => (
				<Marker position={location} />
			))}
		</GoogleMap>
	))
);

export default function Maps(props) {
	const addresses = props.orders.map(order => order.location);

	const [locations, setLocations] = React.useState([]);

	const getLocation = address => {
		if (!address) {
			address = "116 adelaide st, brisbane";
		}
		Geocode.fromAddress(`${address}`)
			.then(response => {
				const { lat, lng } = response.results[0].geometry.location;
				setLocations(locations => [...locations, { lat, lng }]);
			})
			.catch(error => console.error(error));
	};

	useEffect(() => {
		addresses.forEach(address => {
			getLocation(address);
		});
	}, [props.orders]);

	return (
		<CustomSkinMap
			locations={locations}
			googleMapURL={googleMapURL}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `100%`, width: `100%` }} />}
			mapElement={<div style={{ height: `98%` }} />}
		/>
	);
}
