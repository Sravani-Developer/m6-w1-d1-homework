import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import AppNavbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <div className="app-frame">
        <AppNavbar />
        <div className="app-content app-home-content">
          <Button
            color="link"
            tag={Link}
            to="/inventories"
            className="manage-btn"
          >
            Manage Inventory List
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
