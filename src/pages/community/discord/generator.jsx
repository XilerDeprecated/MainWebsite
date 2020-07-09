/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import "../../../style/main.css";
import "../../../style/embedGenerator.css";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

/*
XilerEmbed-1111abcd.1111abcd|
{
    content-[Un-embedded content],
    name-[Embed Name],
    title-[Embed Title],
    color-[Embed Color],
    description-[Embed description],
    url-[Embed url],
    author|{
        name-[Author name],
        icon_url-[Author icon url],
        url-[Author url]
    },
    thumbnail_url-[Embed Thumbnail Url],
    image_url-[Embed Image Url],
    footer|{
        text-[Footer text],
        timestamp-[Footer Timestamp],
        icon_url-[Footer icon url]
    }
}
*/

async function performClick() {
  const image = document.querySelector("#preview img");
  image.style.top = "5px";
  await new Promise((r) => setTimeout(r, 50));
  image.style.top = "4px";
}

function EmbedGenerator() {
  return (
    <div id="EmbedGenerator">
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <title>Xiler | Discord Embed Generator</title>
      <Header />
      <main>
        <div id="inputs"></div>
        <div id="preview">
          <div className="discord-message">
            <div className="discord-message-wrapper">
              <img
                onClick={performClick}
                src="/assets/logoUsable-64x.png"
                alt="The Xiler icon"
              />
              <div className="message">
                <div className="prev-data">
                  <p className="bot">Xiler</p>
                  <p className="bot-tag">bot</p>
                  <p className="date">Today at 20:00</p>
                </div>
                <div className="message-content">
                  <div className="no-embed">
                    <p>
                      Hello, World
                      <br />
                      Foo Bar
                    </p>
                  </div>
                  <div className="embed-color">
                    <div className="embed-content">
                      <div className="author">
                        <img
                          src="https://avatars3.githubusercontent.com/u/38541241?s=460&u=60681c780526f228f457812b2fdd045724d32a11&v=4"
                          alt="Author icon"
                          className="author-avatar"
                        />
                        <a href="/">Author name (can point to URL)</a>
                      </div>
                      <a href="/" className="title"></a>
                      <div className="description">
                        <p>
                          Foo Bar
                          <br />
                          Hello, World
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="output"></div>
      </main>
      <Footer />
    </div>
  );
}

export default EmbedGenerator;
