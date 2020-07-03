import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const TopBar = () => {

  return (
    <Router>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="bg-secondary"
        >
          <Navbar.Brand as={Link} to="/home">
            Wonya
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/incident">
                Report Incident
              </Nav.Link>
              <Nav.Link as={Link} to="/new-facility">
                Add Facility
              </Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/reports">
                  Reports
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/facilities">
                  All Facilities
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/news">
                  News
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Signup
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/logout">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Router>
  );
};

export default TopBar;
