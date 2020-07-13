/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import { Link } from "react-router-dom";

import "../style/main.css";
import "../style/homePage.css";

function Section(props) {
  return (
    <div id={props.id} className="section">
      {props.left && <img src={props.icon} alt="" />}
      <div className="section-content">
        <a href={`#${props.id}`}>{props.title}</a>
        <p>{props.content}</p>
      </div>
      {props.right && <img src={props.icon} alt="" />}
    </div>
  );
}

function HomePage() {
  return (
    <main id="HomePage">
      <div id="intro">
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
          <img
            className="intro-bli"
            src="/assets/bottom-left-intro.png"
            alt=""
          />
          <img className="intro-tri" src="/assets/top-right-intro.png" alt="" />
        </div>
      </div>
      <Section
        id="about"
        icon="/assets/about-question.png"
        title="Who/what are we?"
        content="TODO: FILL THIS IN"
        left="true"
      />
    </main>
  );
}

export default HomePage;
