import React, { Component } from 'react';

export default class Products extends Component {

    render() {
        return (
            <div>
            <ul>
            {this.props.products.map(product => (
                <li>
                    <p>{product.title}</p>
                </li>
            ))}
            </ul>
            </div>
        )
    }
}
