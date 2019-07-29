import React from 'react'
import Nav from './Nav'
import './App.css'
import ItemPage from './ItemPage'
import testItems from './data'

class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state={
            activeTab: 0
        };

        this.handleTabChange = this.handleTabChange.bind(this)
    }

    handleTabChange = (i) => {
        this.setState({
            activeTab : i
            }
        )
    };

    renderContent(){
            switch(this.state.activeTab){
                default:
                case 0: return <ItemPage items={testItems}/>;
                case 1: return <span> cart wala content</span>;
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
