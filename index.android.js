'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var SampleApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Situation Line
        </Text>
        <Text style={styles.instructions}>
          New Game
        </Text>

        <Text style={styles.instructions}>
          Credits
        </Text>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 19,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SampleApp', () => SampleApp);
