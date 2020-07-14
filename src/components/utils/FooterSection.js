/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

function FooterSection(props) {
    return (
        <div className="footer-section">
          <h2>{props.title.toUpperCase()}</h2>
          <ul>
            {props.items.map(item => <li key={props.items.indexOf(item)}>{item}</li>)}
          </ul>
        </div>
    );
}

export default FooterSection;
