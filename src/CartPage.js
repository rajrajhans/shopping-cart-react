import React from 'react'
import ItemPage from './ItemPage'

class CartPage extends ItemPage{
    constructor(props){
        super(props);

        this.countItems = this.countItems.bind(this);
    }

    countItems(cart){
        let cartIds = [];
        let netCount = 0;
        let cartIdCount = {};
        for (let i = 0; i < cart.length; i++){
            if (cart[i].id in cartIds){
                cartIdCount[cart[i].id] += 1;
            }
            else{
                netCount += 1;
                cartIds.push(cart[i].id);
                cartIdCount[cart[i].id] = 1;
            }
        }
        console.log("cartIdCount", cartIdCount);
        console.log("cartIds", cartIds);

        return cartIdCount;
    }

    render(){
            return(
                //<ItemPage items={this.props.CartItems} />
                <div>
                    <p>{this.countItems(this.props.CartItems)['1']}</p>
                </div>
                )
    }
}

export default CartPage;