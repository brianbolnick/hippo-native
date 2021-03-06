import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg, { Path, G } from "react-native-svg";
import Icon from "../CustomIcon";
import * as colors from "utils/Colors";



export default class IconFamily extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="47.9" viewBoxHeight="34" {...this.props}>
        <G fill={color || colors.black}>
          <Path
            fill={color}
            d="M39.8,39c4.6-.4,7.5,1.8,9.6,5.8.9,1.6.4,3.1.6,4.7s.3,3.2-1.4,4.5-1,1.9-1.8,2.6-.6,1.2.1,1.8,3.1,3,4.6,4.6,2.6,5.4,2.4,8.4c0,.2-.7.5-1.1.6a1.1,1.1,0,0,1-.8-.5c-.1-.7.1-1.4,0-2C50.7,63,44.9,58.2,38.7,59.1a10.3,10.3,0,0,0-6,2.5c-2.7,2.7-4.8,5.5-4.7,9.6,0,.2-.6.7-.9.7s-1-.4-1.1-.6c-.1-3.1.3-6.1,2.6-8.4l1.1-1.1,4.2-4.2c-1.1-1.5-2.6-2.9-3.2-4.6a9.7,9.7,0,0,1,.1-8.3C32.6,40.8,35.5,38.7,39.8,39Zm8.5,9.9c-.9-2-1.3-4.5-2.7-5.5s-3.6-2.9-5.9-2.3-4.3,1-5.4,2.4-2.8,3.6-2.2,5.9,1.1,4.5,2.5,5.3,3.2,2.5,5.5,2.3a9.8,9.8,0,0,0,5.8-2.7C47.2,53.1,47.5,50.8,48.3,48.9Z"
            transform="translate(-26 -37.9)"
          />
          <Path
            fill={color}
            d="M61.1,38a7.4,7.4,0,0,1,7.1,4.5c1.6,3.4,1.1,6.4-1.2,8.8s-.5,2.1.4,2.5c4.5,2.3,6.4,6,6.6,10.8,0,.4-.6.9-.9,1.4s-1-.7-1.1-1.2c-.4-5.2-3.1-8.7-8.1-10.4s-7.1.5-10.2,2.4c-.7.5-1.1,1.2-1.8,1.7a.9.9,0,0,1-1-.1c-.4-.4-1.2-.7-.4-1.4s1.4-1.5,2.2-2.1,2.5-1.3,2.9-2.2-.9-2.1-1.6-3C50.9,45.2,54.6,37.5,61.1,38ZM61,52a6,6,0,1,0-6-6A6.2,6.2,0,0,0,61,52Z"
            transform="translate(-26 -37.9)"
          />
        </G>
      </Icon>
    );
  }
}

IconFamily.propTypes = {
  color: PropTypes.string
};

IconFamily.defaultProps = {
  color: "#333333"
};
