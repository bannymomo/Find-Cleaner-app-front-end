import React from "react";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class AboutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutFormShowElem: false,
        }
    }

    toggleAboutForm = () => {
        !this.state.aboutFormShowElem ? this.setState(
            { aboutFormShowElem: true }
        ) : this.setState(
            { aboutFormShowElem: false }
        )
    }

    render() {
        return (<div className="about">
            <div className="about__form-title">
                <div>About</div>
                <div className="profile__toggle-icon">
                    {
                        !this.state.aboutFormShowElem ? (
                            <AddCircleIcon fontSize="large" onClick={this.toggleAboutForm} />
                        ) : null
                    }

                </div>
            </div>

            <div>
                {
                    !this.state.aboutFormShowElem ? (
                        <p>Edit your description now.</p>
                    ) : null
                }
            </div>

            <div >
                {
                    this.state.aboutFormShowElem ? (
                        <div>
                            <div className="about__form-Tagline">
                                <div>Tagline </div>
                                <input maxLength="50" type="text" />
                            </div>
                            <div className="about__form-description">
                                <p>Description </p>
                                <textarea type="text" name="lname" />
                            </div>

                            <div className="profile__buttion-group">
                                <Button variant="contained" color="primary">
                                    submit
                                    </Button>
                                <Button variant="contained" color="secondary"
                                    onClick={this.toggleAboutForm}>
                                    cancel
                                    </Button>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>

        )
    }
}

export default AboutForm;