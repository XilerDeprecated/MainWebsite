/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../style/404.css'

function PageNotFound() {
    return (
        <main id="content">
            <Header />
            <div id="PageNotFound">
                <h1>Oops...<br />ERROR <span id="errorCode">404</span></h1>
                <h2>Page Not Found</h2>
                <Link to="/">Return to homepage</Link>
            </div>
            <Footer />
        </main>
    );
}

export default PageNotFound;