import React, { Component } from 'react'

export default class Cart extends Component {

    state = {
        name: "",
        email: "",
        address: "",
        showCheckout: false,
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        };
        this.props.createOrder(order);

    }

    handleInput = (e) => {

        this.setState({[e.target.name]: e.target.value})

    }

    render() {

        const {cartItems} = this.props; 

        return (
            <div>
                {cartItems.length === 0? ( 
                    <div className="cart cart-header">Cart is empty</div>
                ): (
                <div className="cart cart-header"> You have {cartItems.length} in the cart{" "}</div>
                )}
            <div>
                <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title}></img>
                                </div>
                                <div>
                                <div>{item.title}</div>
                                <div className="right">
                                ${item.price} x {item.count}{" "}
                                <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                Remove
                                </button>
                                </div>
                                </div>
                                </li>
                            ))}
                        </ul>
                </div> 
                {cartItems.length !==0 && (
                <div>
                <div className="cart">
                    <div className="total">
                        <div>
                        Total: {" "}
                            ${cartItems.reduce((a,c) => a + c.price*c.count, 0)}
                        </div>
                       <button onClick={() => {this.setState({showCheckout: true})}} className="button primary">Proceed</button>
                    </div> 
                 </div>
                   {this.state.showCheckout && (
                      <div className="cart">
                      <form onSubmit={this.createOrder}>
                        <ul className="form-container">
                            <li>
                                <label>Email</label>
                                <input name="email" type="email" required onChange={this.handleInput}></input>
                            </li>
                            <li>
                                <label>Name</label>
                                <input name="name" type="text" required onChange={this.handleInput}></input>
                            </li>
                            <li>
                                <label>Address</label>
                                <input name="address" type="text" required onChange={this.handleInput}></input>
                            </li>
                            <li>
                               <button type="submit" className="button primary">Checkout</button>
                            </li>
                        </ul>
                      </form>
                      </div>
                  )}
                </div>
                )}
            </div>
        </div> 
        )
    }
}