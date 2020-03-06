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
    clientRole,
    newOrder, 
    cancelledByClient, 
    accepted, 
    cancelledByBusiness, 
    done 
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
                { props.role === clientRole && 
                    <React.Fragment>
                        <Divider />
                        <ListItem button
                            status= {newOrder}
                            onClick={props.searchNew}
                        >
                            <ListItemText primary="Placed Orders" />
                        </ListItem>
                    </React.Fragment>
                }
                { props.role === clientRole && 
                    <React.Fragment>
                        <Divider />
                        <ListItem button
                            status= {cancelledByClient}
                            onClick={props.searchWithdraw}
                        >
                            <ListItemText primary="Orders Cancelled by Client" />
                        </ListItem>
                    </React.Fragment>
                }
                <Divider />
                <ListItem button
                    status= {accepted}
                    onClick={props.searchAccepted}
                >
                    <ListItemText primary="Assigned Orders" />
                </ListItem>
                <Divider />
                <ListItem button
                    status= {cancelledByBusiness}
                    onClick={props.searchCancelled}
                >
                    <ListItemText primary="Orders Cancelled by Business" />
                </ListItem>
                <Divider />
                <ListItem button
                    status= {done}
                    onClick={props.searchDone}
                >
                    <ListItemText primary="Completed Orders" />
                </ListItem>
            </List>
        </div>
    )
}

export default OrderNavBar;