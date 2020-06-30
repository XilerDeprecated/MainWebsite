/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import { Link } from "react-router-dom";

import FooterSection from "./utils/FooterSection";
import "../style/footer.css";

const root = document.documentElement;

class Footer extends React.Component {
  constructor() {
    super();
    this.buttonTheme = null;
  }

  render() {
    this.updateTheme();
    return (
      <footer>
        <div id="footer-container">
          <FooterSection
            title="contact"
            items={[
              <a href="https://dc.xiler.net">dc.xiler.net</a>,
              <a href="mailto:support@xiler.net">support@xiler.net</a>,
            ]}
          />
          <FooterSection
            title="services"
            items={[
              <Link to="services/websites">Websites</Link>,
              <Link to="services/minecraft">Minecraft Servers</Link>,
              <Link to="services/cs">CS:GO Servers</Link>,
              <Link to="services/discord">Discord Bots</Link>,
            ]}
          />
          <FooterSection
            title="community"
            items={[
              <a href="https://forum.xiler.net/">Forums</a>,
              <Link to="community/servers">Servers</Link>,
              <a href="https://dc.xiler.net">Discord</a>,
            ]}
          />
          <FooterSection
            title="extra's"
            items={[
              <a href="https://legal.xiler.net/ToS">Terms of Service</a>,
              <a href="https://legal.xiler.net/License">License</a>,
              <button
                onClick={this.changeTheme}
                className={`website-theme ${
                  this.isDarkMode() ? "light" : "dark"
                }`}
              >
                {this.isDarkMode() ? "Light Mode" : "Dark Mode"}
              </button>,
            ]}
          />
        </div>
        <div id="copyright">
          <div id="copyright-container">
            <img src="./assets/logo-64x.png" alt="Copyright icon" />
            <p>Copyright ©{new Date().getFullYear()}</p>
            <p>Xiler</p>
          </div>
        </div>
      </footer>
    );
  }

  changeTheme = () => {
    localStorage.setItem("theme", this.isDarkMode() ? "light" : "dark");
    this.updateTheme();
    this.buttonTheme.innerText = this.isDarkMode() ? "Light Mode" : "Dark Mode";
  };

  updateTheme() {
    root.style.setProperty(
      "--background-color",
      this.isDarkMode() ? "rgb(70, 73, 76)" : "rgb(220, 220, 221)"
    );
    root.style.setProperty(
      "--text-color",
      this.isDarkMode() ? "rgb(220, 220, 221)" : "rgb(70, 73, 76)"
    );
    root.style.setProperty(
      "--header-background-color",
      this.isDarkMode() ? "rgb(39, 41, 42)" : "rgb(197, 195, 198)"
    );
    root.style.setProperty(
      "--footer-background-color",
      this.isDarkMode() ? "rgb(39, 41, 42)" : "rgb(197, 195, 198)"
    );
    root.style.setProperty(
      "--accent-color-light",
      this.isDarkMode() ? "rgb(43, 186, 222)" : "rgb(25, 133, 161)"
    );
  }

  isDarkMode() {
    return localStorage.getItem("theme") !== "light";
  }

  componentDidMount() {
      this.buttonTheme = document.querySelector(".website-theme");
  }
}

export default Footer;
