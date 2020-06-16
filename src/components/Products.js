import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDelete() {
    const { handleDelete, name } = this.props;
    handleDelete(this.props.name);
  }
  handleEdit() {
    this.setState({ isEdit: true });
  }
  render() {
    const { id, category, price, qty, name } = this.props;
    return (
      <div>
        {this.state.isEdit ? (
          <div>
            <input
              placeholder="ID"
              ref={(idInput) => (this.idInput = idInput)}
            />
            <input
              placeholder="Category"
              ref={(categoryInput) => (this.categoryInput = categoryInput)}
            />
            <input
              placeholder="Price"
              ref={(priceInput) => (this.priceInput = priceInput)}
            />
            <input
              placeholder="Qty"
              ref={(qtyInput) => (this.qtyInput = qtyInput)}
            />
            <input
              placeholder="Name"
              ref={(nameInput) => (this.nameInput = nameInput)}
            />
            <button>Save</button>
          </div>
        ) : (
          <div>
            <span>{id} </span> |<span> {category} </span> |
            <span> {price} </span> |<span> {qty} </span> |<span> {name} </span>{" "}
            <button onClick={this.handleDelete}> X </button>
            <button onClick={this.handleEdit}> Edit </button>
          </div>
        )}
      </div>
    );
  }
}

export default Products;
