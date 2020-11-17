import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className='header'>
            <h2>i am a header</h2>
            <PersonIcon fontSize="large" className="header_icon" />
        </div>
    )
}

export default Header;
