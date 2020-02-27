import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

import ToggleButton from "@material-ui/lab/ToggleButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import "./style/orderHistory.scss";
import OrderInformationList from "./OrderInformationList";

const useStyles = makeStyles({
	formControl: {
		marginTop: 20,
		marginBottom: 20,
		width: "100%"
	}
});

const offerButtonText = "Take the offer";

export default function OrderInformaiton() {
	const classes = useStyles();
	const listArray = [
		{
			link: "https://www.facebook.com/",
			icon: "fab fa-facebook",
			description: "facebook"
		},
		{
			link: "https://twitter.com/",
			icon: "fab fa-twitter",
			description: "twitter"
		},
		{
			link: "https://www.instagram.com/",
			icon: "fab fa-instagram",
			description: "instagram"
		},
		{
			link: "localhost:3000",
			icon: "fas fa-briefcase",
			description: "and so on"
		}
	];

	//more options dropdown
	const [state, setState] = React.useState({
		options: "",
		name: "hai"
	});
	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleChange = name => event => {
		setState({
			...state,
			[name]: event.target.value
		});
	};

	//toggle button
	const [selected, setSelected] = React.useState(false);

	return (
		<div className="order-information">
			<Grid container className="order-information__top" spacing={2}>
				<Grid item xs={8}>
					<div className="order-information__head">
						<ul className="order-information__status">
							<li className="order-information__status-active">NEW</li>
							<li>CANCELLED</li>
							<li>ASSIGNED</li>
							<li>COMPLETED</li>
						</ul>
						<ToggleButton
							size="small"
							value="follow"
							selected={selected}
							onChange={() => {
								setSelected(!selected);
							}}
						>
							<FavoriteBorderIcon fontSize="small" />
							<p>Follow</p>
						</ToggleButton>
					</div>
					<Typography variant="h4" component="h2">
						House Cleaning
					</Typography>
					<OrderInformationList />
					
				</Grid>
				<Grid item xs={4}>
					<Card>
						<CardContent className="order-information__budget">
							<Typography className={classes.title} gutterBottom>
								Price
							</Typography>
							<Typography variant="h4" component="p">
								$180
							</Typography>
						</CardContent>
						<CardActions className="order-information__offer">
							<button className="order-information__offer--btn">
								{offerButtonText}
							</button>
						</CardActions>
					</Card>
					<FormControl
						variant="outlined"
						className={classes.formControl}
					>
						<InputLabel
							margin="dense"
							ref={inputLabel}
							htmlFor="more-options"
						>
							More Options
						</InputLabel>
						<Select
							native
							margin="dense"
							value={state.options}
							onChange={handleChange("options")}
							labelWidth={labelWidth}
							inputProps={{
								name: "options",
								id: "more-options"
							}}
						>
							<option value="" />
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>
					<Box
						border={1}
						borderRadius={5}
						borderColor="#eee"
						className="order-information__share"
					>
						<InputLabel className="order-information__share--label">
							SHARE
						</InputLabel>
						<div className="order-information__share--whole">
							{listArray.map(list => {
								return (
									<a
										href={list.link}
										className="order-information__share--single"
									>
										<i className={list.icon}></i>
									</a>
								);
							})}
						</div>
					</Box>
				</Grid>
			</Grid>
			<div className="order-information__details">
				<Typography variant="h6" component="p">
					DETAILS
				</Typography>
				<ul className="order-information__details--list">
					<li>Number of bedrooms: 4</li>
					<li>Number of bathrooms: 4</li>
					<li>End-of-lease clean: Yes</li>
					<li>Oven: Yes</li>
					<li>Windows: Yes</li>
					<li>Cabinets: Yes</li>
					<li>Carpet: Yes</li>
				</ul>
				<Typography variant="body1" component="p">
					I need dlkalgj aepwgk'ape [apeg[ap aEOihgao ]] jeofiahgiuh
					ioweja owea a aeg aweoig. dlkalgj aepwgk'ape [apeg[ap
					aEOihgao ]] jeofiahgiuh ioweja owea a aeg aweoig. dlkalgj
					aepwgk'ape [apeg[ap aEOihgao ]] jeofiahgiuh ioweja owea a
					aeg aweoig.
				</Typography>
			</div>
		</div>
	);
}
