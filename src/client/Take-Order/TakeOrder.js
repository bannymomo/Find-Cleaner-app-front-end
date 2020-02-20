import React from "react";
// import Sidebar from "../SideBar";
import Bedrooms from "./components/Bedrooms";
import Bathrooms from "./components/Bathrooms";
import LeaseEnd from "./components/LeaseEnd";
import OtherClean from "./components/OtherClean";
import Location from "./components/Location";
import Date from "./components/Date";
import Time from "./components/Time";
import Price from "./components/Price";

const TakeOrder = () => {
	return (
		<div className="client__take-order-page">
			<p id="take-order">See how little it will cost...</p>
			<Bedrooms />
			<Bathrooms />
			<LeaseEnd />
			<OtherClean />
			<Location />
			<Date />
			<Time />
			<Price />
		</div>
	);
};

export default TakeOrder;
