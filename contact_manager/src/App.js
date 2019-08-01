//React/Context imports
import React, { Component } from "react";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Custom component imports
import Contacts from "./components/contacts/Contacts";
import TestComponent from "./components/test/TestComponent"
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound"
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact"

//Styling imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header branding="Contact Manager" />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/contact/add" component={AddContact} />
								<Route exact path="/contact/edit/:id" component={EditContact} />
								<Route exact path="/about" component={About}/>
								<Route exact path="/test" component={TestComponent}/>
								<Route component={NotFound}/>			
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
