import React, { Component } from "react";
import ProductsInCart from "./ProductsInCart";
import TotalPrice from "./TotalPrice"
import UserForm from "./UserForm"

class ShoppingCart extends Component {
    constructor() {
        super();
        this.state = {


            products: [
                { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', price: 3.99 }, quantity: 1 },
                { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', price: 4.99 }, quantity: 2 },
                { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', price: 19.99 }, quantity: 1 },
            ],
            totalPrice: 0,

        }

    }

    addItem = (item) => {
        let isInCart = false;
        let totalQuantity = 0
        this.state.products.map(product => {
            if (product.product.name === item.product.name) {
                isInCart = true
                totalQuantity = Number(product.quantity) + Number(item.quantity)
                console.log(totalQuantity);
            }
        }); 
        isInCart ? this.setState({quantity: 100}) : this.setState(prevState => ({products: prevState.products.concat(item)}));
    }

    calculateTotal = () => this.setState({totalPrice: 0})


  
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Cart Items</h1>
                    <div className="list-group">
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col-md-8">Product</div>
                                <div className="col-md-2">Price</div>
                                <div className="col-md-2">Quantity</div>
                            </div>
                        </div>
                        {this.state.products.map(item =>
                            <ProductsInCart
                                key={item.id}
                                name={item.product.name}
                                price={item.product.price}
                                quantity={item.quantity}
                            />
                        )}
                    </div>
                </div>
                <TotalPrice calculateTotal={this.state.products}/>
                <UserForm addItem={this.addItem} />
            </div>
        )
    }
}

export default ShoppingCart;