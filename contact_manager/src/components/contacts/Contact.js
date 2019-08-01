import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from 'axios'
class Contact extends Component {
	static propTypes = {
		contact: PropTypes.object.isRequired
	};

	state = {
		showContactInfo: false
	};

	onDeleteClick = (id, dispatch) => {
		//Delete from the REST API server
		axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => {

				//Delete from the DOM
				dispatch({
					type: "DELETE_CONTACT",
					payload: id  
				});

			})

	};

	render() {
		const { id, name, phone, email } = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
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
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
				}}
			</Consumer>
		);
	}
}
export default Contact;
