import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
// import Content from './Content';
import DataContainerStyles from '../styles'

class Livescore extends React.Component {
  constructor() {
    super()
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        {/* <Content /> */}
        <View style={DataContainerStyles.dataContainer}>
        <Text style={styles.text}> Livescore</Text>
        </View>
      </View>
    );
  }
}
Livescore.propTypes = {
  navigation: PropTypes.object
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22343C'
  },
  text: {
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    marginRight: -160,
    marginTop: 10
  }
});
export default Livescore;