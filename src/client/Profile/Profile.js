import React from "react";
import AboutForm from './components/AboutForm'
import SkillsForm from "./components/SkillsForm"
import Informatiaon from "./components/Information";
import "./style/profile.scss";

class Profile extends React.Component {

  render() {
    return (
      <div className="profile">
        <div><Informatiaon /></div>
        <div>
          <AboutForm />
        </div>  
        <div>
          <SkillsForm />
        </div>     
      </div>

    )
  }

}



export default Profile;
