import React, { Component } from 'react';
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data.json";

class App extends Component {
  
 state = { 
      products: data.products,
      cartItems: [],
    };
 

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((item) => item._id !== product._id)
    })
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    }) 
    if (!alreadyInCart){
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems})
  }

  render() { 
     
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Ecommerce Sail App</a>
        </header>
          <main>
            <div className="content">
              <div className="main">
                <Products products={this.state.products} addToCart={this.addToCart} />
              </div>
              <div className="sidebar">
                <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
              </div>
            </div>
          </main>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
