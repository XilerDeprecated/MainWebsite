/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from 'react';

import { Link } from 'react-router-dom';


function PageNotFound() {
    return (
        <main id="content">
            <div id="PageNotFound">
                <h1>ERROR <span id="errorCode">404</span></h1>
                <h2>Page Not Found</h2>
                <Link to="/">Return to homepage</Link>
            </div>
        </main>
    );
}

export default PageNotFound;