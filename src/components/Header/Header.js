import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

const Header = () => {
    return (
        <div>
            <h1 className="text-danger">Header {element}</h1>
        </div>
    );
};

export default Header;