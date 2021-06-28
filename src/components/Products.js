import React, { Component } from 'react';
import Modal from 'react-modal';

export default class Products extends Component {

    state = {
        product: null
    }

    openModal = (product) => {
        this.setState({ product })
    }

    closeModal = () => {
        this.setState({ product: null})
    }

    render() {

        const { product } = this.state;
        return (
            <div>
            <ul className="products">
            {this.props.products.map(product => (
                <li key={product._id}>
                    <div className="product">
                        <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                            <img src={product.image} alt={product.title}></img>
                            <p>{product.title}</p>
                        </a>
                        <div className="product-price">
                            <div>
                            ${product.price}
                            </div>
                            <button className="button primary" onClick={() => this.props.addToCart(product)}>
                                Add to Cart
                            </button>
                        </div> 
                    </div>
                </li>
            ))}
            </ul>
            { 
            product && (
                <Modal isOpen={true}
                onRequest={this.closeModal}>
                <button className="close-modal" onClick={() => this.closeModal()}>x</button>
                <div className="product-details">
                    <img src={product.image} alt={product.title}></img>
                    <div className="product-details-description">
                        <p><strong>{product.title}</strong></p>
                        <p>{product.description}</p>
                        <div className="product-price">
                            <div>${product.price}</div>
                            <button className="button primary" onClick={() => {
                                this.props.addToCart(product);
                                this.closeModal();
                            }}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                </Modal>
            )}
            </div>
        )
    }
}
