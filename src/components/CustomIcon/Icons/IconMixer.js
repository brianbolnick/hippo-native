import React, { Component } from "react";
import PropTypes from "prop-types";
import { Svg } from "expo";
import Icon from "../CustomIcon";

const { Path, G } = Svg;

export default class IconMixer extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon
        size={size}
        viewBoxWidth="49.6"
        viewBoxHeight="48.5"
        {...this.props}
      >
        <G fill={color || "currentColor"}>
          <Path
            fill={color}
            d="M50.1,91.1H27.7a6.8,6.8,0,0,1-2.2-.9c.6-.4,1.1-1.1,1.7-1.3s1.4-.5,1-1.9a43.4,43.4,0,0,1-1.3-7.2c-.3-2.2.8-3.1,2.9-2.9a20.9,20.9,0,0,1,2.5,0c2,.1,2.7-.9,2.6-2.7a26.7,26.7,0,0,1,0-4c.1-2-.4-3.2-2.7-3.1s-3.4-1.7-3.3-4-.1-4,0-6c.1-5.8,3.2-9.3,8.8-10.2,1.5-.2,2.6-.1,3.3-2.1a3.1,3.1,0,0,1,5.9,0c.8,2.4,2.2,2,3.8,2.1,6.2,0,12.3-.1,18.5,0S75.6,48,75,53.4a19.4,19.4,0,0,1-1,4.9c-.3,1-1.2,2.5-1.9,2.6-3.2.3-3,2.4-3,4.7.1,6.4.1,12.9,0,19.4-.1,2.6.4,4.2,3.4,4,.6-.1,1.3.6,2,1a12.8,12.8,0,0,1-2.4,1.1c-4.8.1-9.7,0-14.5,0Zm-.8-2.2c5.7,0,10-.2,14.3,0s3.3-1.1,3.3-3.5q-.2-10.5,0-21c0-2.2-.5-3.5-3-3.3-.8,0-1.6-.8-2.4-1.2l2.5-1a7.5,7.5,0,0,1,1.5,0c6.1-.1,6.1-.1,6.7-6,.4-3.2.2-3.5-2.9-3.6h-30a7.6,7.6,0,0,0-6.4,3.3c-2.3,3.2-1.9,6.9-1.5,10.5,0,.7,1.3,1.5,2.1,1.6a33.1,33.1,0,0,0,4.5.2c1.8,0,2.9-.8,2.8-2.7s1.4-3.4,3.7-3.3H52c2.1,0,3.2.8,3.1,2.9C54.9,70.9,56.9,80.3,49.3,88.9Zm3.6-19.7c0-8.6,0-8.6-7.1-8.1-1.8.1-2.8.6-2.7,2.6s-1.2,3.4-3.4,3.4-2.7,1.3-2.6,3.2a20.4,20.4,0,0,1,0,3.5c-.2,2.4.8,3.3,3.2,3.1,5.2-.4,4.8.2,4.8,5.5a22.1,22.1,0,0,1-.6,3.4,29.3,29.3,0,0,0-.5,2.9,8.7,8.7,0,0,0,2.9-1.4,19.9,19.9,0,0,0,3-4C52.6,78.9,53,73.9,52.9,69.2ZM35.8,79.1h0a26.8,26.8,0,0,0-4.9.1,2.6,2.6,0,0,0-1.7,1.8,7.1,7.1,0,0,0,5.5,7.4,6.6,6.6,0,0,0,7.5-4.3c1.5-3.8.8-5-3.4-5.1ZM44.6,46c-.1-.2-.2-.6-.4-.6s-.6.2-.9.3l.8.9Z"
            transform="translate(-25.5 -42.7)"
          />
          <Path
            fill={color}
            d="M61.9,64.9c2,.1,3.1,1.1,3.2,3a2.8,2.8,0,0,1-3,3.1A2.7,2.7,0,0,1,59,68.1C58.9,66.1,60,65.1,61.9,64.9Z"
            transform="translate(-25.5 -42.7)"
          />
          <Path
            fill={color}
            d="M62,80.6l2.5,1.3A7.5,7.5,0,0,1,61.7,83c-.7.1-1.4-.7-2.2-1.1Z"
            transform="translate(-25.5 -42.7)"
          />
          <Path
            fill={color}
            d="M62,79.6l-2.5-1.8c.9-.3,1.7-.9,2.5-.8a7.5,7.5,0,0,1,2.5.9Z"
            transform="translate(-25.5 -42.7)"
          />
        </G>
      </Icon>
    );
  }
}

IconMixer.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconMixer.defaultProps = {
  size: 35,
  color: "#333333"
};
