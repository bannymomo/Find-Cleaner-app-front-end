import React from "react";
import Moment from "react-moment";
import Reviews from "../../UI/Reviews";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";

import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import styled from "styled-components";

import "../../theme/theme";
import "../../theme/variables.scss";

const useStyles = makeStyles(theme => ({
	rating: {
		display: "flex",
		alignItems: "center",
		marginLeft: theme.spacing(1.5),

		"&>span:not(:first-child)": {
			marginLeft: "8px",
			color: "#0008",
			fontSize: "15px",
			fontWeight: 600
		},
		"&>span:last-child": {
			color: "#3f89decc"
		}
	},
	reviews: {
		marginTop: theme.spacing(-1)
	},

	images: {
		display: "flex",
		flexWrap: "wrap"
	},

	imageWrapper: {
		position: "relative",
		display: "block",
		padding: 0,
		borderRadius: 0,
		height: "100px"
	},

	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center 40%"
	},

	buttonLink: {
		fontSize: "14px",
		color: "#3f89decc",
		borderBottom: "1px solid",
		marginTop: theme.spacing(-3),
		marginLeft: theme.spacing(58),
		"&:hover": {
			textDecoration: "none",
			color: "#3f89de"
		}
	}
}));

export default function BusinessProfileSidebar(props) {
	const classes = useStyles();
	const {
		ABNNumber,
		// photo,
		// businessName,
		email,
		address,
		telephoneNumber,
		postcode,
		memberSince,
		lastOnline,
		description
	} = props.business;
	const [value] = React.useState(4.5);

	const images = [
		{
			url:
				"https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792_1280.jpg",
			title: "Home & Gardening",
			width: "100%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2017/05/23/16/23/soap-dispenser-2337697_1280.jpg",
			title: "Washing",
			width: "100%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2017/08/24/12/23/coffee-2676642_1280.jpg",
			title: "Bed making",
			width: "100%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2015/03/26/10/01/bathroom-690774_1280.jpg",
			title: "Bathroom cleaning",
			width: "100%"
		}
	];
	const reviews = [
		{
			name: "Joe D",
			date: "3 days ago",
			rating: "5",
			service: "End-of-lease cleaning",
			comment: "Prestige Home Cleaning service is great. Thanks a lot."
		},
		{
			name: "Smith L",
			date: "2 days ago",
			rating: "5",
			service: "Carpet Cleaning",
			comment:
				"Cleaners are nice and professional. I will come back for sure! "
		}
	];

	return (
		<div className="business-profile__container">
			<List>
				<ListItem alignItems="flex-start">
					<ListItemText
						secondary={
							<Typography
								variant="body2"
								color="textSecondary"
								row="5"
							>
								{description}
							</Typography>
						}
					/>
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

				<ListItem alignItems="flex-start">
					<UpdateOutlinedIcon />
					<ListItemText
						secondary={
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Member since: 
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
								Last online: 
								<Moment format="DD-MM-YY HH:mm">
									{lastOnline}
								</Moment>
							</Typography>
						}
					/>
				</ListItem>

				<ListItem alignItems="flex-start">
					<ListItemText
						primary={
							<Typography variant="subtitle1" color="textPrimary">
								Portfilio
							</Typography>
						}
					></ListItemText>
				</ListItem>
				<ListItem alignItems="flex-start">
					<Grid container spacing={2}>
						{images.map(image => {
							const StyledButtonBase = styled(ButtonBase)`
								width: ${image.width};
							`;
							const StyledDiv = styled.div`
								background-image: url(${image.url});
							`;
							return (
								<Grid
									item
									xs
									className={classes.images}
									key={image.title}
								>
									<StyledButtonBase
										className={classes.imageWrapper}
									>
										<StyledDiv
											className={classes.imageSrc}
										/>
									</StyledButtonBase>
								</Grid>
							);
						})}
					</Grid>
				</ListItem>

				<ListItem alignItems="flex-start">
					<ListItemText
						primary={
							<Typography variant="subtitle1" color="textPrimary">
								Reviews
							</Typography>
						}
					></ListItemText>
				</ListItem>

				<div className={classes.rating}>
					<Rating
						name="half-rating-read"
						defaultValue={value}
						precision={0.5}
						readOnly
					/>
					<span>{value}</span>
					<span>|</span>
					<span>219 Reviews</span>
				</div>
				<ListItem alignItems="flex-start" className={classes.reviews}>
					<ListItemText
						primary={
							<Typography variant="caption" color="textSecondary">
								208 out of 219 (95%) reviewers recommend this
								business
							</Typography>
						}
					></ListItemText>
				</ListItem>
				<ListItem alignItems="flex-start">
					<Grid container spacing={0}>
						{reviews.map(review => (
							<Grid item xs key={review.name + review.date}>
								<Reviews
									name={review.name}
									rating={review.rating}
									date={review.date}
									service={review.service}
									comment={review.comment}
								/>
							</Grid>
						))}
					</Grid>
				</ListItem>
				<Link className={classes.buttonLink} component="button">
					View more
				</Link>
			</List>
		</div>
	);
}
