import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function Navigation(props){
    

    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">News Headlines of 4 countries</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/ng" className="m-auto nav-link">Nigeria</NavLink>
                    <NavLink to="/my" className="m-auto nav-link">Malaysia</NavLink>
                    <NavLink to="/sa" className="m-auto nav-link">Saudi Arabia</NavLink>
                    <NavLink to="/sg" className="m-auto nav-link">Singapore</NavLink>
                </Nav>
                
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

export default Navigation;



// If I need a dropdown menu
// <NavDropdown title="Countries" id="basic-nav-dropdown">
//                     {props.country.map(country => (
//                         <NavDropdown.Item href={`/country/${country.name}`} key={country.iso}>{country.name}</NavDropdown.Item>
//                     ))}
//                     </NavDropdown>

//  {/* Creating as many links as there are countries on the Navbar 
//                     {props.country.map(country => (
//                         <NavLink to={`/country/${country.name}`} className="m-auto nav-link" key={country.iso}>{country.name}</NavLink>
//                     ))} */}