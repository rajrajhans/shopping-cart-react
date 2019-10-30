import React from 'react'
import './ItemPage.css'

class ItemPage extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className={"ItemsContainer"}>
                {this.props.items.map(item => (
                    <Item key = {item.id} item ={item} onAddToCart = {() => this.props.onAddToCart(item)} />
                ))}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

class Item extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={"ItemContainer"}>
                <div className={"ItemImage"}>
                    <img src={this.props.item.image}  alt={"product"} width={120}/>
                </div>

                <span className={"ItemName"}>
                    {this.props.item.name}
                </span>

                <span className={"ItemPrice"}>
                    ₹ {this.props.item.price}
                </span>

                <span className={"ItemDes"}>
                    {this.props.item.description}
                </span>

                <button className={"addToCart"} onClick={this.props.onAddToCart}>
                    Add To Cart
                </button>

            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

export default ItemPage;