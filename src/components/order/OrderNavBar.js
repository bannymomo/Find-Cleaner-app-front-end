import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    Divider,
    InputBase
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./style/orderHistory.scss";

const OrderNavBar = () => {
    return (
        <div className="order-history__navbar">
            <header className="order-history__navbar--header">ORDER MANAGEMENT</header>
            <div className="order-history__navbar--search">
                <SearchIcon className="order-history__navbar--search-icon" />
                <InputBase
                className="order-history__navbar--search-textarea"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>

            <List>
                <ListItem button>
                    <ListItemText primary="All Orders" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Placed Orders" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Assigned Orders" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Completed Orders" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Cancelled Orders" />
                </ListItem>
            </List>
        </div>
    )
}

export default OrderNavBar;