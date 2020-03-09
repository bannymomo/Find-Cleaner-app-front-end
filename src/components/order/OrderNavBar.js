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

import {     
    NEW_ORDER,
    CANCELLED_BY_CLIENT,
    ACCEPTED,
    CANCELLED_BY_BUSINESS,
    DONE,
    CLIENT_ROLE
} from "../../utils/variables";

const OrderNavBar = props => {
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
                <ListItem button
                    onClick={props.searchAll}
                >
                    <ListItemText primary="All Orders" />
                </ListItem>
                { props.role === CLIENT_ROLE && 
                    <React.Fragment>
                        <Divider />
                        <ListItem button
                            status= {NEW_ORDER}
                            onClick={props.searchNew}
                        >
                            <ListItemText primary="Placed Orders" />
                        </ListItem>
                    </React.Fragment>
                }
                { props.role === CLIENT_ROLE && 
                    <React.Fragment>
                        <Divider />
                        <ListItem button
                            status= {CANCELLED_BY_CLIENT}
                            onClick={props.searchWithdraw}
                        >
                            <ListItemText primary="Orders Cancelled by Client" />
                        </ListItem>
                    </React.Fragment>
                }
                <Divider />
                <ListItem button
                    status= {ACCEPTED}
                    onClick={props.searchAccepted}
                >
                    <ListItemText primary="Assigned Orders" />
                </ListItem>
                <Divider />
                <ListItem button
                    status= {CANCELLED_BY_BUSINESS}
                    onClick={props.searchCancelled}
                >
                    <ListItemText primary="Orders Cancelled by Business" />
                </ListItem>
                <Divider />
                <ListItem button
                    status= {DONE}
                    onClick={props.searchDone}
                >
                    <ListItemText primary="Completed Orders" />
                </ListItem>
            </List>
        </div>
    )
}

export default OrderNavBar;