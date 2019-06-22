import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg, { Path, G } from "react-native-svg";
import Icon from "../CustomIcon";
import * as colors from "utils/Colors";



export default class IconList extends Component {
  render() {
    const { color } = this.props;

    return (
      <Icon viewBoxWidth="38.1" viewBoxHeight="50" {...this.props}>
        <G fill={color || colors.black}>
          <Path
            fill={color}
            d="M32,77a8.4,8.4,0,0,1-1.1-3.6c.1-12.3.1-24.6.1-37,0-2.8.5-3.3,3.4-3.4a4.7,4.7,0,0,0,3.5-1.3c1.2-1.1,3.8-.7,3.5-3.5-.1-.3,1.5-1.1,2.4-1.1,4.1-.2,8.3-.2,12.4,0,.9,0,2.4.7,2.4,1.1.2,2.2,1.7,2.3,3,3.3a7.9,7.9,0,0,0,5,1.5A2.3,2.3,0,0,1,69,35.5V72.9c0,1.5,0,2.9-1,4.1ZM67,55.4v-16a10.5,10.5,0,0,0,0-2.5A2.3,2.3,0,0,0,64.6,35c-1.5-.1-1.5.6-1.6,1.7S61.6,39,59.9,39h-20A2.6,2.6,0,0,1,37,36.6c-.4-1.8-1.7-2.1-3-1.1s-1,1.9-1,3.1V71.5c0,2.9.6,3.5,3.4,3.5H63.8c2.5,0,3.2-.7,3.2-3.2ZM49.7,37h9c1.3,0,2.3-.8,2.2-2s-1.2-1.9-1.8-1.9-2.1-.6-2.2-2.3-1-1.8-2.4-1.8c-3,0-6-.1-9,0-.7.1-1.8.6-1.9,1-.5,2-1.3,3.3-3.5,3.5-.4,0-1.1,1-1,1.4a3.1,3.1,0,0,0,1.3,1.9,4,4,0,0,0,1.9.2Z"
            transform="translate(-30.9 -27)"
          />
          <Path
            fill={color}
            d="M52,49a58.1,58.1,0,0,1-5.9-.1c-.4,0-.7-.7-1.1-1.1s.7-.8,1-.8h7.5a32.7,32.7,0,0,1,4.4.1c.4,0,.7.7,1.1,1.1s-.7.8-1,.8Z"
            transform="translate(-30.9 -27)"
          />
          <Path
            fill={color}
            d="M52,57c-2,0-4,.1-6-.1-.3,0-.7-.7-1-1.1s.7-.8,1-.8a80.4,80.4,0,0,1,8.5.1c1.5.1,3.6-1.4,4.5,1.1-1.3,1.7-3,.5-4.5.8A20.9,20.9,0,0,1,52,57Z"
            transform="translate(-30.9 -27)"
          />
          <Path
            fill={color}
            d="M52,65a58.1,58.1,0,0,1-5.9-.1c-.4,0-.7-.7-1.1-1.1s.7-.8,1-.8h7.5a32.7,32.7,0,0,1,4.4.1c.4,0,.7.7,1.1,1.1s-.7.8-1,.8Z"
            transform="translate(-30.9 -27)"
          />
          <Path
            fill={color}
            d="M41.8,49.5a5,5,0,0,1-.7-1.7c0-.3.8-.8.9-.8a2.4,2.4,0,0,1,.9,1.3C43,48.4,42.4,48.8,41.8,49.5Z"
            transform="translate(-30.9 -27)"
          />
          <Path
            fill={color}
            d="M41.8,54.5c.6.7,1.2,1.1,1.1,1.2A2.4,2.4,0,0,1,42,57c-.1,0-.9-.5-.9-.8A5,5,0,0,1,41.8,54.5Z"
            transform="translate(-30.9 -27)"
          />
          <Path
            fill={color}
            d="M43.5,63.8c-.7.6-1.1,1.2-1.2,1.1A2.4,2.4,0,0,1,41,64c0-.1.5-.9.8-.9A5,5,0,0,1,43.5,63.8Z"
            transform="translate(-30.9 -27)"
          />
        </G>
      </Icon>
    );
  }
}

IconList.propTypes = {
  color: PropTypes.string
};

IconList.defaultProps = {
  color: "#333333"
};
