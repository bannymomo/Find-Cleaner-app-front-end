import React from "react";
import Search from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	searchWrapper: {
		display: "inline-block"
		// margin: "0.5rem 0rem 0.5rem 0"
	},
	search: {
		width: "8rem",
		"& > div": {
			marginTop: "0"
		}
	}
}));

export default function SearchBar() {
	const classes = useStyles();

	return (
		<div className="browse-orders--top-bar--search">
			<div className={classes.searchWrapper}>
				<TextField
					className={classes.search}
					color="secondary"
					placeholder="Search"
				/>
				<Button color="secondary" aria-label="edit">
					<Search />
				</Button>
			</div>
		</div>
	);
}
