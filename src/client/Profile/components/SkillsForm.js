import React from "react";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class SkillsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skillsFormShowElem: false
        }
    }

    toggleSkillsForm = () => {
        !this.state.skillsFormShowElem ? this.setState(
            { skillsFormShowElem: true }
        ) : this.setState(
            { skillsFormShowElem: false }
        )
    }

    render() {
        return (
            <div className="skills">
                <div className="skills__form-title">
                    <div>Skills</div>
                    <div className="profile__toggle-icon">
                        {
                            !this.state.skillsFormShowElem ? (
                                <AddCircleIcon fontSize="large" onClick={this.toggleSkillsForm} />
                            ) : null
                        }

                    </div>
                </div>

                <div>
                    {
                        !this.state.skillsFormShowElem ? (
                            <p>Edit your skills now.</p>
                        ) : null
                    }
                </div>
                <div>
                    {
                        this.state.skillsFormShowElem ? (
                            <div>
                                <form className="skills__form">
                                    <div className="skills__form-item">
                                        <div>Education </div>
                                        <input maxLength="50" type="text" />
                                    </div>
                                    <div className="skills__form-item">
                                        <div>Specialities</div>
                                        <input maxLength="50" type="text" />
                                    </div>
                                    <div className="skills__form-item">
                                        <div>Languages</div>
                                        <input maxLength="50" type="text" />
                                    </div>
                                    <div className="skills__form-item">
                                        <div>Work</div>
                                        <input maxLength="50" type="text" />
                                    </div>
                                    <div className="skills__form-item">
                                        <div>Transportation</div>
                                        <input maxLength="50" type="text" />
                                    </div>
                                    <div className="profile__buttion-group">
                                        <Button variant="contained"
                                            color="primary">
                                            submit
                                        </Button>
                                        <Button variant="contained"
                                            color="secondary"
                                            onClick={this.toggleSkillsForm}>
                                            cancel
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        ) : null
                    }
                </div>
            </div>

        )
    }
}

export default SkillsForm;