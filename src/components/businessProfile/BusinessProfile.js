import React, { Fragment } from "react";
import "./style/businessProfile.scss";
import BusinessProfileSideBar from "./components/BusinessProfileSidebar";
import BusinessProfileContainer from "./components/BusinessProfileContainer";
import Grid from "@material-ui/core/Grid";

export default function BusinessProfile(props) {
	return (
		<Fragment>
			<Grid container spacing={1}>
				<Grid
					item
					md={4}
					sm={12}
					// xs={12}
					className="business-profile__sidebar--page-left"
				>
					<div>
						<BusinessProfileSideBar
							business={props.business}
							expanded={props.expanded}
						/>
					</div>
				</Grid>
				<Grid
					item
					md={8}
					sm={12}
					// xs={12}
					className="business-profile__container--page-right"
				>
					<div>
						<BusinessProfileContainer
							business={props.business}
							expanded={props.expanded}
						/>
					</div>
				</Grid>
			</Grid>
		</Fragment>
	);
}
