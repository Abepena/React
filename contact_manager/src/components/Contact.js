import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        deleteClickHandler: PropTypes.func.isRequired
    };

    state = {
        showContactInfo: false
    };

    render() {
        const { name, phone, email } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}{" "}
                    <i
                        onClick={() =>
                            this.setState({
                                showContactInfo: !this.state.showContactInfo
                            })
                        }
                        className="fas fa-sort-down"
                    />
                    <i
                        className="fas fa-times"
                        onClick={console.log("clicked")}
                    />
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">{email}</li>
                        <li className="list-group-item">{phone}</li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
// };

export default Contact;
