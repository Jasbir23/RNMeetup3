import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
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

export default class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: undefined,
      selectedQuestion: undefined,
      selectedOption: -1,
      isSubmitted: false,
    }
    this._showOptions = this._showOptions.bind(this);
    this._onSubmitPress = this._onSubmitPress.bind(this);
  }

  _showOptions(obj) {
    return (
      Object.keys(obj.options).map((item, index) => {
        return(
          <View key={index} style={{ paddingVertical: 10, backgroundColor: '#eee', marginVertical: 2}}>
            <TouchableOpacity onPress = {() => this.setState({ selectedOption: index })}>
              <Text style={{ color: this.state.selectedOption === index ? 'green' : 'black', paddingHorizontal: 5}}>{item}. {obj.options[item].value}</Text>
            </TouchableOpacity>
          </View>
        )
      })
    )
  }

  _onSubmitPress(obj, label) {
    Object.keys(obj.options).map((item, index) => {
      if( index === this.state.selectedOption ) {
        firebase.database().ref('Questions/' + label + '/options/'+ item ).set({
          value: obj.options[item].value,
          vote: obj.options[item].vote + 1,
        });
      }
    });
    this.setState({ isSubmitted: true });
  }

  componentDidMount() {
                // Firebase
    firebase.database().ref('Questions/').on('value', (snapshot) => {
      const response = snapshot.val();
      this.setState({ questions: response });
    });
    firebase.database().ref('SelectedQuestion/').on('value', (snapshot) => {
      const response = snapshot.val();
      this.setState({ selectedQuestion: response });
      this.setState({ isSubmitted: false });
      this.setState({ selectedOption: -1 });
    });
  }
  render() {
    console.log(this.state.questions, this.state.selectedQuestion, 'ques');
    return (
      <Container>
        <Header>
          <Body>
            <Text>Questions</Text>
          </Body>
        </Header>
        <Content padder style={{ backgroundColor: 'white' }}>
        {
          this.state.questions || this.state.selectedQuestion
          ? <View>
          {
            Object.keys(this.state.questions).map((item, index) => {
              if(this.state.selectedQuestion === this.state.questions[item].id) {
                console.log(item, 'val');
                return (
                  <View key={index} style={{ marginVertical: 10 }}>
                    <Text>Q.{this.state.selectedQuestion + ' ' + item }</Text>
                    <View style={{ marginVertical: 10 }}>
                      {this._showOptions(this.state.questions[item])}
                    </View>
                    <Button onPress={() => this._onSubmitPress(this.state.questions[item], item)} disabled= {this.state.isSubmitted} style={{ alignSelf: 'center'}}>
                      { this.state.isSubmitted
                        ? <Text>Submitted</Text>
                        : <Text>Submit</Text>
                      }

                    </Button>
                  </View>
                );
              }
            })
          }
          </View>
          : <Text>No Questions</Text>
        }
        </Content>
      </Container>
    );
  }
}
