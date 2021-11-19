import { Component } from "react";
import "./App.css";
import data from "./data/productData";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      name: "",
      price: Number,
      description: "",
      img: "",
    };
  }

  handleProductSelect = (evt) => {
    this.setState({
      cartList: [...this.state.cartList],
      name: "",
      price: Number,
      description: "",
      img: "",
    });
  };

  render() {
    let productListElArr = data.map((products) => {
      let { name, price, description, img } = products;
      return (
        <div
          className="product-container"
          onClick={() => this.handleProductSelect(products)}
        >
          <img src={img} alt="Product Image" />
          <div>Name: {name}</div>
          <div>Price: {price}</div>
          <div>Description: {description}</div>
          <button>Add To Cart</button>
        </div>
      );
    });

    let cartListElArr = this.state.cartList.map((data) => {
      return (
        <div className="cart-list-container">
          {/* <img src={productData.img} alt="product-image"/> */}
          <div>{data.name}</div>
          <div>{data.price}</div>
        </div>
      );
    });

    return (
      // const (name, description, img) = product;
      // let products = productListElArr;

      <div className="app" id="app-container">
        <h1>My Garage Sale</h1>

        <div className="products">{productListElArr}</div>

        <h2>Cart</h2>
        <div id="cart-container">
          <ul>{cartListElArr}</ul>

          <h3 id="subtotal">Subtotal: </h3>

          <h3 id="tax">Tax: </h3>

          <h3>Total: </h3>
          <div></div>
          <h1>Checkout</h1>
          <Form id="checkout" />
        </div>
      </div>
    );
  }
}

export default App;
