import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import { Svg } from "expo";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as colors from "utils/Colors";

const { Path, G } = Svg;

export default class CustomIcon extends Component {
  render() {
    const {
      onPress,
      color,
      viewBoxWidth,
      viewBoxHeight,
      children
    } = this.props;

    return (
      <Svg
        color={color}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        aria-hidden="true"
        data-prefix="fal"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        onPress={onPress}
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          maxWidth: "100%"
        }}
        {...this.props}
      >
        {children}
      </Svg>
    );
  }
}
CustomIcon.propTypes = {
  viewBoxHeight: PropTypes.string,
  viewBoxWidth: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

CustomIcon.defaultProps = {
  color: colors.black,
  viewBoxHeight: "512",
  viewBoxWidth: "512"
};
