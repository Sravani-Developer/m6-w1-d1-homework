import React, { Component } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import AppNavbar from "./Navbar";

const emptyItem = {
  prodname: "",
  qty: "",
  price: "",
  status: "",
};

class InventoryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: emptyItem,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.params.id !== "new") {
      const response = await fetch(
        `http://localhost:8080/api/inventory/${this.props.params.id}`
      );
      const body = await response.json();
      this.setState({ item: body });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const updatedItem = { ...this.state.item, [name]: value };
    this.setState({ item: updatedItem });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    await fetch("http://localhost:8080/api/inventory", {
      method: item._id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    this.props.navigate("/inventories");
  }

  render() {
    const { item } = this.state;
    const title = item._id ? "Edit Inventory" : "Add Inventory";

    return (
      <div className="app-frame">
        <AppNavbar />
        <div className="app-content form-content">
          <h2 className="page-title">{title}</h2>
          <Form onSubmit={this.handleSubmit} className="inventory-form">
            <FormGroup className="mb-4">
              <Label for="prodname">Product Name</Label>
              <Input
                id="prodname"
                name="prodname"
                type="text"
                value={item.prodname || ""}
                onChange={this.handleChange}
                autoComplete="prodname"
              />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="qty">Quantity</Label>
              <Input
                id="qty"
                name="qty"
                type="number"
                value={item.qty || ""}
                onChange={this.handleChange}
                autoComplete="qty"
              />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={item.price || ""}
                onChange={this.handleChange}
                autoComplete="price"
              />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="status">Status</Label>
              <Input
                id="status"
                name="status"
                type="text"
                value={item.status || ""}
                onChange={this.handleChange}
                autoComplete="status"
              />
            </FormGroup>
            <FormGroup className="d-flex gap-2">
              <Button color="primary" type="submit" className="form-btn">
                Save
              </Button>
              <Button color="secondary" tag={Link} to="/inventories" className="form-btn">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

function InventoryEditWrapper() {
  const params = useParams();
  const navigate = useNavigate();

  return <InventoryEdit params={params} navigate={navigate} />;
}

export default InventoryEditWrapper;
