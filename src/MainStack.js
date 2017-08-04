import React, { Component } from "react";
import SurveyScreen from "./SurveyScreen.js";
import MainDrawer from "./MainDrawer.js";

import { StackNavigator } from "react-navigation";
export default (StackNav = StackNavigator({
  Survey: { screen: SurveyScreen },
  MainDrawer: { screen: MainDrawer }
}));
