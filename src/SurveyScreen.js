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

import * as firebase from 'firebase';


export default class FloatingLabelExample extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state={
      form :{
        Name: '',
        Age: '',
        Occupation: '',
        Employer: ''
      }
    }
    this._onSubmitClick = this._onSubmitClick.bind(this);
    this._onFormValueChanged = this._onFormValueChanged.bind(this);
  }

  _onSubmitClick() {
    // firebase.database().ref('Users/' + this.state.form.Name).set({
    //   name: this.state.form.Name,
    //   age: this.state.form.Age,
    //   Occupation: this.state.form.Occupation,
    //   Employer: this.state.form.Employer,
    // });
    this.props.navigation.navigate("MainDrawer");
  }

  _onFormValueChanged(formName, val) {
    let form = this.state.form;
    if(val !== '') {
      form[ formName ] = val;
    }
    this.setState( { form: form } )
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
              <Input onChangeText={(val) => this._onFormValueChanged('Name', val)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('Age', val)} />
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
