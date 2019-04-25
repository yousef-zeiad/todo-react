import React from 'react';

function Header() {
    return (
        <header style = {headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: 'linear-gradient(to left,rgb(11, 28, 77) 0%, rgb(34, 117, 117) 100%)',
    color:'#fff',
    textAlign:'center',
    padding: '10px'
}

export default Header;
