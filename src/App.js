import React from 'react'
import Nav from './Nav'
import './App.css'

class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    renderContent(){
        return(
            <span>Empty</span>
        )
    }

    render() {
        return(
            <div className={"App"}>
                <Nav />
                <main className={"App-content"}>
                    {this.renderContent()}
                </main>
            </div>
        )
    }
}

export default App;