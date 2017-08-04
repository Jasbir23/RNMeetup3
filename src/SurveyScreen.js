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
let requiredFields = ["Name", "Email", "IAmHere"];
export default class FloatingLabelExample extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state={
      form :{
        Name: '',
        Age: 0,
        Gender: '',
        Developer: '',
        Organization: '',
        PhoneNumber: 0,
        Email: '',
        IAmHere: ''
      },
      requiredErrors: []
    }
    this._onSubmitClick = this._onSubmitClick.bind(this);
    this._onFormValueChanged = this._onFormValueChanged.bind(this);
    this._checkValidation = this._checkValidation.bind(this);
  }

  _onSubmitClick() {
    this._checkValidation();
  }

  _onFormValueChanged(formName, val) {
    let form = this.state.form;
    form[ formName ] = val;
    this.setState( { form: form } )
  }

  _checkValidation() {
    let requiredErrors = [];
    let form = this.state.form;
    requiredFields.map((item, index) => {
      if(form[item] === '') {
        requiredErrors.push(item)
      }
    })
    if(requiredErrors.length !== 0) {
      let message = requiredErrors.join(",");
      console.log(message, 'message');
      alert(message + ' is Empty')
    } else {
      firebase.database().ref('Users/' + this.state.form.Email).set({
        Name: this.state.form.Name,
        Age: this.state.form.Age,
        Gender: this.state.form.Gender,
        Developer: this.state.form.Developer,
        Organization: this.state.form.Organization,
        PhoneNumber: this.state.form.PhoneNumber,
        Email: this.state.form.Email,
        IAmHere: this.state.form.IAmHere,
      });
      this.props.navigation.navigate("MainDrawer");
    }
  }


  render() {
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
              <Input onChangeText={(val) => this._onFormValueChanged('Name', val)}/>{

              }
            </Item>
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('Age', val)} />
            </Item>
            <Item floatingLabel last>
              <Label>Gender</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('Gender', val)}/>
            </Item>
            <Item floatingLabel last>
              <Label>I am a Native/Web/React developer..</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('Developer', val)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Organization</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('Organization', val)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Phone No</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('PhoneNumber', val)}/>
            </Item>
            <Item floatingLabel last>
              <Label>e-mail</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('Email', val)}/>
            </Item>
            <Item floatingLabel last>
              <Label>I am here because...</Label>
              <Input onChangeText={(val) => this._onFormValueChanged('IAmHere', val)}/>
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
