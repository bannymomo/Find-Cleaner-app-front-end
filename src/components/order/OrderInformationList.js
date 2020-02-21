import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";

import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";


import Maps from "./Maps";

import "./style/orderHistory.scss";

export default function OrderInformationList() {

    // backdrop for google map
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};

    return (
        <List>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="user1" src="/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="POSTED BY"
                    secondary={
                        <Typography
                            variant="body2"
                            color="textPrimary"
                        >
                            Gaurav L.
                        </Typography>
                    }
                />
                <p className="order-information__postTime">
                    20 mins ago
                </p>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemIcon>
                    <AddLocationOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                    primary="LOCATION"
                    secondary={
                        <Typography
                            variant="body2"
                            color="textPrimary"
                        >
                            116 Adelaide St, Brisbane City
                        </Typography>
                    }
                />
                <div className="order-information__map">
                    <Button
                        color="lightgreen"
                        onClick={handleToggle}
                    >
                        View Map
                    </Button>
                    <Backdrop
                        open={open}
                        onClick={handleClose}
                    >
                        <Maps />
                    </Backdrop>
                </div>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemIcon>
                    <DateRangeOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                    primary="DUE DATE"
                    secondary={
                        <Typography
                            variant="body2"
                            color="textPrimary"
                        >
                            Saturday, 15th Feb 2020
                        </Typography>
                    }
                />
            </ListItem>
        </List>
    )
}