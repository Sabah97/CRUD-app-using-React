import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.handleAdd(
      this.idInput.value,
      this.categoryInput.value,
      this.priceInput.value,
      this.qtyInput.value,
      this.nameInput.value
    );

    this.idInput.value = "";
    this.categoryInput.value = "";
    this.priceInput.value = "";
    this.qtyInput.value = "";
    this.nameInput.value = "";
  }
  render() {
    // const { id, category, price, qty, name } = this.props;
    return (
      // <div key={product.name}>
      <form onSubmit={this.onSubmit}>
        <input placeholder="ID" ref={(idInput) => (this.idInput = idInput)} />
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
        <button>Add</button>
        <hr />
      </form>

      // </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default AddProduct;
