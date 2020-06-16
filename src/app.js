import React, { Component } from "react";
import ReactDOM from "react-dom";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
// import Products from "./components/Products";

// import "normalize.css/normalize.css";
// import "./styles/styles.scss";

// class ProductApp extends React.Component {
//   render() {
//     const title = "Product App";
//     const action = ["Name", "Price"];
//     const products = ["basketball", "4$", "3", "sports"];
//     return (
//       <div>
//         <Header title={title} />
//         <Button />
//         <Action action={action} />
//         <Products products={products} />
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>Anything You want to buy!!</h2>
//       </div>
//     );
//   }
// }
// class Button extends React.Component {
//   handlePick() {
//     alert("handlePick");
//   }
//   render() {
//     return <button onClick={this.handlePick}>Add Product</button>;
//   }
// }
// class Action extends React.Component {
//   render() {
//     return (
//       <table className="padding">
//         <tr>
//           <th colSpan="2">
//             <td>Name</td>
//             <td> Price</td>
//             <td>Quantity</td>
//             <td>Category</td>
//           </th>
//         </tr>
//       </table>
//     );
//   }
// }

// class Products extends React.Component {
//   handleRemoveAll() {
//     alert("handleRemoveAll");
//   }
//   render() {
//     return (
//       <table className="padding">
//         <tr>
//           <div>
//             <td>
//               {" "}
//               {this.props.products.map((product) => (
//                 <td key={product}>{product}</td>
//               ))}
//             </td>
//             <button onClick={this.handleRemoveAll}>Remove All</button>
//           </div>
//         </tr>
//       </table>
//     );
//   }
// }

// // const jsx = (
// //   <div>
// //     <Header />
// //     <Action />
// //     <Products />
// //   </div>
// // );
// ReactDOM.render(<ProductApp />, document.getElementById("app"));

const products = [
  {
    id: 1,
    category: "Sporting Goods",
    price: "49.99",
    qty: 12,
    name: "Football",
  },
  {
    id: 2,
    category: "Sporting Goods",
    price: "9.99",
    qty: 15,
    name: "Baseball",
  },
  {
    id: 3,
    category: "Sporting Goods",
    price: "29.99",
    qty: 14,
    name: "Basketball",
  },
  {
    id: 4,
    category: "Electronics",
    price: "99.99",
    qty: 34,
    name: "iPod Touch",
  },
  {
    id: 5,
    category: "Electronics",
    price: "399.99",
    qty: 12,
    name: "iPhone 5",
  },
  {
    id: 6,
    category: "Electronics",
    price: "199.99",
    qty: 23,
    name: "Nexus 7",
  },
];

localStorage.setItem("products", JSON.stringify(products));

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products")),
      term: "",
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    const products = this.getProducts();
  }
  getProducts() {
    return this.state.products;
    // this.setState({ products });
  }

  handleAdd(id, category, price, qty, name) {
    const products = this.getProducts();
    products.push({
      id,
      category,
      price,
      qty,
      name,
    });
    this.setState({ products });
  }
  handleDelete(name) {
    const products = this.getProducts();
    const filteredProducts = products.filter((product) => {
      return product.name !== name;
    });
    this.setState({ products: filteredProducts });
  }
  handleEditSubmit(id, category, price, qty, name, originalName) {
    let products = this.getProducts();
    products = products.map((product) => {
      if (product.name === originalName) {
        product.id = id;
        product.category = category;
        product.price = price;
        product.qty = qty;
        product.name = name;
      }
      return product;
    });
    this.setState({ products });
  }
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <div>
        <h1>Product App</h1>
        <input
          type="search"
          placeholder="Search"
          onChange={this.handleSearch}
        />

        <hr />
        <AddProduct handleAdd={this.handleAdd} />
        {this.state.products
          .filter(searchingFor(this.state.term))
          .map((product) => {
            return (
              // <div key={product.name}>

              <Products
                key={product.name}
                {...product}
                handleDelete={this.handleDelete}
                handleEditSubmit={this.handleEditSubmit}
              />

              // </div>
            );
          })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
// export default App;
