import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Expo from "expo";
import SurveyScreen from "./src/SurveyScreen.js";
import TodaySchedule from "./src/TodaySchedule.js";
import TyperScreen from "./src/TyperScreen.js";
import QuestionScreen from "./src/QuestionScreen.js";
import { firebaseConfig } from "./src/config/firebase";
import MainStack from "./src/MainStack.js";

import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: "true" });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <QuestionScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
