import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconT from 'react-native-vector-icons/AntDesign';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <IconT name='downcircleo'> </IconT>
      </View>
    );
  }
}

export default HomeScreen;
