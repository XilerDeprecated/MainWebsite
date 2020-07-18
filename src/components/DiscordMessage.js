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

function createCodeBlock(message, inEmbed, index, ...form) {
  return (
    <p key={index} className="code-block">
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

function getFollowupUntilChar(message, character, index) {
  let extraMSG = [];
  for (let i = index; i < message.length; i++) {
    if (message[i] === character) {
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
  return [message, extraMSG.join("")];
}

function parseData(message, type) {
  let req, data;
  switch (type) {
    case "asciidoc":
      message = message.split(/([-=[\]*\n:])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "[":
            req = getFollowupUntilChar(message, "]", index);
            message = req[0];
            data[index] = (
              <span key={index} className="orange">
                {req[1]}
              </span>
            );
            break;
          case "-":
          case "*":
            if (message[index + 2] === "-" || message[index - 2] === "-") {
              if (message[index - 2] === "\n") {
                data[index - 3] = (
                  <span key={index - 1} className="lightblue">
                    {message[index - 3]}
                  </span>
                );
              }
              data[index] = (
                <span key={index} className="lightblue">
                  {message[index]}
                </span>
              );
            } else {
              data[index] = (
                <span key={index} className="orange">
                  {message[index]}
                </span>
              );
            }
            break;
          case ":":
            if (index >= 1) {
              data[index - 1] = (
                <span key={index} className="orange">
                  {message[index - 1]}:
                </span>
              );
              delete message[index];
            }
            break;
          case "=":
            if (message[index - 2] === "\n") {
              data[index - 3] = (
                <span key={index - 1} className="lightblue">
                  {message[index - 3]}
                </span>
              );
            }
            req = getFollowupUntilChar(message, "\n", index);
            message = req[0];
            data[index] = (
              <span key={index} className="lightblue">
                {req[1]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "autohotkey":
      message = message.split(/([A%^:1-9])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "A":
            if (message[index + 1].startsWith("_")) {
              data[index] = (
                <span key={index} className="red">
                  {message[index] + message[index + 1]}
                </span>
              );
              delete message[index + 1];
            }
            break;
          case "%":
            req = getFollowupUntilChar(message, "%", index);
            message = req[0];
            data[index] = (
              <span key={index} className="orange-brown">
                {req[1]}
              </span>
            );
            break;
          case "^":
            req = getFollowupUntilChar(message, ":", index);
            message = req[0];
            data[index] = (
              <span key={index} className="orange">
                {req[1]}
                {message[index + 4]}
              </span>
            );
            delete message[index + 4];
            break;
          case (item.match(/[1-9]/) || {}).input:
            data[index] = (
              <span key={index} className="light-aqua">
                {message[index]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "bash":
      message = message.split(/([$"'#()\n])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "$":
            data[index] = (
              <span key={index} className="orange-brown">
                :{message[index + 1]}
              </span>
            );
            delete message[index + 1];
            break;
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className="light-aqua">
                {req[1]}
              </span>
            );
            break;
          case "#":
            if (message[index + 1] === "!Bash") {
              data[index] = (
                <span key={index} className="orange">
                  {message[index] + message[index + 1]}
                </span>
              );
              delete message[index + 1];
            } else {
              req = getFollowupUntilChar(message, "\n", index);
              message = req[0];
              data[index] = (
                <span key={index} className="gray">
                  {req[1]}
                </span>
              );
            }
            break;
          case "(":
            if (message[index + 2] === ")") {
              data[index - 1] = (
                <React.Fragment key={index}>
                  <span key={index} className="lightblue">
                    {message[index - 1]}
                  </span>
                  {"("}
                </React.Fragment>
              );
            }
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "coffeescript":
      message = message.split(/(["'=])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "=":
            if (message[index + 1].trim().startsWith("->")) {
              data[index - 1] = (
                <span key={index} className="lightblue">
                  {message[index - 1]}
                </span>
              );
            }
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
                delete message[i];
              }
            }
            data[index] = (
              <span key={index} className="light-aqua">
                {extraMSG.join("")}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "cpp":
      message = message.split(/([#'" ])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "#":
            data[index] = <span className="orange">#{message[index + 1]}</span>;
            delete message[index + 1];
            break;
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className="light-aqua">
                {req[1]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "cs":
      message = message.split(/(["'#\n[1-9\]])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "#":
            data[index] = <span className="orange">#{message[index + 1]}</span>;
            delete message[index + 1];
            break;
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className="light-aqua">
                {req[1]}
              </span>
            );
            break;
          case (item.match(/[1-9]/) || {}).input:
            data[index] = (
              <span key={index} className="light-aqua">
                {message[index]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "css":
      message = message.split(/([: {}'";#()[\]\n])/);
      data = [];
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
          case "#":
            data[index] = (
              <span key={index} className="lightblue">
                .{message[index + 1]}
              </span>
            );
            message.splice(index + 1, 1);
            break;
          case "{":
          case "}":
          case "(":
          case ")":
          case ";":
          case " ":
          case "\n":
            data[index] = item;
            break;
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className="light-aqua">
                {req[1]}
              </span>
            );
            break;
          case "[":
            req = getFollowupUntilChar(message, "]", index);
            message = req[0];
            data[index] = (
              <span key={index} className="orange">
                {req[1]}
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
      return data;
    case "diff":
      message = message.split(/([-*!\n+])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "+":
          case "!":
            data[index] = (
              <span key={index} className="green">
                {item + message[index + 1]}
              </span>
            );
            delete message[index + 1];
            break;
          case "-":
          case "*":
            if (
              item + message[index + 2] + message[index + 4] ===
              item + item + item
            ) {
              data[index] = (
                <span key={index} className="gray">
                  {item + item + item + message[index + 5]}
                </span>
              );
              delete message[index + 2];
              delete message[index + 4];
              delete message[index + 5];
              break;
            } else if (item === "-") {
              data[index] = (
                <span key={index} className="red">
                  {item + message[index + 1]}
                </span>
              );
              delete message[index + 1];
              break;
            }
            data[index] = item; // Fallthrough error prevention
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "fix":
      message = message.split(/([=\n])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "=":
            data[index] = (
              <React.Fragment key={index}>
                <span style={{ color: "#b9bbbe" }}>=</span>
                <span className="light-aqua">{message[index + 1]}</span>
              </React.Fragment>
            );
            delete message[index + 1];
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return <span className="orange-brown">{data}</span>;
    case "glsl":
      message = message.split(/([#\n[1-9\]])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "#":
            data[index] = (
              <span key={index} className="orange">
                #{message[index + 1]}
              </span>
            );
            delete message[index + 1];
            break;
          case (item.match(/[1-9]/) || {}).input:
            data[index] = (
              <span key={index} className="light-aqua">
                {message[index]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "ini":
      message = message.split(/([[\];\n])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case ";":
            data[index] = (
              <span key={index} className="gray">
                ;{message[index + 1]}
              </span>
            );
            delete message[index + 1];
            break;
          case "[":
            req = getFollowupUntilChar(message, "]", index);
            message = req[0];
            data[index] = (
              <span key={index} className="lightblue">
                {req[1]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "json":
      message = message.split(/(["':])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span
                key={index}
                className={
                  message[index + 4] === ":" ? "orange-brown" : "light-aqua"
                }
              >
                {req[1]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "md":
      message = message.split(/([ -<>=.#"'[1-9[\]\]/*\n])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "<":
            req = getFollowupUntilChar(message, ">", index);
            message = req[0];
            let inner_msg = req[1]
              .substring(1, req[1].length - 1)
              .split(/([= ])/);
            inner_msg[0] = (
              <span key={index} className="lightblue">
                {inner_msg[0]}
              </span>
            );
            inner_msg.forEach((item, index) => {
              if (item === "=") {
                inner_msg[index] = (
                  <React.Fragment key={index}>
                    <span style={{ color: "#b9bbbe" }}>=</span>
                    <span className="light-aqua">{inner_msg[index + 1]}</span>
                  </React.Fragment>
                );
                delete inner_msg[index + 1];
              }
            });
            data[index] = (
              <React.Fragment key={index}>
                {"<"}
                <span className="orange-brown">{inner_msg}</span>

                {">"}
              </React.Fragment>
            );
            break;
          case "*":
            data[index] = (
              <span key={index} className="orange">
                *
              </span>
            );
            break;
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className="light-aqua">
                {req[1]}
              </span>
            );
            break;
          case "/":
            if (message[index + 2] === "*") {
              message[index] = "/*";
              delete message[index + 2];
              req = getFollowupUntilChar(message, "*", index);
              message = req[0];
              data[index] = (
                <span key={index} className="orange">
                  {req[1]}
                </span>
              );
            }
            break;
          case (item.match(/[1-9]/) || {}).input:
            if (message[index + 2] === ".") {
              data[index] = (
                <span key={index} className="orange">
                  {message[index]}.
                </span>
              );
              delete message[index + 2];
            } else {
              data[index] = message[index];
            }
            break;
          case ">":
            if (message[index + 2] !== "\n") {
              req = getFollowupUntilChar(message, "\n", index);
              message = req[0];
              data[index] = (
                <span key={index} className="gray">
                  {req[1]}
                </span>
              );
            } else {
              data[index] = message[index];
            }
            break;
          case "-":
          case "=":
            if (message[index - 2] === "\n") {
              let msg = "",
                indexes = [];
              for (let i = index - 3; i > 0; i--) {
                if (typeof message[i] !== "undefined") {
                  if (message[i] !== "\n") {
                    msg = message[i] + msg;
                  }
                }
                if (message[i] === "\n") {
                  break;
                }
                indexes.push(i);
              }
              indexes.forEach((idx) => {
                if (typeof message[idx] !== "undefined") {
                  delete message[idx];
                  delete data[idx];
                }
              });
              data[index - 3] = (
                <span key={index - 3} className="lightblue">
                  {msg}
                </span>
              );
            }
            req = getFollowupUntilChar(message, "\n", index);
            message = req[0];
            data[index] = (
              <span key={index} className="lightblue">
                {req[1]}
              </span>
            );
            break;
          case "#":
            req = getFollowupUntilChar(message, "\n", index);
            message = req[0];
            data[index] = (
              <span key={index} className="lightblue">
                {req[1]}
              </span>
            );
            break;
          case "[":
          case "(":
            req = getFollowupUntilChar(
              message,
              item === "[" ? "]" : ")",
              index
            );
            message = req[0];
            data[index] = (
              <React.Fragment key={index}>
                {"["}
                <span className={item === "[" ? "light-aqua" : "orange"}>
                  {req[1].substring(1, req[1].length - 1)}
                </span>
                {"]"}
              </React.Fragment>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "ml":
      message = message.split(/([ "'[1-9\]])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className={item === "'" ? "red" : "light-aqua"}>
                {req[1]}
              </span>
            );
            break;
          case (item.match(/[1-9]/) || {}).input:
            data[index] = (
              <span key={index} className="light-aqua">
                {message[index]}
              </span>
            );
            break;
          default:
          case "\n":
            if (/[A-Z]/.test(item[0])) {
              data[index] = <span className="orange-brown">{item}</span>;
            } else {
              data[index] = item;
            }
            break;
        }
      });
      return data;
    case "prolog":
      message = message.split(/([ "'[1-9\]])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className="light-aqua">
                {req[1]}
              </span>
            );
            break;
          case (item.match(/[1-9]/) || {}).input:
            data[index] = (
              <span key={index} className="light-aqua">
                {message[index]}
              </span>
            );
            break;
          default:
          case "\n":
            if (/[A-Z]/.test(item[0])) {
              data[index] = <span className="orange">{item}</span>;
            } else {
              data[index] = item;
            }
            break;
        }
      });
      return data;
    case "py":
      message = message.split(/([\n@"'#[1-9\]])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "@":
            if (
              message[index - 1] === "\n" ||
              message[index - 1] === "" ||
              message[index - 1] === null
            ) {
              data[index] = (
                <span key={index} className="orange">
                  @{message[index + 1]}
                </span>
              );
              delete message[index + 1];
            } else {
              data[index] = item;
            }
            break;
          case (item.match(/[1-9]/) || {}).input:
            data[index] = (
              <span key={index} className="light-aqua">
                {message[index]}
              </span>
            );
            break;
          case "#":
            data[index] = (
              <span key={index} className="gray">
                #{message[index + 1]}
              </span>
            );
            delete message[index + 1];
            break;
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className="light-aqua">
                {req[1]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "tex":
      return <span className="dark-blue">{message}</span>;
    case "xl":
      message = message.split(/([\n[1-9\]"'])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case (item.match(/[1-9]/) || {}).input:
            data[index] = (
              <span key={index} className="light-aqua">
                {message[index]}
              </span>
            );
            break;
          case "'":
          case '"':
            req = getFollowupUntilChar(message, item, index);
            message = req[0];
            data[index] = (
              <span key={index} className="light-aqua">
                {req[1]}
              </span>
            );
            break;
          default:
          case "\n":
            data[index] = item;
            break;
        }
      });
      return data;
    case "xml":
      message = message.split(/([<> ])/);
      data = [];
      message.forEach((item, index) => {
        switch (item) {
          case "<":
            req = getFollowupUntilChar(message, ">", index);
            message = req[0];
            let inner_msg = req[1]
              .substring(1, req[1].length - 1)
              .split(/([= ])/);
            inner_msg[0] = (
              <span key={index} className="lightblue">
                {inner_msg[0]}
              </span>
            );
            inner_msg.forEach((item, index) => {
              if (item === "=") {
                inner_msg[index] = (
                  <React.Fragment key={index}>
                    <span style={{ color: "#b9bbbe" }}>=</span>
                    <span className="light-aqua">{inner_msg[index + 1]}</span>
                  </React.Fragment>
                );
                delete inner_msg[index + 1];
              }
            });
            data[index] = (
              <React.Fragment key={index}>
                {"<"}
                <span className="orange-brown">{inner_msg}</span>

                {">"}
              </React.Fragment>
            );
            break;
          default:
            data[index] = item;
            break;
        }
      });
      return data;
    // case "name":
    //   message = message.split(/([splitters])/);
    //   data = [];
    //   message.forEach((item, index) => {
    //     switch (item) {
    //       default:
    //       case "\n":
    //         data[index] = item;
    //         break;
    //     }
    //   });
    //   return data;
    default:
      break;
  }
}

function generateTextUsable(message, inEmbed = false, index = 0) {
  if (message.startsWith("```") && message.endsWith("```")) {
    let returnValue;
    [
      "css",
      "asciidoc",
      "autohotkey",
      "bash",
      "coffeescript",
      "cpp",
      "cs",
      "diff",
      "fix",
      "glsl",
      "ini",
      "json",
      "md", // TODO: FIX MARKDOWN SUPPORT
      "ml",
      "prolog",
      "py",
      "tex",
      "xl",
      "xml",
    ].forEach((item) => {
      if (
        message.startsWith(`\`\`\`${item} `) ||
        message.startsWith(`\`\`\`${item}\n`)
      ) {
        returnValue = createCodeBlock(
          parseData(
            message.substring(item.length + 4, message.length - 3),
            item
          ),
          inEmbed,
          index,
          "code-block-wrapper"
        );
        return;
      }
    });
    return (
      returnValue ||
      createCodeBlock(
        message.substring(3, message.length - 3),
        inEmbed,
        "code-block-wrapper",
        index
      )
    );
  } else if (message.startsWith("`") && message.endsWith("`")) {
    return (
      <p key={index}>
        <span className="code-line">
          {message.substring(1, message.length - 1)}
        </span>
      </p>
    );
  } else {
    return (
      <React.Fragment key={index}>
        {generateText(message).map((item) => (
          <p key={generateText(message).indexOf(item)}>{item}</p>
        ))}
      </React.Fragment>
    );
  }
}

function messageSplitter(message, splitter) {
  const msg = message.split(new RegExp(`(?<=${splitter})`, "g"));
  let data = [];
  msg.forEach((mess, index) => {
    if (index + 1 === msg.length) {
      data.push(mess);
    } else if (mess.endsWith(splitter) && msg[index + 1].endsWith(splitter)) {
      const prev = mess.substring(0, mess.length - 3);
      data.push(prev);
      data.push(`${splitter + msg[index + 1]}`);
      delete msg[index + 1];
    }
  });
  return data;
}

function generateDisplayableText(message, inEmbed = false) {
  return (
    <>
      {messageSplitter(message, "```").map((msg, index) =>
        generateTextUsable(msg, inEmbed, index)
      )}
    </>
  );
}

class DiscordMessage extends React.Component {
  render() {
    root.style.setProperty("--embed-color", this.props.message.embed.color);
    return (
      <div className="discord-message" itemScope>
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
              {this.props.message.noEmbed && <div className="no-embed">
                {generateDisplayableText(this.props.message.noEmbed)}
              </div>}
              <div className="embed-color">
                <div className="embed-content">
                  {this.props.message.embed.author.name && <div className="author">
                    {this.props.message.embed.author.icon && <img
                      src={this.props.message.embed.author.icon}
                      alt=""
                      className="author-avatar"
                    />}
                    <a
                      href={
                        this.props.message.embed.author.url
                          ? this.props.message.embed.author.url.startsWith(
                              "http"
                            )
                            ? this.props.message.embed.author.url
                            : `http://${this.props.message.embed.author.url}`
                          : ""
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {this.props.message.embed.author.name}
                    </a>
                  </div>}
                  <a
                    href={
                      this.props.message.embed.title.url
                        ? this.props.message.embed.title.url.startsWith("http")
                          ? this.props.message.embed.title.url
                          : `http://${this.props.message.embed.title.url}`
                        : ""
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    {this.props.message.embed.title.text}
                  </a>
                  <div className="description">
                    {generateDisplayableText(
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
