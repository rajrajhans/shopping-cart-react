import React from 'react'
import Nav from './Nav'
import './App.css'
import ItemPage from './ItemPage'
import CartPage from './CartPage'
import testItems from './data'

class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state={
            activeTab: 0,
            cart : []
        };

        this.handleTabChange = this.handleTabChange.bind(this);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    handleTabChange = (i) => {
        this.setState({
            activeTab : i
            }
        )
    };

    onAddToCart(item){
        this.setState({
            cart : [...this.state.cart, item]
        });
        alert("Added")
    }

    renderContent(){
            switch(this.state.activeTab){
                default:
                case 0: return <ItemPage items={testItems} onAddToCart = {this.onAddToCart}/>;
                case 1: return <CartPage CartItems={this.state.cart}/>;
            }
    }

    render() {
        return(
            <div className={"App"}>
                <Nav activeTab = {this.state.activeTab} handleTabChange = {this.handleTabChange}/>
                <main className={"App-content"}>
                    {this.renderContent()}
                </main>
            </div>
        )
    }
}

export default App;
