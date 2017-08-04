import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Body,
  Left,
  Icon,
  Title,
  Right,
  Item,
  Input
} from "native-base";
export default class TyperScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state = {
      txt: ""
    };
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate("DrawerOpen");
              }}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{ flex: 2 }}>
            <Title>Typer Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item rounded>
            <Input
              style={{ height: 120, paddingTop: 10, paddingLeft: 15 }}
              multiline={true}
              numberOfLines={4}
              placeholder="Round fat ideas here ... "
            />
          </Item>
          <Button block dark style={{ marginVertical: 20 }}>
            <Text>POST</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
