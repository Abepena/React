import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios'

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount(){
    const { id } = this.props.match.params
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    const contact = res.data

    this.setState({
      name: contact.name, 
      email: contact.email,
      phone: contact.phone
    })
  }
  
  // on change to input field change state object with target of the same names value
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const { id } = this.props.match.params

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }
    
    const newContact = {name, email, phone}
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact)
    dispatch({
          type: "EDIT_CONTACT",
          payload: res.data
        });
    


    //Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    placeholder="Enter name"
                    label="Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    type="email"
                    placeholder="Enter email..."
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                    label="Email"
                  />
                  <TextInputGroup
                    placeholder="Enter phone number..."
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                    label="Phone"
                  />
                  <input
                    type="submit"
                    className="btn btn-block add-contact-submit btn-light"
                    value="Update Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
