import React, { Component } from "react"

/*
class TotalPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {totalPrice: 0};
    }

    calculateTotal = () => {
        const total = this.props.productsList.map(item => item.product.price * item.quantity)
                                                  .reduce((prevVal, current) => Number(prevVal) + Number(current));
        this.setState({totalPrice: total});
        this.props.calculateTotalPrice(total);
    }

    componentDidMount = () => {
        this.calculateTotal()
    }

    render() {
        return (
            <div>
            <p className="container">{this.state.totalPrice}</p> 
            </div>
        )
    }
}



export default TotalPrice;
*/


const totalPrice = ({calculateTotal}) => {
    return (
        <div>
            <p className="container">Total Price: ${
                calculateTotal.map(item =>  item.product.price * item.quantity)
                .reduce((previousVal, current) => (Number(previousVal) + Number(current)).toFixed(2))}
            </p>
        </div>
    )
}

export default totalPrice;

