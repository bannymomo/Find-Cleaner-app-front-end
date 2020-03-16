import React, { Fragment } from "react";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";
import bigajiu from "../../../assets/images/bigajiu.jpg";
import George from "../../../assets/images/George.JPG";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	}
}));

const commentArray = [
	{
		name: "Jason",
		alt: "Jason",
		Avatar: George,
		value: 5,
		comment: "Love it!!!"
	},
	{
		name: "Joey",
		alt: "Joey",
		value: 5,
		Avatar: bigajiu,
		comment: "Good job!!!"
	},
	{
		name: "Mike",
		alt: "Mike",
		Avatar:
			"https://pngimage.net/wp-content/uploads/2018/05/avatar-png-5.png",
		value: 4,
		comment: "More than expected~~~"
	},

	{
		name: "John",
		alt: "John",
		value: 3,
		Avatar:
			"https://www.vippng.com/png/full/136-1363819_red-avatar-ace-craige-supremo-anime.png",
		comment: "......still wait you accept my order"
	},
	{
		name: "Ann",
		alt: "Ann",
		value: 5,
		Avatar:
			"https://apkplz.net/storage/images/jp/co/avatar/avatar2016factory/jp.co.avatar.avatar2016factory_1.png",
		comment: "Well done"
	}
];
export default function CommnetArray() {
	const classes = useStyles();
	return (
		<Fragment>
			<div className="dashboard__paragraph--title">
				Latest user comments
			</div>
			{commentArray.map((comment, index) => {
				return (
					<div key={index}>
						<span className="comment__avarta--container">
							<Avatar
								alt={comment.alt}
								src={comment.Avatar}
								className={classes.large}
							/>
						</span>
						<div className="comment__rating--container">
							<strong>{comment.name} </strong>
							<br />
							<Rating
								name="disabled"
								value={comment.value}
								readOnly
								size="small"
							/>
							<br />
							{comment.value * 20}% Completion Rate
						</div>
						<div className="comment__content--container">
							{comment.comment}
						</div>
					</div>
				);
			})}
		</Fragment>
	);
}
