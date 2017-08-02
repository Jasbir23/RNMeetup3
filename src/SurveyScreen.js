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
export default class FloatingLabelExample extends Component {
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
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Occupation</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Employer</Label>
              <Input />
            </Item>
          </Form>
          <View style={{ padding: 10 }}>
            <Button block dark style={{ marginTop: 20 }}>
              <Text>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
