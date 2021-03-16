import React, { Component } from "react"

class ProductsInCart extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">{this.props.name}</div>
                    <div className="col-md-2">{this.props.price}</div>
                    <div className="col-md-2">{this.props.quantity}</div>
                </div>
            </div>
        )
    }

}
export default ProductsInCart;