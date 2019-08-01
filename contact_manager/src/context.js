// Similar to Redux Provider
// Provider Component wraps around entire application
import React, {Component} from 'react'
import axios from 'axios'
const Context = React.createContext();

//Reducer to manipulate state based off action ALL UPPERCASE
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [ ...state.contacts, action.payload]
            };
        default: 
            return state;
    }
}

export class Provider extends Component {
    //async fetch users from JsonPlaceholder
    async componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
                this.setState({contacts:res.data})}
                )
    }
    //global state to be wrapped around app
    state = {
        contacts: [],
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
