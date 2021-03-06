import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";
import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import Button from "components/Button";
import * as colors from "utils/Colors";

const Logo = require("images/hippo-logo-3.png");

const StyledText = styled.Text`
  font-size: 32px;
  color: ${colors.black};
  font-weight: 800;
`;

const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 40;
`;

const ScreenContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;

const FormContainer = styled.View``;

const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 10;
`;

const Card = styled.View`
  width: 325;
  margin-top: 40;
`;

const StyledButton = styled(Button)`
  margin-vertical: 16;
`;

export default ({ navigation }) => (
  <ScreenContainer behavior="padding" style={styles.container}>
    <LogoContainer>
      <Image
        resizeMode="contain"
        source={Logo}
        style={{ width: 225, height: 225, marginBottom: -25 }}
      />
      <StyledText>Recipes made simple.</StyledText>
    </LogoContainer>
    <FormContainer>
      <Card>
        <ButtonContainer>
          <StyledButton
            label="Sign In"
            onPress={() => navigation.navigate("SignIn")}
          />
          <StyledButton
            label="Create Account"
            tertiary
            onPress={() => navigation.navigate("SignUp")}
          />
        </ButtonContainer>
      </Card>
    </FormContainer>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "space-around"
  },
  centered: {
    alignItems: "center"
  },
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15
  },
  list: {
    flex: 1,
    marginTop: 70,
    paddingLeft: 15,
    marginBottom: 10
  },
  scrollableList: {
    marginTop: 15
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  deleteAllButton: {
    marginRight: 40
  }
});
