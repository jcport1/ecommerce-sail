import React, { Component } from 'react';
import Products from "./components/Products";
import data from "./data.json";

class App extends Component {
  
  constructor() {
    super();
    this.state = { 
      products: data.products
    };
  }

  render() { 
     
    return (
      <div>
        <header>
          <div className="header">
            <p>Ecommerce </p>
            </div>
        </header>
          <main>
          <Products products={this.state.products} />
          </main>
        <footer>
          <div className="footer">
          <p>Footer</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
