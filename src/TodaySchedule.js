import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Text,
  Content,
  Thumbnail
} from "native-base";
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{ flex: 2 }}>
            <Title>Todays Schedule</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: "http://ecodile.com/wp-content/uploads/2016/08/react-logo-1000-transparent.png"
                  }}
                />
                <Body>
                  <Text>Introduction</Text>
                  <Text note>Sanket Sahu and Manohar Simons</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("./assets/intro.gif")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon style={{ color: "black" }} name="clock" />
                  <Text style={{ left: 10, color: "black" }}>2:30 to 2:45</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: "http://ecodile.com/wp-content/uploads/2016/08/react-logo-1000-transparent.png"
                  }}
                />
                <Body>
                  <Text>Building High Quality Apps in RN</Text>
                  <Text note>Manohar Simons</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("./assets/hqapp.gif")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon style={{ color: "black" }} name="clock" />
                  <Text style={{ left: 10, color: "black" }}>2:45 to 3:15</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: "http://ecodile.com/wp-content/uploads/2016/08/react-logo-1000-transparent.png"
                  }}
                />
                <Body>
                  <Text>Livecoding a RN app</Text>
                  <Text note>Ankit, Akshym and Jasbir</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("./assets/livcode.gif")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon style={{ color: "black" }} name="clock" />
                  <Text style={{ left: 10, color: "black" }}>3:15 to 4:15</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: "http://ecodile.com/wp-content/uploads/2016/08/react-logo-1000-transparent.png"
                  }}
                />
                <Body>
                  <Text>Tea Break</Text>
                  <Text note>Finally</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("./assets/tea.gif")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon style={{ color: "black" }} name="clock" />
                  <Text style={{ left: 10, color: "black" }}>4:15 to 4:30</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: "http://ecodile.com/wp-content/uploads/2016/08/react-logo-1000-transparent.png"
                  }}
                />
                <Body>
                  <Text>Panel Discussion</Text>
                  <Text note>All Team</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("./assets/panel.gif")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon style={{ color: "black" }} name="clock" />
                  <Text style={{ left: 10, color: "black" }}>4:30 to 5:00</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
