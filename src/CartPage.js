import React from 'react'
import ItemPage from './ItemPage'

class CartPage extends ItemPage{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
            return(
                <ItemPage items={ this.props.CartItems} />
            )
    }
}

export default CartPage;