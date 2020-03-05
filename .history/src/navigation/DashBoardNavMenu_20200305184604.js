

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import { Link } from "react-router-dom";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const 	renderLink = index => {
    const businessId = this.props.match.params.businessId;
    const clientId = this.props.match.params.clientId;
    const links = [
        {
            name: "Notification",
            to: clientId
                ? `${CLIENT_BASE_URL}/${clientId}/notification`
                : `${BUSINESS_BASE_URL}/${businessId}/notification`
        },
        {
            name: "Message",
            to: clientId
                ? `${CLIENT_BASE_URL}/${clientId}/message`
                : `${BUSINESS_BASE_URL}/${businessId}/message`
        }
    ];
    return (
        <Link
            to={links[index].to}
            style={{
                color: this.state.linksActive[index] ? "#3f88de" : ""
            }}
            onClick={() => this.handleClick(index)}
            className="nav-bar__link--black"
        >
            {links[index].name}
        </Link>
    );
};
  return (
    <div>
      <ListRoundedIcon fontSize="large" className="nav-bar__menu-icon" onClick={handleClick}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
