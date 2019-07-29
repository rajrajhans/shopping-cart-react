import React from 'react'
import './Nav.css'

class Nav extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render() {
        return (
            <nav className={"App-nav"}>
                <ul>
                    <li className={`App-nav-item ${this.props.activeTab === 0 && 'selected'}`}>
                        <a onClick={() => this.props.handleTabChange(0)}>Items</a>
                    </li>

                    <li className={`App-nav-item ${this.props.activeTab === 1 && 'selected'}`}>
                        <a onClick={() => this.props.handleTabChange(1)}>Cart</a>
                    </li>
                </ul>
            </nav>
        )
    }

}
export default Nav;