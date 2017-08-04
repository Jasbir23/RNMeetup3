import React, { Component } from "react";
import TodaySchedule from "./TodaySchedule.js";
import SideBar from "./SideBar.js";
import { DrawerNavigator } from "react-navigation";
import QuestionScreen from "./Question.js";
const HomeScreenRouter = DrawerNavigator(
  {
    TodaySchedule: { screen: TodaySchedule },
    QuestionScreen: { screen: QuestionScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
HomeScreenRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default HomeScreenRouter;
