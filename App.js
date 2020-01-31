import CodePush from 'react-native-code-push';
import React, {Component} from 'react';
import {Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text>Hello World 2</Text>;
  }
}
export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
