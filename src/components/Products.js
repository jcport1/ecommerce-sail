import React, { Component } from 'react';

export default class Products extends Component {

    render() {
        return (
            <div>
            <ul className="products">
            {this.props.products.map(product => (
                <li key={product._id}>
                    <div className="item">
                        <img src={product.image} alt={product.title}></img>
                        <p>{product.title}</p>
                    </div>
                </li>
            ))}
            </ul>
            </div>
        )
    }
}
