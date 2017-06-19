import React from 'react';
import { StyleSheet, View, TextInput, Alert, ActionSheetIOS } from 'react-native';
import CardImage from './ui/card';
import FooterTabs from './ui/tabs';
import AppHeader from './ui/header';

import { Container, Content, Button, Text } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    height: 50,
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  tips: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    margin: 15,
  },
});

const BUTTONS = ['Option 1', 'Option 2', 'Option 3', 'Delete', 'Cancel'];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tip: 0.1,
      isReady: false,
    };
  }

  Alert() {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      }, {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      }, {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ], { cancelable: false });
  }

  ActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 3,
        title: 'Testing ActionSheet',
      },
            (buttonIndex) => {
              console.log(`clicked:${BUTTONS[buttonIndex]}`);
            },
    );
  }

  render() {
    let tip = ' ';
    if (this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * this.state.tip;
      tip = `$${Number(Math.round(tip * 100) / 100).toFixed(2)} @ ${this.state.tip * 100}%`;
    }

    return (
      <Container>
        <AppHeader />
        <Content
          padder
          style={{
            backgroundColor: '#EFEFF4',
          }}
        >
          <View style={styles.container}>
            <Text
              style={{
                paddingBottom: 10,
                fontSize: 36,
                fontWeight: '800',
              }}
            >Tip Calc</Text>
            <Text
              style={{
                paddingBottom: 15,
                fontSize: 18,
                fontWeight: '400',
              }}
            >
              {tip}
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.inputValue}
              placeholder="0"
              onChangeText={text => this.setState({ inputValue: text })}
              keyboardType="numeric"
            />
            <View style={styles.tips}>
              <View style={styles.button}>
                <Button rounded primary onPress={() => this.setState({ tip: 0.1 })}>
                  <Text>10%</Text>
                </Button>
              </View>
              <View style={styles.button}>
                <Button rounded primary onPress={() => this.setState({ tip: 0.15 })}>
                  <Text>15%</Text>
                </Button>
              </View>
              <View style={styles.button}>
                <Button rounded primary onPress={() => this.setState({ tip: 0.2 })}>
                  <Text>20%</Text>
                </Button>
              </View>
            </View>
          </View>
          <CardImage />
          <View
            style={{
              paddingTop: 20,
              paddingBottom: 50,
            }}
          >
            <Button full onPress={this.Alert}>
              <Text>Alert</Text>
            </Button>
            <View style={{ paddingTop: 5 }}>
              <Button full warning onPress={this.ActionSheet} >
                <Text>Take Action!</Text>
              </Button>
            </View>
          </View>
        </Content>
        <FooterTabs />
      </Container>

    );
  }
}

