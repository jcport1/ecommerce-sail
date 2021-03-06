import React, { Component } from 'react';
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data.json";

class App extends Component {
  
 state = { 
      products: data.products,
      cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [],
      showSideBar: true,
    };

    createOrder = (order) => {
      alert("need to save order for" + order.name)
    }
 

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((item) => item._id !== product._id)
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((item) => item._id !== product._id)))
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
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  toggleSideBar = () => {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }

  render() { 
     
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Ecommerce Sail App</a>
          <button onClick={() => this.toggleSideBar()}>🛒</button>
        </header>
          <main>
            <div className="content">
              <div className="main">
                <Products products={this.state.products} addToCart={this.addToCart} />
              </div>
              {
                this.state.showSideBar? 
                (
                  <div className="sidebar"> 
                  <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder}/>
                  </div>

                ) : (
                  null 
                )
                
               }
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
