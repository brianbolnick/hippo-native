import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { Svg } from "expo";
import * as colors from "utils/Colors";

const { Path, G } = Svg;

export default class IconAmerican extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="43.7" viewBoxHeight="50" {...this.props}>
        <G fill={color || colors.black}>
          <Path
            fill={color}
            d="M48.2,77c-2.3.2-3-1.6-3.8-3.2C38.6,62.4,32.9,50.9,27,39.6c-1.7-3.2-.8-5.1,1.9-7s8.7-4,13.1-5.6H54c4.4,1.6,9.1,2.7,13.1,5.6s3.6,3.8,1.9,7C63.1,51,57.4,62.4,51.6,73.8c-.7,1.4-1.3,3.1-3.4,3.2"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill="white"
            d="M42.3,63.1c-2.4-1.5-2.5-4.5-4.1-6.6s-.4-1.8.6-2.5c3.3-2.3,4.1-5.5,2.5-9.1s-5.1-4.3-8.8-3.8c-.3.1-.6-.1-1-.1a26.6,26.6,0,0,1,31-1.6c1.2.7,3.4,1.1,2.3,3.1s-.9,4.1-3.9,4.6C54.3,48.2,52.4,52,55.2,58a3.3,3.3,0,0,1,0,3.6c-1.6,2.7-2.9,5.6-4.4,8.4-.8,0-1.4-.2-.9-1.2a1.6,1.6,0,0,0-2.1-.8c-4.7,2.1-4.8-1.1-4.8-4.3,1.4-.6,2.9,0,4.3-.1s3.3-1.3,3.3-3.5-.8-3.4-3-3.7-3.6.3-4.1,2.5S43.4,61.9,42.3,63.1Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill="white"
            d="M47.7,29.1c6.7.2,12.9,1.8,18.3,5.7,1.1.8,2.3,1.5,1.2,3.1s-2.1.2-2.8-.2c-11-6.5-21.9-6.5-32.9.1-.8.5-1.8,1.8-2.8,0s0-2.1,1-2.8A31.7,31.7,0,0,1,47.7,29.1Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill={color}
            d="M42.3,63.1c-.3-1.9-.8-3.9.3-5.8s3.7-2.8,6-2.1,3.7,2.7,3.4,5.3A4.5,4.5,0,0,1,47.6,65c-1.7.3-3.2-.5-4.6-1.3Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill="white"
            d="M36.2,52.6c-1.3-2.5-3-5-3.7-7.8s1.8-1.9,3.2-1.6,4.3,2.4,4.1,5.3S38.4,51.8,36.2,52.6Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill="white"
            d="M61.3,49.8c-1.2,2.2-2.3,4.5-3.5,6.9C55.2,52.9,55.7,51.6,61.3,49.8Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill="white"
            d="M49.9,68.8l.9,1.2a20.4,20.4,0,0,1-.9,2.2c-.5,1-.9,2.3-2.4,1.8a3.2,3.2,0,0,1-1.3-1.5c-.8-1.7.9-1.7,1.7-2.3Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill={color}
            d="M54,39c2.5.1,4,1.3,4,4s-1.4,4-4,4-4-1.4-4-4S51.4,39.1,54,39Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill={color}
            d="M48.1,40.4c-.3.2-.4.4-.6.4-2.3.4-3.9-.9-5.3-2.5s.4-1.1.6-1.1C45.1,37.3,47,38.1,48.1,40.4Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill={color}
            d="M47.6,48c.8.1,1.6.1,1.3,1s-2,2.9-3.5,3.8a.9.9,0,0,1-1.3-1C44.7,50,46.3,49.1,47.6,48Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill="white"
            d="M46.8,57.2a2.9,2.9,0,0,1,2.9,2.7,2.5,2.5,0,0,1-2.2,2.8,2.7,2.7,0,0,1-3.3-2.3C44,58.7,45.2,57.7,46.8,57.2Z"
            transform="translate(-26.1 -27)"
          />
          <Path
            fill="white"
            d="M55.9,43.1c-.3,1.1-1,1.9-2.1,1.7a1.8,1.8,0,0,1-1.6-2.2A1.7,1.7,0,0,1,54,41.2C55.1,41.2,55.7,42,55.9,43.1Z"
            transform="translate(-26.1 -27)"
          />
        </G>
      </Icon>
    );
  }
}

IconAmerican.propTypes = {
  color: PropTypes.string
};

IconAmerican.defaultProps = {
  color: "#333333"
};
