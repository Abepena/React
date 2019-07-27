import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
   state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555-5555',

                },
                {
                    id: 2,
                    name: 'Karen Smith',
                    email: 'jdoe@gmail.com',
                    phone: '333-333-3333',

                },
                {
                    id: 3,
                    name: 'Joe Schmo',
                    email: 'jschmo@gmail.com',
                    phone: '444-444-4444',

                }
            ]
				};
		
		deleteContact = (id) => {
			const { contacts } = this.state
			//Filter all contacts that don't have the id passed in to delete
			this.setState({
				contacts: contacts.filter( contact => contact.id != id)
			})
		}
    render() {
        const { contacts } = this.state;

        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
											key={contact.id}
											contact={contact}
											deleteClickHandler={this.deleteContact.bind(this, contact.id)}
										/>
                ))}
                
            </React.Fragment>
        )
		};
	}



export default Contacts;
