import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style/header.css";

import HeaderUrl from "./utils/HeaderUrl";

const Header = () => {
    const [hamburger, setHamburger] = useState(false);
    const [popout, setPopout] = useState(false);

    const toggleHamburger = () => {
        setHamburger(!hamburger);
        setPopout(!popout);
    }

    return (
        <header>
            <div id="headerKeeperMobile"></div>
            <button
                onClick={toggleHamburger}
                className={"hamburger hamburger--collapse " + (hamburger ? "is-active" : "")}
                type="button"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <img id="icon" src="/assets/logo-128x.png" alt="Xiler Icon" />
            <ul id="popout" className={popout ? "active" : ""}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <HeaderUrl
                    name="Services"
                    id="li-services"
                    url="#"
                    height="310px"
                    data={[
                        {
                            name: "Websites",
                            url: "/services/websites",
                            route: true,
                        },
                        {
                            name: "Minecraft Servers",
                            url: "/services/minecraft",
                            route: true,
                        },
                        {
                            name: "CS:GO Servers",
                            url: "/services/cs",
                            route: true,
                        },
                        {
                            name: "Discord Bots",
                            url: "/services/discord",
                            route: true,
                        },
                    ]}
                />
                <HeaderUrl
                    name="Community"
                    id="li-community"
                    url="#"
                    height="184px"
                    data={[
                        {
                            name: "Forums",
                            url: "https://forum.xiler.net/",
                            target: "_self",
                            route: false,
                        },
                        {
                            name: "Servers",
                            url: "/community/servers",
                            route: true,
                        },
                        {
                            name: "Discord",
                            url: "https://dc.xiler.net",
                            target: "_blanc",
                            route: false,
                        },
                        {
                            name: "Discord Bot",
                            url: "/community/discord",
                            route: true,
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
};

export default Header;
