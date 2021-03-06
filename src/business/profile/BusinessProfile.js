import React from "react";
import Moment from "react-moment";
import Reviews from "../../UI/Reviews";
import {
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider,
	Link,
	ButtonBase,
	Grid,
	makeStyles
} from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";

import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";

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
		marginLeft: theme.spacing(70),
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(-3),
			marginLeft: theme.spacing(67),
			fontSize: "10px"
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(-3),
			marginLeft: theme.spacing(28),
			fontSize: "10px"
		},
		"&:hover": {
			textDecoration: "none",
			color: "#3f89de"
		}
	}
}));


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

export default function BusinessProfile(props) {
	const classes = useStyles();
	const {
		ABNNumber,
		email,
		address,
		telephoneNumber,
		postcode,
		memberSince,
		lastOnline,
		description,
		comments
	} = props.business;
	const [value] = React.useState(4.5);

	const getReviews = () => {
		if (!comments || comments.length === 0) {
			return (
				reviews.map(review => (
					<Grid item xs key={review.name + review.date}>
						<Reviews
							name={review.name}
							rating={review.rating}
							date={review.date}
							service={review.service}
							comment={review.comment}
						/>
					</Grid>
				))
			)
		}
		return (
			comments.map(comment => (
				<Grid item xs key={comment._id}>
					<Reviews
						name={comment.clientName}
						rating={comment.rate}
						date={reviews[0].date}
						service={reviews[0].service}
						comment={comment.comment}
						clientPhoto={comment.clientPhoto}
					/>
				</Grid>
			))
		)
	}

	return (
		<List>
			<ListItem
				alignItems="flex-start"
				className="business-profile__description"
			>
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
			</ListItem>
			<Divider
				variant="middle"
				component="li"
				className="business-profile__divider"
			/>

			<ListItem alignItems="flex-start">
				<BusinessOutlinedIcon />
				<ListItemText
					secondary={
						<Typography variant="subtitle2" color="textSecondary">
							ABN: <span>{ABNNumber}</span>
						</Typography>
					}
				/>
			</ListItem>
			<ListItem alignItems="flex-start">
				<PhoneAndroidOutlinedIcon />
				<ListItemText
					secondary={
						<Typography variant="subtitle2" color="textSecondary">
							{telephoneNumber}
						</Typography>
					}
				/>
			</ListItem>

			<ListItem alignItems="flex-start">
				<AlternateEmailOutlinedIcon />
				<ListItemText
					secondary={
						<Typography variant="subtitle2" color="textSecondary">
							{email}
						</Typography>
					}
				/>
			</ListItem>
			<ListItem alignItems="flex-start">
				<AddLocationOutlinedIcon />
				<ListItemText
					secondary={
						<Typography variant="subtitle2" color="textSecondary">
							{address}, {postcode}
						</Typography>
					}
				/>
			</ListItem>

			<ListItem alignItems="flex-start">
				<UpdateOutlinedIcon />
				<ListItemText
					secondary={
						<Typography variant="subtitle2" color="textSecondary">
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
						<Typography variant="subtitle2" color="textSecondary">
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
						return (
							<Grid
								item
								sm={3}
								xs={6}
								className={classes.images}
								key={image.title}
							>
								<ButtonBase
									className={classes.imageWrapper}
									style={{width: image.width}}
								>
									<div
										className={classes.imageSrc}
										style={{backgroundImage: `url(${image.url})`}}
									/>
								</ButtonBase>
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
					{getReviews()}
				</Grid>
			</ListItem>
			<Link className={classes.buttonLink} component="button">
				View more
			</Link>
		</List>
	);
}
