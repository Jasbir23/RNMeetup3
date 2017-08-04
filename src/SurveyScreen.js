import React, { Component } from "react";
import { View } from "react-native";
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
  Body
} from "native-base";

import * as firebase from "firebase";
import { firebaseConfig } from "./config/firebase";

firebase.initializeApp(firebaseConfig);

export default class FloatingLabelExample extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this._onSubmitClick = this._onSubmitClick.bind(this);
  }

  _onSubmitClick() {
    // firebase.database().ref("Users/" + this.state.name).set({
    //   name: this.state.name,
    //   age: 22,
    //   Occupation: "Software Developer"
    // });
    this.props.navigation.navigate("MainDrawer");
  }
  componentDidMount() {
    // Firebase
    firebase.database().ref("Questions/").on("value", snapshot => {
      const highscore = snapshot.val();
      console.log(highscore);
    });
    //Questions Listener
    // firebase.database().ref('Questions/').on('value', (snapshot) => {
    //   const questions = snapshot.val();
    //   console.log(questions);
    // });
  }
  render() {
    console.log(this.state.name);
    return (
      <Container>
        <Header>
          <Body>
            <Text>Survey</Text>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Gender</Label>
              <Input />
              <Item floatingLabel last>
                <Label>I am a Native/Web/React developer..</Label>
                <Input />
              </Item>
            </Item>
            <Item floatingLabel last>
              <Label>Organization</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Phone No</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>e-mail</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>I am here because...</Label>
              <Input />
            </Item>
          </Form>
          <View style={{ padding: 10 }}>
            <Button
              block
              dark
              style={{ marginTop: 20 }}
              onPress={() => this._onSubmitClick()}
            >
              <Text>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
