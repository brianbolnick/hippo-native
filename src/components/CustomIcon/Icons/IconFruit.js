import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg, { Path, G } from "react-native-svg";
import Icon from "../CustomIcon";
import * as colors from "utils/Colors";



export default class IconFruit extends Component {
  render() {
    const { color } = this.props;

    return (
      <Icon viewBoxWidth="74.2" viewBoxHeight="80.4" {...this.props}>
        <G fill={color || colors.black}>
          <Path
            fill={color}
            d="M36.8,77c-.3,3.1-.3,5.4-.7,7.6-.8,4.1-4.1,6.2-8.1,5.2a15.2,15.2,0,0,1-8.3-5.2c-7.1-8.5-8-20.5-1.7-27.5,3.3-3.7,3.1-6.9,1.8-10.9-2.2-7-4.1-14-3.8-21.5a31.7,31.7,0,0,1,.7-6.9c.9-3.6,2.5-7,6.7-7.9s7.3.9,9.5,4.1a45.9,45.9,0,0,1,4.8,8.7,94.4,94.4,0,0,1,3.2,9.4c1.2,4,3.3,6.4,7.9,5.7a13.5,13.5,0,0,1,4.9.2c6.4,1.1,11.1,4.5,13.6,10.5,1.4,3.1,1.6,6.3-.7,9.4s-2.8,4.1.9,5.5,5.8,1.8,8.5,3.1a40.4,40.4,0,0,1,8.5,5c5.1,4.5,4.6,11.6-1.3,15.1A24.5,24.5,0,0,1,73,89.9c-10.1,1.2-19-2.2-27.4-7.3ZM19.9,24.8c1.6,7.2,3,14.3,4.7,21.4.5,1.9,1.8,3.6,4.2,3.6s4.6.2,6.1-2.2S40.2,40.2,37,35c-2-3.3-2.4-7.5-4-11.1a48.8,48.8,0,0,0-5.2-8.4c-1.2-1.6-4.3-1.1-5.1.8S20.8,21.8,19.9,24.8ZM79,83.1a20.2,20.2,0,0,0-2.8-1c-13.8-1.4-25.1-7.6-34.2-18a24.4,24.4,0,0,0-2.7-2.9c-1.6-1.5-3.6-1.4-5.3.2s-1.8,3.3-.1,5.2c8.7,10,19.4,16.8,32.8,18.8C70.6,86,74.5,86.1,79,83.1ZM30.8,54.6l-2,.3c-6.1,1.8-9.2,6.3-10,12.3a17,17,0,0,0,7,16.5c1.1.9,3.3,1.5,4.5,1s1.6-3.3,1.1-5.3A27.9,27.9,0,0,0,30,75.7c-3.1-6.7-4.2-13.3,1.8-19.2.2-.3,0-1.1-.1-1.6S31.1,54.7,30.8,54.6ZM78.4,77.5h.3c.7-.4,2-.9,2.1-1.4a2.6,2.6,0,0,0-1.3-2.3,42.2,42.2,0,0,0-8-3.9c-9-3-17-7.4-23.3-14.6a7,7,0,0,0-2.4-1.7,1.9,1.9,0,0,0-1.8.3,5.1,5.1,0,0,0-1.3,2.4,2.6,2.6,0,0,0,.6,1.8C52,69.4,63.2,76.3,78.4,77.5Zm-15-25.1a10,10,0,0,0-.5-2.3c-4-7.4-12.6-10-19.4-5.7-1.2.7-1.7,2.5-2.5,3.8,1.3-.1,2.6.1,3.8-.1,3.9-.6,7.2.8,10.4,2.8a28,28,0,0,0,6.1,2.8C61.8,53.9,62.8,52.8,63.4,52.4Z"
            transform="translate(-13.8 -9.7)"
          />
        </G>
      </Icon>
    );
  }
}

IconFruit.propTypes = {
  color: PropTypes.string
};

IconFruit.defaultProps = {
  color: "#333333"
};
