import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";

import AppNavbar from "./Navbar";

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
      loading: true,
    };
    this.remove = this.remove.bind(this);
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/api/inventories");
    const body = await response.json();

    this.setState({
      inventories: body,
      loading: false,
    });
  }

  async remove(id) {
    await fetch(`http://localhost:8080/api/inventory/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const updatedInventories = this.state.inventories.filter(
      (inventory) => inventory._id !== id
    );

    this.setState({ inventories: updatedInventories });
  }

  render() {
    const { inventories, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    const inventoryList = inventories.map((inventory) => {
      return (
        <tr key={inventory._id}>
          <td style={{ whiteSpace: "nowrap" }}>{inventory.prodname}</td>
          <td>{inventory.qty}</td>
          <td>{inventory.price}</td>
          <td>{inventory.status}</td>
          <td>
            <ButtonGroup>
              <Button
                color="primary"
                size="sm"
                tag={Link}
                to={`/inventories/${inventory._id}`}
              >
                Edit
              </Button>
              <Button
                color="danger"
                size="sm"
                onClick={() => this.remove(inventory._id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <div className="app-frame">
        <AppNavbar />
        <div className="app-content">
          <div className="mb-4">
            <Button color="success" tag={Link} to="/inventories/new" className="add-btn">
              Add inventory
            </Button>
          </div>
          <h2 className="page-title">Inventory List</h2>
          <Table className="inventory-table mt-4" responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{inventoryList}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default InventoryList;
