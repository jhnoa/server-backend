import React from 'react';
import ReactDom from 'react-dom';
import {StyleSheet, Text, View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ReactDom.render(<App />, document.getElementById('react-root'));
