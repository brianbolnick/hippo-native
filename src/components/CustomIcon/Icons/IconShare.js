import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg, { Path, G } from "react-native-svg";
import Icon from "../CustomIcon";



export default class IconShare extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon
        size={size}
        viewBoxWidth="67.2"
        viewBoxHeight="80.6"
        {...this.props}
      >
        <G fill={color || "currentColor"}>
          <Path
            fill={color}
            d="M45.9,55.3a7.7,7.7,0,0,0,3.8,8.5c2.3,1.4,4.5,2.9,6.7,4.4,4.6,3.3,8.9,5.9,15.4,3.3s10.9.5,13.8,5.3a12.5,12.5,0,0,1-4.3,17.3c-6,3.4-14.3,1.3-17.3-4.8a17.8,17.8,0,0,1-1.9-7.6,7.8,7.8,0,0,0-3.7-6.6c-3.6-2.4-7.3-4.7-10.8-7.2s-5.7-2.9-9.2-1.2a12.9,12.9,0,0,1-5.9,1A12.2,12.2,0,0,1,20.4,56.6c-.6-6.4,4.2-12.7,10.8-13.3a18.5,18.5,0,0,1,7.8,1c3.3,1.4,5.7.6,8.4-1.2L56.5,37a10.9,10.9,0,0,0,5.8-9.6c.5-7.7,5.4-12,12-12.2a12.3,12.3,0,0,1,11.6,6.4c2.6,4.6,2,9-.8,13.2S77.4,41.7,73,39.7c-7.6-3.6-12.6.1-18,4-1.7,1.2-3.3,2.4-5,3.4C46.7,48.9,45.2,51.6,45.9,55.3ZM82.8,82.9a8.3,8.3,0,0,0-8-7.4c-4.5,0-7.8,3.9-7.3,8.7a7.5,7.5,0,0,0,8.2,6.9A8.1,8.1,0,0,0,82.8,82.9ZM41,55.3c0-3.9-3.7-7.5-7.7-7.6s-7.9,3.8-7.7,8.5,3.6,7.1,8.1,7A8,8,0,0,0,41,55.3ZM82.6,27.4A8.2,8.2,0,0,0,75,19.7c-4.3,0-7.8,4-7.5,8.7a7.1,7.1,0,0,0,7.9,6.9A7.5,7.5,0,0,0,82.6,27.4Z"
            transform="translate(-20.4 -15.2)"
          />
        </G>
      </Icon>
    );
  }
}

IconShare.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconShare.defaultProps = {
  size: 35,
  color: "#333333"
};
