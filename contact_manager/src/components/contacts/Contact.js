import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
	static propTypes = {
		contact: PropTypes.object.isRequired
	};

	state = {
		showContactInfo: false
	};

	onDeleteClick = async (id, dispatch) => {
		//await the Delete from the REST API server
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		} catch (e) {
			console.log(e);
		}
		//Delete from the DOM
		dispatch({
			type: "DELETE_CONTACT",
			payload: id
		});
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
								<Link to={`contact/edit/${id}`}>
									<i
										className="fas fa-edit ml-3 float-right "
										style={{
											cursor: "pointer",
											color: "black"
										}}
									/>
								</Link>
								<i
									className="fas fa-times float-right"
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
