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
              { name: "Websites", url: "services/websites", route: true },
              { name: "Minecraft Servers", url: "services/minecraft", route: true },
              { name: "CS:GO Servers", url: "services/cs", route: true },
              { name: "Discord Bots", url: "services/discord", route: true },
            ]}
          />
          <HeaderUrl
            name="Community"
            id="li-community"
            url="#"
            height="184px"
            data={[
              { name: "Forums", url: "https://forum.xiler.net/", target: "_self", route: false },
              { name: "Servers", url: "community/servers", route: true },
              {
                name: "Discord",
                url: "https://dc.xiler.net",
                target: "_blanc",
                route: false
              },
            ]}
          />
          <li>
            <a href="https://buy.xiler.net/">Store</a>
          </li>
          <li>
            <Link id="login" to="/login">
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
