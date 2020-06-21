/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from 'react';

import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img id="icon" src="./assets/logo-128x.png" alt="Xiler Icon" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Community</Link></li>
                    <li><Link to="#">Store</Link></li>
                    <li><Link id="login" to="#">Login</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;
