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
    firebase.database().ref('Users/' + this.state.form.Name).set({
      name: this.state.form.Name,
      age: this.state.form.Age,
      Occupation: this.state.form.Occupation,
      Employer: this.state.form.Employer,
    });
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
    firebase.database().ref('Questions/').on('value', (snapshot) => {
      const highscore = snapshot.val();
      console.log( highscore);
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
              <Label>Occupation</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('Occupation', val)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Employer</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('Employer', val)}/>
            </Item>
          </Form>
          <View style={{ padding: 10 }}>
            <Button block dark style={{ marginTop: 20 }} onPress={() => this._onSubmitClick()}>
              <Text>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
