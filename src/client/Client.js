import React, { Component } from "react";
import "./style/client.scss";
import SideBar from "./SideBar";
import ClientRoutes from '../routes/ClientRoutes';



class Client extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
  }


  isMobile = () => window.innerWidth <= 768;

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => this.forceUpdate();

  toggleMenu = () => {
    this.state.expanded ? this.setState(
      { expanded: false }
    ) : this.setState(
      { expanded: true }
    )
  }
  

  render() {
    const isMobile = this.isMobile();

    return (

      <div className="client__container--whole-page" >

        <div className="client__sidebar--page-left">
          {
            !isMobile||this.state.expanded ? (
              <div >
                <SideBar />
              </div>
            ) : <div>
                <img onClick={this.toggleMenu} width="50" alt="Menu" style={{ marginLeft: 25, marginTop: 25 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Design_plat_Menu.svg/256px-Design_plat_Menu.svg.png" />
              </div>
          }
        </div>

        <div className="client__content-container--page-right" onClick={this.toggleMenu}>
          <ClientRoutes />
        </div>
      </div>
    );
  }
}

export default Client;
