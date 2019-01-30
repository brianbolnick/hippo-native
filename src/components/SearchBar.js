import React from "react";
import { Text, View, TextInput } from "react-native";
import * as colors from "utils/Colors";
import styled from "styled-components";

const StyledInput = styled.TextInput`
  padding-top: 10;
  font-size: 18;
  color: ${colors.black};
  font-weight: 600;
  border-color: ${({ isFocused }) =>
    isFocused ? colors.red : colors.darkGray};
  border-width: 1px;
  border-radius: 8;
  padding-vertical: 8;
  padding-horizontal: 16;
  width: 100%;
`;

const Container = styled.View`
  width: 100%;
  padding-horizontal: 8;
  margin-bottom: 32;
`;

export default class SearchBar extends React.Component {
  state = {
    isFocused: false
  };

  render() {
    const { onChange, placeholder } = this.props;
    const { isFocused } = this.state;

    return (
      <Container>
        <StyledInput
          isFocused={isFocused}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={colors.mutedGray}
          autoCapitalize="none"
          underlineColorAndroid={colors.red}
          selectionColor={colors.black}
          maxLength={80}
          returnKeyType="done"
          autoCorrect={false}
          blurOnSubmit
          onFocus={() => this.setState({ isFocused: true })}
          onBlur={() => this.setState({ isFocused: false })}
        />
      </Container>
    );
  }
}
