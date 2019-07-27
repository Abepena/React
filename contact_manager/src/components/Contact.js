import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        deleteClickHandler: PropTypes.func.isRequired
    };

    state = {
        showContactInfo: false,
		};
		
		onDeleteClick = () => {
			this.props.deleteClickHandler();
		}

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
											onClick={this.onDeleteClick}
										>	
										</i>
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">{email}</li>
                        <li className="list-group-item">{phone}</li>
                    </ul>
                ) : null }
            </div>
        );
    }
}
export default Contact;
