import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

class AppNavbar extends Component {
  render() {
    return (
      <div className="app-shell-navbar">
        <Navbar color="dark" dark expand="md" className="px-4 py-3 app-navbar">
          <NavbarBrand tag={Link} to="/" className="app-nav-link">
            Home
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
