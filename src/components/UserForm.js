import React, { Component } from "react"
import { products } from "./Products"

let itemId = 3;

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {};

    }

    addItem = (e) => {
        e.preventDefault()
        let searchItem = products.find(product => {
            if (product.name === this.state.product) {
                return product
            }
        });
        let itemToAdd = { 
                id: ++itemId, 
                product: { 
                    id: searchItem.id, 
                    name: searchItem.name, 
                    price: searchItem.price 
                }, 
                quantity: this.state.quantity }
        this.props.addItem(itemToAdd)
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form>
                <div className="form-group container">
                    <p>
                        <label>Qantity</label><br />
                        <input type="text" onChange={this.onChange} name="quantity" />
                    </p>
                    <p>
                        <label>Products</label><br />
                        <select  onChange={this.onChange} name="product">
                            <option selected disabled hidden>Select an Option</option>
                            {products.map((product, key) =>  <option key={key}>{product.name}</option>)}
                        </select>
                    </p>
                    <button type="submit" onClick={this.addItem} className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }

}

export default UserForm;