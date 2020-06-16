import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  handleDelete() {
    const { handleDelete, name } = this.props;
    handleDelete(name);
  }
  handleEdit() {
    this.setState({ isEdit: true });
  }

  handleEditSubmit(event) {
    event.preventDefault();
    this.props.handleEditSubmit(
      this.idInput.value,
      this.categoryInput.value,
      this.priceInput.value,
      this.qtyInput.value,
      this.nameInput.value,
      this.props.name
    );
    this.setState({ isEdit: false });
  }
  render() {
    const { id, category, price, qty, name } = this.props;
    return (
      <div>
        {this.state.isEdit ? (
          <form onSubmit={this.handleEditSubmit}>
            <input
              placeholder="ID"
              ref={(idInput) => (this.idInput = idInput)}
              defaultValue={id}
            />
            <input
              placeholder="Category"
              ref={(categoryInput) => (this.categoryInput = categoryInput)}
              defaultValue={category}
            />
            <input
              placeholder="Price"
              ref={(priceInput) => (this.priceInput = priceInput)}
              defaultValue={price}
            />
            <input
              placeholder="Qty"
              ref={(qtyInput) => (this.qtyInput = qtyInput)}
              defaultValue={qty}
            />
            <input
              placeholder="Name"
              ref={(nameInput) => (this.nameInput = nameInput)}
              defaultValue={name}
            />
            <button>Save</button>
          </form>
        ) : (
          <div>
            <input value={id} />
            <input value={category} />
            <input value={price} />
            <input value={qty} />
            <input value={name} />
            <button onClick={this.handleDelete}> X </button>
            <button onClick={this.handleEdit}> Edit </button>
          </div>
        )}
      </div>
    );
  }
}

export default Products;
// <span>{id} </span> |<span> {category} </span> |
//               <span> {price} </span> |<span> {qty} </span> |
//               <span> {name} </span>{" "}
