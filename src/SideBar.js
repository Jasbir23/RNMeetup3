import React from "react";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["TodaySchedule", "QuestionScreen"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("DrawerClose");
            }}
          >
            <Image
              square
              style={{ height: 200, alignSelf: "stretch" }}
              source={require("./assets/draw.gif")}
            />
          </TouchableOpacity>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
