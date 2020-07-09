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

class DiscordMessage extends React.Component {
  render() {
      root.style.setProperty("--embed-color", this.props.message.embed.color)
    return (
      <div className="discord-message">
        <div className="discord-message-wrapper">
          <img onClick={performClick} src={this.props.sender.icon} alt="Sender icon"/>
          <div className="message">
            <div className="prev-data">
              <p className="bot">{this.props.sender.name}</p>
              {this.props.sender.isBot && <p className="bot-tag">bot</p>}
              <p className="date">{this.props.sender.date}</p>
            </div>
            <div className="message-content">
              <div className="no-embed">
                {this.props.message.noEmbed.map((item) => (
                  <p>{item}</p>
                ))}
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
                    {this.props.message.embed.description.map((item) => (
                      <p>{item}</p>
                    ))}
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
