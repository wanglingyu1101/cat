import React from 'react';
import '../assets/css/header.css'
class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <h1 className="nav-header">{this.props.head}</h1>
            </header>
        )
    }
}

export default Header

