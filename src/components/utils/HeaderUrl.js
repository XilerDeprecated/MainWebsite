/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from 'react';

import { Link } from 'react-router-dom';

import HoverSection from './HoverSection';

class HeaderUrl extends React.Component {
    render() {
        return (
            <li onMouseOver={this.hoverHandler} onMouseOut={this.outHandler} id={this.props.id}>
                <Link to={this.props.url}>{this.props.name}</Link>
                <HoverSection id={`${this.props.id}-section`} data={this.props.data} />
            </li>
        );
    }

    hoverHandler = () => {
        const section = document.getElementById(`${this.props.id}-section`);
        const main = document.getElementById(this.props.id);
        section.style.display = "block";
        main.style.height = this.props.height;
    }

    outHandler = () => {
        const section = document.getElementById(`${this.props.id}-section`);
        const main = document.getElementById(this.props.id);
        section.style.display = "none";
        main.style.height = "80px";
    }
}

export default HeaderUrl;
