import React from 'react'
import Nav from './Nav'
import './App.css'
import ItemPage from './ItemPage'

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

let testItems = [
    {
        "id" : 1,
        "name": "Learning React: Functional Web Development with React and Redux ",
        "image" : "https://images-eu.ssl-images-amazon.com/images/I/51Q43WRXJzL._SX260_.jpg",
        "price" : "878.75",
        "description" : "Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads"
    },
    {
        "id" : 2,
        "name": "Pears Soft and Fresh Shower Gel, 250ml ",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/51CiQj71YzL._SX522_.jpg",
        "price" : "145.00",
        "description" : "Made with 98 percent pure glycerin, Dermatologically tested to be mild on skin"
    },
    {
        "id" : 3,
        "name": "Classmate Pulse 6 Subject Notebook ",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/71aQkIgM4dL._SX425_.jpg",
        "price" : "120.00",
        "description" : "6 Subject Notebook-Unruled, 300 Pages, Spiral Binding, Soft Cover, 240mm*180mm "
    },
    {
        "id" : 4,
        "name": "Mesh Desk Organizer, Black ",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/81NpfftEBDL._SX522_.jpg",
        "price" : "449.00",
        "description" : "Desk organizer - made of black, metal wire mesh. Divided compartments keep pens, pencils, markers, and more organized "
    },
    {
        "id" : 5,
        "name": "Upon an Old Wall Dreaming",
        "image" : "https://images-eu.ssl-images-amazon.com/images/I/51Wii3dYmSL.jpg",
        "price" : "252.70",
        "description" : "Ruskin Bond’s writing brings the world to us in profound and remarkable ways. His signature style is simplicity itself, but the themes he tackles are big, deep and universal"
    }
];