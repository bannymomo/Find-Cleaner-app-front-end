import React, { Component } from "react";
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom';

import { LOGIN_URL } from '../routes/URLMap';
import "./style/navigation.scss";
import cleaner from "../assets/images/cleaner.png";

class Navigation extends Component {
  render() {
    return (
      <header className="navigation">
        <img src={cleaner} alt="cleaner" />
        <button className="post">Post a task</button>
        <Button color="primary">
          <NavLink to={LOGIN_URL} style={{ textDecoration: 'none' }}>
            Log in
          </NavLink>
        </Button>
        
        <button className="avatar"></button>

      </header>
    );
  }
}

export default Navigation;
