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
      <footer itemScope>
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
              <Link to="/services/websites">Websites</Link>,
              <Link to="/services/minecraft">Minecraft Servers</Link>,
              <Link to="/services/cs">CS:GO Servers</Link>,
              <Link to="/services/discord">Discord Bots</Link>,
            ]}
          />
          <FooterSection
            title="community"
            items={[
              <a href="https://forum.xiler.net/">Forums</a>,
              <Link to="/community/servers">Servers</Link>,
              <a href="https://dc.xiler.net">Discord</a>,
              <Link to="/community/discord">Discord Bot</Link>,
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
            <img src="/assets/logo-64x.png" alt="Copyright icon" />
            <p>
              Copyright ©{new Date().getFullYear()}
              <span className="bold">Xiler</span>
            </p>
          </div>
          <ul id="socials">
            <li>
              <a target="_blanc" href="https://dc.xiler.net">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="1 0 21.06 21"
                >
                  <path d="m 20.642781,0.02902056 c 1.355998,0.0021555 1.38624,0.0012189 1.38624,1.36921884 0.0091,0.6694863 0.06846,17.3005036 0.0028,18.0001156 0.03202,1.269488 0.03802,1.791533 -1.916693,1.827687 l -17.6708485,-1e-6 c -1.356,0 -1.44643465,-0.05926 -1.4442805,-1.42726 L 1.0290206,1.3692189 C 1.0311747,0.00122056 1.0302411,-0.00215549 2.3862394,0 Z M 14.908,15.672 C 17.56,15.588 18.58,13.848 18.58,13.848 18.58,9.984 16.852,6.852 16.852,6.852 15.124,5.556 13.48,5.592 13.48,5.592 L 13.312,5.784 C 15.352,6.408 16.3,7.308 16.3,7.308 15.052,6.624 13.828,6.288 12.688,6.156 11.824,6.06 10.996,6.084 10.264,6.18 L 10.06,6.204 C 9.64,6.24 8.62,6.396 7.336,6.96 6.892,7.164 6.628,7.308 6.628,7.308 c 0,0 0.996,-0.948 3.156,-1.572 L 9.664,5.592 c 0,0 -1.644,-0.036 -3.372,1.26 0,0 -1.728,3.132 -1.728,6.996 0,0 1.008,1.74 3.66,1.824 0,0 0.444,-0.54 0.804,-0.996 -1.524,-0.456 -2.1,-1.416 -2.1,-1.416 l 0.336,0.204 0.048,0.036 0.047,0.027 0.014,0.006 0.047,0.027 c 0.3,0.168 0.6,0.3 0.876,0.408 0.492,0.192 1.08,0.384 1.764,0.516 0.9,0.168 1.956,0.228 3.108,0.012 0.564,-0.096 1.14,-0.264 1.74,-0.516 0.42,-0.156 0.888,-0.384 1.38,-0.708 0,0 -0.6,0.984 -2.172,1.428 0.36,0.456 0.792,0.972 0.792,0.972 z m -5.58,-5.604 c -0.684,0 -1.224,0.6 -1.224,1.332 0,0.732 0.552,1.332 1.224,1.332 0.684,0 1.224,-0.6 1.224,-1.332 0.012,-0.732 -0.54,-1.332 -1.224,-1.332 z m 4.38,0 c -0.684,0 -1.224,0.6 -1.224,1.332 0,0.732 0.552,1.332 1.224,1.332 0.684,0 1.224,-0.6 1.224,-1.332 0,-0.732 -0.54,-1.332 -1.224,-1.332 z" />
                </svg>
              </a>
            </li>
            <li>
              <a target="_blanc" href="https://twitter.com/XilerNetwork">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                </svg>
              </a>
            </li>
            <li>
              <a target="_blanc" href="https://facebook.com/XilerNet">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </a>
            </li>
          </ul>
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
      "--background-color-darker",
      this.isDarkMode() ? "rgb(49, 51, 53)" : "rgb(207, 205, 208)"
    );
    root.style.setProperty(
      "--background-color-very-dark",
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
