//React/Context imports
import React, { Component } from "react";
import { Provider } from "./context";

//Custom component imports
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";

//Styling imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App">
					<Header branding="Contact Manager" />
					<div className="container">
						<AddContact />
						<Contacts />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
