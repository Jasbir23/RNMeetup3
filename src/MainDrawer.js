import React, { Component } from "react";
import TodaySchedule from "./TodaySchedule.js";
import TyperScreen from "./TyperScreen.js";
import SideBar from "./SideBar.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    TodaySchedule: { screen: TodaySchedule },
    TyperScreen: { screen: TyperScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
HomeScreenRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default HomeScreenRouter;
