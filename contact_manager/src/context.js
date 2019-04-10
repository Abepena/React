// Similar to Redux Provider
// Provider Component wraps around entire application

import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
    //global application level state
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Karen Williams",
                email: "kwill@gmail.com",
                phone: "555-555-5556"
            },
            {
                id: 3,
                name: "Henry Johnson",
                email: "hjohn@gmail.com",
                phone: "555-555-5557"
            }
        ]
    };

    render() {
        return (
            // anything we want available in the application we pass into 'value' param
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer; //Sometimes you just export context and use .Consumer within the component you use it
