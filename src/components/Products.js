import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    const { handleDelete, name } = this.props;
    handleDelete(this.props.name);
  }
  render() {
    const { id, category, price, qty, name } = this.props;
    return (
      // <div key={product.name}>
      <tr>
        <th colSpan="5">
          <span>{id} </span> |<span> {category} </span> |<span> {price} </span>{" "}
          |<span> {qty} </span> |<span> {name} </span>{" "}
          <button onClick={this.handleDelete}> X </button>
        </th>
      </tr>

      // </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default Products;
