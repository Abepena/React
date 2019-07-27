// Similar to Redux Provider
// Provider Component wraps around entire application
import React, {Component} from 'react'

const Context = React.createContext();

//Reducer to manipulate state based off action ALL UPPERCASE
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default: 
            return state;
    }
}

export class Provider extends Component {
    //global state to be wrapped around app
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
        ],

        //dispatcher for actions to update state
        dispatch: action => this.setState(state => reducer(state,action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

//Use a consumer within any component you want to access the state from 
export const Consumer = Context.Consumer; //Sometimes you just export context and use .Consumer within the component you use it
