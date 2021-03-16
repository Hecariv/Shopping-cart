import React from "react"


const totalPrice = ({calculateTotal}) => {
    return (
        <div>
            <p className="container">Total Price: ${
            calculateTotal.map(item => {
                return item.product.price * item.quantity
            }).reduce((previousVal, current) => {
                let total = Number(previousVal) + Number(current);
                return total.toFixed(2)
                
                })}</p>
        </div>
    )
}

export default totalPrice;