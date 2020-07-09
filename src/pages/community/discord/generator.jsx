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
import DiscordMessage from "../../../components/DiscordMessage";

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
          <DiscordMessage
            sender={{
              icon: "/assets/logoUsable-64x.png",
              name: "Xiler",
              isBot: true,
              date: `Today at ${new Date().getHours()}:${new Date().getMinutes()}`,
            }}
            message={{
              noEmbed: "Hello, World\nFoo Bar",
              embed: {
                color: "#4f545c",
                author: {
                  icon:
                    "https://avatars3.githubusercontent.com/u/38541241?s=460&u=60681c780526f228f457812b2fdd045724d32a11&v=4",
                  name: "Author name (can point to URL)",
                  url: "/",
                },
                title: {
                  text: "Title",
                  url: "/",
                },
                description: "```bash $Yellow\n\"Cyan\"\n#Gray\nthisIsBlue(){}\n#!Bash```",
              },
            }}
          />
        </div>
        <div id="output"></div>
      </main>
      <Footer />
    </div>
  );
}

export default EmbedGenerator;
