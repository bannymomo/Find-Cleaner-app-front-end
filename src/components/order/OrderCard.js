import React from "react";
import { Link } from "react-router-dom";
import { BUSINESS_BASE_URL, CLIENT_BASE_URL } from "../../routes/URLMap";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";

import  AddLocationOutlinedIcon  from '@material-ui/icons/AddLocationOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

import "./style/orderHistory.scss";

const useStyles = makeStyles({
	root: {
        padding: "0 20px",
        marginBottom: "20px",
		borderLeft: "solid 5px #43a047",
		// width: "50%"
	},
	card_container: {
		borderTop: "solid 2px lightgrey"
	},
	media: {
		height: 70
	},
	price: {
		fontWeight: 500
	},
	card_title: {
		fontWeight: 500
	}
});

export default function OrderCard(props) {
	const classes = useStyles();
	let BASE_URL;
	if (props.role === 'client') {
		BASE_URL = CLIENT_BASE_URL;
	} else if (props.role === 'business') {
		BASE_URL = BUSINESS_BASE_URL;
	}

	return (
		<CardActionArea component={Link} to={`${BASE_URL}/orders/${props.orderId}`}>
			<Card className={classes.root}>
				<p className="order-card__status">NEW</p>
				<Grid container className={classes.card_container} spacing={1}>
					<Grid item xs={9}>
						<Typography
							className={classes.card_title}
							gutterBottom
							variant="h5"
							component="h2"
						>
							House Cleaning
						</Typography>
						<div>
							<ul className="order-card__list">
								<li>
									<AddLocationOutlinedIcon fontSize="small" />
									<span>116 Adelaide St, Brisbane City</span>
								</li>
								<li>
									<DateRangeOutlinedIcon fontSize="small" />
									<span>Sat, 15 Feb</span>
								</li>
							</ul>
						</div>
					</Grid>
					<Grid className="order-card__right" item xs={3}>
						<Typography
							className={classes.price}
							gutterBottom
							variant="h5"
							component="h2"
						>
							$180
						</Typography>
						<Avatar className="order-card__avatar" alt="user1" src="/1.jpg" />
					</Grid>
				</Grid>				
			</Card>
		</CardActionArea>
	);
}