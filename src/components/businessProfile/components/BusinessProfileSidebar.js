import React from "react";
import Moment from "react-moment";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import LoyaltyTwoToneIcon from "@material-ui/icons/LoyaltyTwoTone";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import { HOMEPAGE_URL } from "../../../routes/URLMap";

import "../../../theme/theme";
import "../../../theme/variables.scss";

const onHomePage = HOMEPAGE_URL;

const useStyles = makeStyles(theme => ({
	avatar: {
		backgroundColor: "#E5E5E5",
		width: "7rem",
		height: "7rem"
	},
	rating: {
		display: "flex",
		alignItems: "center",
		margin: theme.spacing(1),
		"&>span:last-child": {
			color: "#3f89decc",
			fontSize: "14px",
			fontWeight: "600",
			marginLeft: "5px"
		}
	}
}));

export default function BusinessProfileSidebar(props) {
	const classes = useStyles();
	const {
		ABNNumber,
		photo,
		businessName,
		email,
		address,
		telephoneNumber,
		postcode,
		memberSince,
		lastOnline
	} = props.business;
	return (
		<div
			className="business-profile__sidebar"
			style={{
				display:
					props.expanded || props.expanded === undefined
						? "flex"
						: "none"
			}}
		>
			<List>
				<ListItem className="business-profile__avatar">
					<Avatar
						className={classes.avatar}
						alt="Business"
						src={photo}
					/>

					<ListItemText primary={businessName} />

					<div className={classes.rating}>
						<Rating
							name="half-rating-read"
							defaultValue={4.5}
							precision={0.5}
							size="small"
							readOnly
						/>
						<span>(219)</span>
					</div>

					{/* <ListItemText
						secondary={
							<Typography variant="body2" color="textSecondary">
								<span>Completed 12 jobs</span> on Broomer
							</Typography>
						}
					/> */}
					<ListItemText
						secondary={
							<Typography variant="body2" color="textSecondary">
								ABN <span>{ABNNumber}</span>
							</Typography>
						}
					/>
				</ListItem>

				<Divider variant="middle" component="li" />

				<ListItem alignItems="flex-start">
					<LoyaltyTwoToneIcon />
					<ListItemText
						secondary={
							<Typography variant="subtitle1">
								On-Time Guarantee
							</Typography>
						}
					/>
				</ListItem>

				<Divider variant="middle" component="li" />

				<ListItem alignItems="flex-start">
					<PhoneAndroidOutlinedIcon />
					<ListItemText
						secondary={
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								{telephoneNumber}
							</Typography>
						}
					/>
				</ListItem>

				<ListItem alignItems="flex-start">
					<AlternateEmailOutlinedIcon />
					<ListItemText
						secondary={
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								{email}
							</Typography>
						}
					/>
				</ListItem>
				<ListItem alignItems="flex-start">
					<AddLocationOutlinedIcon />
					<ListItemText
						secondary={
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								{address}, {postcode}
							</Typography>
						}
					/>
				</ListItem>
				<Divider variant="middle" component="li" />

				<ListItem alignItems="flex-start">
					<UpdateOutlinedIcon />
					<ListItemText
						secondary={
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Member since :
								<Moment format="DD-MM-YY HH:mm">
									{memberSince}
								</Moment>
							</Typography>
						}
					/>
				</ListItem>
				<ListItem alignItems="flex-start">
					<HistoryOutlinedIcon />
					<ListItemText
						secondary={
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Last online :
								<Moment format="DD-MM-YY HH:mm">
									{lastOnline}
								</Moment>
							</Typography>
						}
					/>
				</ListItem>
			</List>
		</div>
	);
}
