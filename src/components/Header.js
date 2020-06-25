/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import { Link } from "react-router-dom";

import "../style/header.css";

import HeaderUrl from "./utils/HeaderUrl";

class Header extends React.Component {
  constructor() {
    super();
    this.hamburger = null;
    this.popout = null;
  }

  componentDidMount() {
    this.hamburger = document.querySelector(".hamburger");
    this.popout = document.querySelector("#popout");
  }

  render() {
    return (
      <header>
        <div id="headerKeeperMobile"></div>
        <button
          onClick={this.toggleHamburger}
          className="hamburger hamburger--collapse"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <img id="icon" src="./assets/logo-128x.png" alt="Xiler Icon" />
        <ul id="popout">
          <li>
            <Link to="/">Home</Link>
          </li>
          <HeaderUrl
            name="Services"
            id="li-services"
            url="#"
            height="310px"
            data={[
              { name: "Websites", url: "#", target: "_self" },
              { name: "Minecraft Servers", url: "#", target: "_self" },
              { name: "CS:GO Servers", url: "#", target: "_self" },
              { name: "Discord Bots", url: "#", target: "_self" },
            ]}
          />
          <HeaderUrl
            name="Community"
            id="li-community"
            url="#"
            height="184px"
            data={[
              { name: "Forums", url: "#", target: "_self" },
              { name: "Servers", url: "community/servers", target: "_self" },
              {
                name: "Discord",
                url: "https://dc.xiler.net",
                target: "_blanc",
              },
            ]}
          />
          <li>
            <Link to="#">Store</Link>
          </li>
          <li>
            <Link id="login" to="#">
              Login
            </Link>
          </li>
        </ul>
      </header>
    );
  }

  toggleHamburger = () => {
    this.hamburger.classList.toggle("is-active");
    this.popout.classList.toggle("active");
  };
}

export default Header;
