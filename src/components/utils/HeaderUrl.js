/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import { Link } from "react-router-dom";

import HoverSection from "./HoverSection";

class HeaderUrl extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  render() {
    return (
      <li
        onMouseOver={this.hoverHandler}
        onMouseOut={this.outHandler}
        id={this.props.id}
        className="hoverable"
      >
        <Link to={this.props.url}>{this.props.name}</Link>
        {this.state.width > 1200 && <i className="arrow down"></i>}
        <HoverSection id={`${this.props.id}-section`} data={this.props.data} />
      </li>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.setState({width: window.innerWidth}));
  }

  hoverHandler = () => {
    if (document.documentElement.clientWidth < 1200) return;
    const section = document.getElementById(`${this.props.id}-section`);
    const main = document.getElementById(this.props.id);
    section.style.display = "block";
    main.style.height = this.props.height;
  };

  outHandler = () => {
    const section = document.getElementById(`${this.props.id}-section`);
    const main = document.getElementById(this.props.id);
    section.style.display = "none";
    main.style.height = "80px";
  };
}

export default HeaderUrl;
