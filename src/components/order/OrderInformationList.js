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
import BusinessProfile from "./Business-Profile/BusinessProfile";
import "./style/orderHistory.scss";

import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { nominalTypeHack } from "prop-types";

const useStylesModal = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        display: "flex",
        boxSizing: "border-box",
        position: "relative",
        width: "960px",
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #fff",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 1, 0),
        outline: 0
    },
    button: {
        position: "absolute",
        right: -18,
        top: -5,

        border: "none",
        borderRadius: "100px",
        fontSize: "1rem",
        "&:hover": {
            color: "#2196f3",
            backgroundColor: "transparent"
        }
    }
}));

export default function OrderInformationList(props) {
    const modalClasses = useStylesModal();
    // backdrop for google map
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose = () => {
        setOpen1(false);
        setOpen2(false);
    };
    const handleToggle1 = () => {
        setOpen1(!open1);
    };
    const handleToggle2 = () => {
       setOpen2(!open2);
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
                            {props.clientName}
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
                            {props.location}
                        </Typography>
                    }
                />
                <div className="order-information__map">
                    <Button
                        onClick={handleToggle1}
                    >
                        View Map
                    </Button>
                    <Backdrop className="order-information__map--backdrop" 
                        open={open1}
                        onClick={handleClose}
                    >
                        <Maps 
                            address={props.location}
                        />
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
                            {props.dueDate}
                        </Typography>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="business1" src="/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="TAKEN BY"
                    secondary={
                        <Typography
                            variant="body2"
                            color="textPrimary"
                        >
                            {props.business && props.business.businessName}
                        </Typography>
                    }
                />
                <div className="order-information__business">
                    <div className={modalClasses.root}>
                        <Button onClick={handleToggle2} disabled={props.business? false: true}>View Business</Button>
                        <Modal
                            className={modalClasses.modal}
                            open={open2}
                            closeAfterTransition
                            disableScrollLock
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 1000,
                                open: open2 ? true : false
                            }}
                        >
                            <Fade in={open2}>
                                <div className={modalClasses.paper}>
                                    <BusinessProfile />
                                    <Button
                                      variant="outlined"
                                      onClick={handleClose}
                                      className={modalClasses.button}
                                    >
                                        ✕
                                    </Button>
                                </div>
                            </Fade>
                        </Modal>
                    </div>
                </div>
            </ListItem>
        </List>
    );
}
