import React from 'react'

import './header.scss';

const Header = ({ message }) => {
    return (
        <header>
            <p>{ message }</p>
        </header>
    )
}

export default Header;