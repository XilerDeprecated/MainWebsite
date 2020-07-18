/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import "../../../style/main.css";
import "../../../style/embedGenerator.css";

import ColorPicker from "../../../components/ColorPicker";
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
  const [noEmbedMessage, setNoEmbedMessage] = React.useState(""),
    handleChangeNoEmbedMessage = (event) => {
      setNoEmbedMessage(event.target.value);
    };
  const [embedTitle, setEmbedTitle] = React.useState(""),
    handleChangeEmbedTitle = (event) => {
      setEmbedTitle(event.target.value);
    };
  const [embedTitleUrl, setEmbedTitleUrl] = React.useState(""),
    handleChangeEmbedTitleUrl = (event) => {
      setEmbedTitleUrl(event.target.value);
    };
  const [embedDescription, setEmbedDescription] = React.useState(""),
    handleChangeEmbedDescription = (event) => {
      setEmbedDescription(event.target.value);
    };
  const [embedAuthorName, setEmbedAuthorName] = React.useState(""),
    handleChangeEmbedAuthorName = (event) => {
      setEmbedAuthorName(event.target.value);
    };
  const [embedAuthorIconUrl, setEmbedAuthorIconUrl] = React.useState(""),
    handleChangeEmbedAuthorIconUrl = (event) => {
      setEmbedAuthorIconUrl(event.target.value);
    };
  const [embedAuthorUrl, setEmbedAuthorUrl] = React.useState(""),
    handleChangeEmbedAuthorUrl = (event) => {
      setEmbedAuthorUrl(event.target.value);
    };

  return (
    <div id="EmbedGenerator">
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <main itemScope>
        <div id="inputs">
          <h4>Un embedded:</h4>
          <textarea
            name="noEmbed"
            id="noEmbed"
            onChange={handleChangeNoEmbedMessage}
            defaultValue={noEmbedMessage}
            placeholder="This content will not be embedded"
          />
          <h4>Embed:</h4>
          <div className="title">
            <input
              type="text"
              name="embedTitle"
              id="embedTitle"
              onChange={handleChangeEmbedTitle}
              defaultValue={embedTitle}
              placeholder="Embed title"
            />
            <ColorPicker item="--embed-color" />
          </div>
          <input
            type="text"
            name="embedUrl"
            id="embedUrl"
            onChange={handleChangeEmbedTitleUrl}
            defaultValue={embedTitleUrl}
            placeholder="Embed title url"
          />
          <textarea
            name="embedContent"
            id="embedContent"
            onChange={handleChangeEmbedDescription}
            defaultValue={embedDescription}
            placeholder="Your main embed content"
          />
          <h5>Author:</h5>
          <input
            type="text"
            name="authorName"
            id="authorName"
            onChange={handleChangeEmbedAuthorName}
            defaultValue={embedAuthorName}
            placeholder="Author Name"
          />
          <input
            type="text"
            name="authorIconUrl"
            id="authorIconUrl"
            onChange={handleChangeEmbedAuthorIconUrl}
            defaultValue={embedAuthorIconUrl}
            placeholder="Author icon url"
          />
          <input
            type="text"
            name="authorUrl"
            id="authorUrl"
            onChange={handleChangeEmbedAuthorUrl}
            defaultValue={embedAuthorUrl}
            placeholder="Author url"
          />
        </div>
        <h3>Preview:</h3>
        <div id="preview">
          <DiscordMessage
            sender={{
              icon: "/assets/logoUsable-64x.png",
              name: "Xiler",
              isBot: true,
              date: `Today at ${new Date().getHours()}:${new Date().getMinutes()}`,
            }}
            message={{
              noEmbed: noEmbedMessage,
              embed: {
                color: "#4f545c",
                author: {
                  icon: embedAuthorIconUrl,
                  name: embedAuthorName,
                  url: embedAuthorUrl,
                },
                title: {
                  text: embedTitle,
                  url: embedTitleUrl,
                },
                description: embedDescription,
                // "Foo bar\n ```asciidoc = Blue =\nblue above equals signs\n=====\nblue above dashes\n-----\n[Orange]\nOrange:: grey\n- hyphen\n* bullet point```",
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
