/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import "../../../style/main.css";
import "../../../style/embedGenerator.css";

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
              noEmbed:
                'Some cool text here lul\n```autohotkey A_Red\n%Yellow%\n^Orange::\n123``` ```bash $Yellow\n"Cyan"\n#Gray\nthisIsBlue(){}\n#!Bash``` Ez embeds :)',
              embed: {
                color: "#4f545c",
                author: {
                  icon:
                    "https://avatars3.githubusercontent.com/u/38541241?s=460&u=60681c780526f228f457812b2fdd045724d32a11&v=4",
                  name: "Created By Arthurdw",
                  url: "https://github.com/Arthurdw",
                },
                title: {
                  text:
                    "Well, this is just an example embed that is temporary :)",
                  url: "/",
                },
                description:
                  "Foo bar\n ```asciidoc = Blue =\nblue above equals signs\n=====\nblue above dashes\n-----\n[Orange]\nOrange:: grey\n- hyphen\n* bullet point```",
              },
            }}
          />
        </div>
        <div id="output"></div>
      </main>
    </div>
  );
}

export default EmbedGenerator;
