import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import InventoryEdit from "./InventoryEdit";
import InventoryList from "./InventoryList";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventories" element={<InventoryList />} />
          <Route path="/inventories/:id" element={<InventoryEdit />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
