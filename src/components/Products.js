import React, { Component } from 'react';

export default class Products extends Component {

    render() {
        return (
            <div>
            <ul className="products">
            {this.props.products.map(product => (
                <li key={product._id}>
                    <div className="item">
                        <a href={"#" + product._id}>
                            <img src={product.image} alt={product.title}></img>
                            <p>{product.title}</p>
                        </a> 
                        </div>
                        <div className="product-price">
                            <p>${product.price}</p>
                        <button className="button primary">Add to Cart</button>
                        </div> 
                   
                </li>
            ))}
            </ul>
            </div>
        )
    }
}
