/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import { SketchPicker } from "react-color";

import "../style/colorPicker.css"

const root = document.documentElement;

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: root.style.getPropertyValue(this.props.item),
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.hex });
    root.style.setProperty(this.props.item, this.state.color);
  };

  render() {
    return (
      <div className="color-picker">
        <div className="swatch" onClick={this.handleClick}>
          <div className="color" />
        </div>
        {this.state.displayColorPicker ? (
          <div className="popover">
            <div className="cover" onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
