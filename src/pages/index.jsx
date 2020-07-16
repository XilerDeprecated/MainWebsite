/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import { Link } from "react-router-dom";

import "../style/main.css";
import "../style/homePage.css";

// function Section(props) {
//   return (
//     <div id={props.id} className="section">
//       {props.left && <img src={props.icon} alt="" />}
//       <div className="section-content">
//         <a href={`#${props.id}`}>{props.title}</a>
//         <p>{props.content}</p>
//       </div>
//       {props.right && <img src={props.icon} alt="" />}
//     </div>
//   );
// }

function HomePage() {
  return (
    <main id="HomePage" itemScope>
      <div id="intro" itemScope>
        <div className="intro-wrapper">
          <h1>Your online service provider!</h1>
          <p>
            Whether you want to create your own network or join an already
            created one, Xiler is the place to be! We offer custom websites,
            Minecraft servers, CS:GO servers and custom Discord bots for your
            network, or join our already created servers!
          </p>
          <div className="senders">
            <Link to="/services/">Services</Link>
            <Link to="/community/">Community Services</Link>
            <a href="https://dc.xiler.net">Discord</a>
          </div>
        </div>
        <div className="intro-background">
          <img className="intro-bli" src="/assets/top-right-intro.png" alt="" />
          <img
            className="intro-tri"
            src="/assets/bottom-left-intro.png"
            alt=""
          />
        </div>
      </div>
      <div
        id="about"
        className="section"
        itemScope
        itemType="https://schema.org/about"
      >
        <img src="/assets/about-question.png" alt="" itemProp="image" />
        <div className="section-content">
          <h2>
            <a href="#about" className="sec-url" itemProp="url">
              Who/what are we?
            </a>
          </h2>
          <p itemProp="description">
            Xiler is a small company created by Arthur, with the intention to
            make it easy for everyone to create networks! We also want to offer
            our amazing community a great experience when they are using our
            community servers!
          </p>
        </div>
      </div>
      <div id="why-us" className="extra-sec" itemScope>
        <div className="extra-sec-wrapper">
          <h2>
            <a href="#why-us" className="sec-url">
              Why choose for us?
            </a>
          </h2>
          <p>
            We try to make our brand as easy to use for our customers, therefore
            we make everything easy to setup and use! Our services are
            relativity cheap! For any non custom props you should receive your
            item within 30 seconds!
          </p>
        </div>
      </div>
      <div
        id="offer"
        className="section"
        itemScope
        itemType="https://schema.org/about"
      >
        <div className="section-content">
          <h2>
            <a href="#offer" className="sec-url" itemProp="url">
              What do we offer?
            </a>
          </h2>
          <p itemProp="description">
            We offer an amazing and great experience throughout all our
            services! Amazing insights (statistics), live feed, insane
            customizability, cross network connection! And last but not least
            our amazing community services!
          </p>
        </div>
        <img src="/assets/Smile.png" alt="" itemProp="image" />
      </div>
    </main>
  );
}

export default HomePage;
