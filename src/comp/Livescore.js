import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import DataContainerStyles from '../styles'

const data = { username: 'example' };

// fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/live/743', { //live games of the german league
  // fetch('https://api-football-v1.p.rapidapi.com/v2/leagues', { // all the leagues
  fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/743/30', { //all the games in the 30 round of the german league
	method: "GET",
	headers: {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
  }
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

class Livescore extends React.Component {
  constructor() {
    super()
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View style={DataContainerStyles.dataContainer}>
          <Text style={styles.text}> Livescore</Text>
        </View>
        <View></View>
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
