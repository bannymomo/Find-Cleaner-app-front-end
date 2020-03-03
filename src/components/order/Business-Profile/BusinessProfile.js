import React, { Fragment } from "react";
import "./style/businessProfile.scss";
import BusinessProfileSideBar from "./components/BusinessProfileSidebar";
import BusinessProfileContainer from "./components/BusinessProfileContainer";

export default function BusinessProfile(props) {
	return (
		<Fragment>
			<div className="business-profile__sidebar--page-left">
				<div>
					<BusinessProfileSideBar />
				</div>
			</div>

			<div className="business-profile__container--page-right">
				<BusinessProfileContainer />
			</div>
		</Fragment>
	);
}
