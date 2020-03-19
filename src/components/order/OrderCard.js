import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import { 
	Grid,
	Card,
	CardActionArea,
	Avatar,
	Typography
} from "@material-ui/core";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

import { 
    NEW_ORDER,
    ACCEPTED,
    DONE
} from "../../utils/variables";
import getStatusText from "../../utils/getStatusText";
import { fetchClientById } from "../../api/client";

import "./style/orderHistory.scss";
import theme from "../../theme/theme";

const useStyles = makeStyles({
	root: {
		padding: "0 20px",
		marginBottom: "20px",
		borderLeft: "solid 5px #3f88de",
	},
	card_container: {
		borderBottom: "solid 2px lightgrey",
		paddingTop: 10
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

const getCardColor = cardStatus => {
	switch(cardStatus) {
		case NEW_ORDER:
			return "orange"
        case ACCEPTED:
			return theme.palette.primary.main
        case DONE:
			return theme.palette.secondary.dark
        default:
            return theme.palette.secondary.light
	}
}

const ColoredCard = styled(Card)`	
		padding: 0 20px;
		margin-bottom: 20px;
		border-left: solid 5px;
		border-left-color: ${props => getCardColor(props.cardstatus)};	
`;

export default function OrderCard(props) {
	const classes = useStyles();

	const [clientPhoto, setClientPhoto] = React.useState("");

	useEffect(() => {
		!!props.clientId &&
		fetchClientById(props.clientId)
			.then(data => {
				setClientPhoto(data.photo)
			})
			.catch(error => console.error(error))
	}, [props]);

	return (
		<CardActionArea
			component={Link}
			to={props.to}
		>
			<ColoredCard cardstatus={props.status}>
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
									<span>{props.location}</span>
								</li>
								<li>
									<DateRangeOutlinedIcon fontSize="small" />
									<span>							
										<Moment format="DD-MM-YY HH:mm">
											{props.dueDate}
										</Moment>
									</span>
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
							${props.price}
						</Typography>
						{
							props.clientId ?
							<Avatar
								className="order-card__avatar"
								alt="client photo"
								src={clientPhoto}
							/> :
							<Avatar
								className="order-card__avatar"
								alt="client photo"
								src=""
							/> 
						}
					</Grid>
				</Grid>
				<p className="order-card__status">{getStatusText(props.status)}</p>
			</ColoredCard>
		</CardActionArea>
	);
}
