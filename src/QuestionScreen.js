import React, { Component } from "react";
import { View, Alert, Image, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Body,
  Left,
  Right,
  Spinner,
  Card,
  CardItem,
  Title
} from "native-base";
const { width, height } = Dimensions.get("window");

import * as firebase from "firebase";

export default class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: undefined,
      selectedQuestion: undefined,
      selectedOption: -1,
      isSubmitted: false,
      loaded: false
    };
  }
  componentDidMount() {
    // Firebase
    firebase.database().ref("Questions/").on("value", snapshot => {
      const response = snapshot.val();
      console.log(response, "questions");
      this.setState({ questions: response });
    });
    firebase.database().ref("SelectedQuestion/").on("value", snapshot => {
      const response = snapshot.val();
      console.log(response, "selected");
      this.setState({
        selectedQuestion: response,
        loaded: true,
        selectedOption: -1,
        isSubmitted: false
      });
    });
  }
  displayOptns(obj) {
    console.log(obj, "nhj");
    return (
      <View>
        {Object.keys(obj.options).map((optn, index) => {
          console.log(optn, "jkbjkb");
          return (
            <Button
              key={index}
              full
              dark
              disabled={this.state.selectedOption === index ? true : false}
              onPress={() => this.setState({ selectedOption: index })}
              key={index}
              style={{ marginVertical: 10 }}
            >
              <Text>{obj.options[optn].value}</Text>
            </Button>
          );
        })}
      </View>
    );
  }
  submitted(ques, label) {
    console.log(ques, label, "jhbjk");
    Object.keys(ques.options).map((item, index) => {
      if (index === this.state.selectedOption) {
        firebase.database().ref("Questions/" + label + "/options/" + item).set({
          value: ques.options[item].value,
          vote: ques.options[item].vote + 1
        });
      }
    });
    this.setState({ isSubmitted: true });
    Alert.alert("Response Submitted", "Okk");
  }
  render() {
    if (!this.state.loaded) {
      return <Spinner />;
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>Questions</Title>
          </Body>
        </Header>
        <Content padder>
          {Object.keys(this.state.questions).map((item, index) => {
            if (this.state.selectedQuestion.id === index) {
              console.log(item, "khjk");
              if (this.state.isSubmitted) {
                return (
                  <Card key={index}>
                    <CardItem>
                      <Body>
                        <Text style={{ fontWeight: "bold" }}>
                          Well Done Yo!!
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={require("./assets/panel.gif")}
                        style={{ height: 200, width: width - 20, flex: 1 }}
                      />
                    </CardItem>
                  </Card>
                );
              } else if (!this.state.isSubmitted) {
                return (
                  <View key={index}>
                    <Text>{item}</Text>
                    {this.displayOptns(this.state.questions[item])}

                    <Button
                      full
                      rounded
                      primary
                      style={{ marginTop: 30 }}
                      disabled={this.state.isSubmitted}
                      onPress={() =>
                        this.submitted(this.state.questions[item], item)}
                    >
                      <Text>SUBMIT</Text>
                    </Button>
                  </View>
                );
              }
            }
          })}
        </Content>
      </Container>
    );
  }
}
