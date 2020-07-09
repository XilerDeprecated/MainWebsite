/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

const root = document.documentElement;

async function performClick() {
  const image = document.querySelector("#preview img");
  image.style.top = "5px";
  await new Promise((r) => setTimeout(r, 50));
  image.style.top = "4px";
}

function generateText(message) {
  return message.split("\n");
}

function createCodeBlock(message, inEmbed, ...form) {
  return (
    <p className="code-block">
      {inEmbed ? (
        <span className={[...form, "code-block-in-embed"].join(" ")}>
          {message}
        </span>
      ) : (
        <span className={[...form, "code-block-in-embed"].join(" ")}>
          {message}
        </span>
      )}
    </p>
  );
}

function parseData(message, type) {
  switch (type) {
    case "css":
      message = message.split(/([:.{}'";\n])/);
      // console.log(message);
      let data = [];
      message.forEach((item, index) => {
        switch (item) {
          case ":":
            if (index >= 1) {
              data[index - 1] = (
                <span key={index} className="orange-brown">
                  {message[index - 1]}
                </span>
              );
              data[index] = item;
            }
            break;
          case ".":
            data[index] = (
              <span key={index} className="lightblue">
                .{message[index + 1]}
              </span>
            );
            message.splice(index + 1, 1);
            break;
          case "{":
          case "}":
          case ";":
          case " ":
          case "\n":
            data[index] = item;
            break;
          case "'":
          case '"':
            let extraMSG = [];
            for (let i = index; i < message.length; i++) {
              if (message[i] === item) {
                extraMSG.push(message[i]);
                delete message[i];
                if (i !== index) {
                  break;
                }
              } else {
                extraMSG.push(message[i]);
                delete message[i];
              }
            }
            console.log(extraMSG.join(""));
            data[index] = (
              <span key={index} className="light-aqua">
                {extraMSG.join("")}
              </span>
            );
            break;
          default:
            data[index] = (
              <span key={index} className="green">
                {item}
              </span>
            );
            break;
        }
      });
      // console.log(data);
      return data;
    default:
  }
}

function generateTextUsable(message, inEmbed = false) {
  if (message.startsWith("```") && message.endsWith("```")) {
    if (message.startsWith("```css ")) {
      return createCodeBlock(
        parseData(message.substring(7, message.length - 3), "css"),
        inEmbed,
        "code-block-wrapper"
      );
    } else {
      return createCodeBlock(
        message.substring(3, message.length - 3),
        inEmbed,
        "code-block-wrapper"
      );
    }
  } else if (message.startsWith("`") && message.endsWith("`")) {
    return (
      <p>
        <span className="code-line">
          {message.substring(1, message.length - 1)}
        </span>
      </p>
    );
  } else {
    return generateText(message).map((item) => (
      <p key={generateText(message).indexOf(item)}>{item}</p>
    ));
  }
}

class DiscordMessage extends React.Component {
  render() {
    root.style.setProperty("--embed-color", this.props.message.embed.color);
    return (
      <div className="discord-message">
        <div className="discord-message-wrapper">
          <img
            onClick={performClick}
            src={this.props.sender.icon}
            alt="Sender icon"
          />
          <div className="message">
            <div className="prev-data">
              <p className="bot">{this.props.sender.name}</p>
              {this.props.sender.isBot && <p className="bot-tag">bot</p>}
              <p className="date">{this.props.sender.date}</p>
            </div>
            <div className="message-content">
              <div className="no-embed">
                {generateTextUsable(this.props.message.noEmbed)}
              </div>
              <div className="embed-color">
                <div className="embed-content">
                  <div className="author">
                    <img
                      src={this.props.message.embed.author.icon}
                      alt="Author icon"
                      className="author-avatar"
                    />
                    <a href={this.props.message.embed.author.url}>
                      {this.props.message.embed.author.name}
                    </a>
                  </div>
                  <a
                    href={this.props.message.embed.title.url}
                    className="title"
                  >
                    {this.props.message.embed.title.text}
                  </a>
                  <div className="description">
                    {generateTextUsable(
                      this.props.message.embed.description,
                      true
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscordMessage;
