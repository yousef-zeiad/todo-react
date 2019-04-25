import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style = {headerStyle}>
            <h1>TodoList</h1>
            <Link style ={linkStyle} to= '/'> Home </Link> | 
            <Link style ={linkStyle} to= '/about'> About </Link>
        </header>
    )
}

const headerStyle = {
    background: 'linear-gradient(to left,rgb(11, 28, 77) 0%, rgb(34, 117, 117) 100%)',
    color:'#fff',
    textAlign:'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
