import React, {Component } from  "react";
import {Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Weather from "../Pages/Weather";
import Pages from "../Pages/Pages.css";

export default class Header extends Component {
	render() {
		return (
         <>
         <Navbar className="navbar" collapseOnSelect expand="md" bg="dark" variant="dark">
           <Container>
             <Navbar.Brand href="/">
              <img
               src="https://cdn.countryflags.com/thumbs/azerbaijan/flag-round-250.png" 
               height="30"
               width="30"
               className="d-inline-block align-top"
               alt="Logo"	
              /> Tourism
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
             <Navbar.Collapse id="responsive-navbar-nav">	
                <Nav className="mr-auto">
                  <Nav.Link href="/"> Home </Nav.Link>
                  <Nav.Link href="/about"> Cities </Nav.Link>
                  <Nav.Link href="/contacts"> Contacts </Nav.Link>
                  <Nav.Link href="/weather"> Weather </Nav.Link>

                </Nav>
                
             </Navbar.Collapse>
           </Container>
         </Navbar>
		        
            
        <Router>

           <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/weather" component={Weather} />
           </Switch>
          </Router>  
          </>		
    	);

	 }
}