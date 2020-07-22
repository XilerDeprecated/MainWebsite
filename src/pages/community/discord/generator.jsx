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
  const [noEmbedMessage, setNoEmbedMessage] = React.useState("");
  const [embedTitle, setEmbedTitle] = React.useState("");
  const [embedTitleUrl, setEmbedTitleUrl] = React.useState("");
  const [embedDescription, setEmbedDescription] = React.useState("");
  const [embedAuthorName, setEmbedAuthorName] = React.useState("");
  const [embedAuthorIconUrl, setEmbedAuthorIconUrl] = React.useState("");
  const [embedAuthorUrl, setEmbedAuthorUrl] = React.useState("");
  const [embedImageUrl, setEmbedImageUrl] = React.useState("");
  const [embedThumbnailUrl, setEmbedThumbnailUrl] = React.useState("");
  const [embedFooterText, setEmbedFooterText] = React.useState("");
  const [embedFooterTime, setEmbedFooterTime] = React.useState("");
  const [embedFooterIcon, setEmbedFooterIcon] = React.useState("");

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
            onChange={(event) => setNoEmbedMessage(event.target.value)}
            defaultValue={noEmbedMessage}
            placeholder="This content will not be embedded"
          />
          <h4>Embed:</h4>
          <div className="title">
            <input
              type="text"
              name="embedTitle"
              id="embedTitle"
              onChange={(event) => setEmbedTitle(event.target.value)}
              defaultValue={embedTitle}
              placeholder="Embed title"
            />
            <ColorPicker item="--embed-color" />
          </div>
          <input
            type="text"
            name="embedUrl"
            id="embedUrl"
            onChange={(event) => setEmbedTitleUrl(event.target.value)}
            defaultValue={embedTitleUrl}
            placeholder="Embed title url"
          />
          <textarea
            name="embedContent"
            id="embedContent"
            onChange={(event) => setEmbedDescription(event.target.value)}
            defaultValue={embedDescription}
            placeholder="Your main embed content"
          />
          <h5>Author:</h5>
          <input
            type="text"
            name="authorName"
            id="authorName"
            onChange={(event) => setEmbedAuthorName(event.target.value)}
            defaultValue={embedAuthorName}
            placeholder="Author Name"
          />
          <input
            type="text"
            name="authorIconUrl"
            id="authorIconUrl"
            onChange={(event) => setEmbedAuthorIconUrl(event.target.value)}
            defaultValue={embedAuthorIconUrl}
            placeholder="Author icon url"
          />
          <input
            type="text"
            name="authorUrl"
            id="authorUrl"
            onChange={(event) => setEmbedAuthorUrl(event.target.value)}
            defaultValue={embedAuthorUrl}
            placeholder="Author url"
          />
          <h5>Images:</h5>
          <input
            type="text"
            name="imageURL"
            id="imageURL"
            onChange={(event) => setEmbedImageUrl(event.target.value)}
            defaultValue={embedImageUrl}
            placeholder="Image URL"
          />
          <input
            type="text"
            name="thumbnailURL"
            id="thumbnailURL"
            onChange={(event) => setEmbedThumbnailUrl(event.target.value)}
            defaultValue={embedThumbnailUrl}
            placeholder="Thumbnail URL"
          />
          <h5>Footer:</h5>
          <input
            type="text"
            name="footerText"
            id="footerText"
            onChange={(event) => setEmbedFooterText(event.target.value)}
            defaultValue={embedFooterText}
            placeholder="Footer text"
          />
          <input
            type="text"
            name="footerIcon"
            id="footerIcon"
            onChange={(event) => setEmbedFooterIcon(event.target.value)}
            defaultValue={embedFooterIcon}
            placeholder="Footer icon url"
          />
          <input
            type="datetime-local"
            name="footerTime"
            id="footerTime"
            onChange={(event) => setEmbedFooterTime(event.target.value)}
            defaultValue={embedFooterTime}
            min="1971-01-01"
            max="9999-12-30"
          />
        </div>
        <h3>Preview:</h3>
        <div id="preview">
          <DiscordMessage
            sender={{
              icon: "/assets/logoUsable-64x.png",
              name: "Xiler",
              isBot: true,
              date: new Date(),
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
                image: embedImageUrl,
                thumbnail: embedThumbnailUrl,
                footer: {
                  text: embedFooterText,
                  date: embedFooterTime,
                  icon: embedFooterIcon,
                },
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
