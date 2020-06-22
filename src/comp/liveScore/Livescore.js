import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';
import DataContainerStyles from '../../styles'
import { connect } from 'react-redux';
import getLiveGames from '../actions/liveScoreActions'
import GameView from './GameView'
import liveStyles from './liveStyles'
import Image from 'react-native-remote-svg'
import Loader from '../Loader'
import { ScrollView } from 'react-native-gesture-handler';

const Livescore = ({ navigation, getLiveGames, leagues, isLoading }) => {
  useEffect(() => {
    getLiveGames('LIVE_GAMES')
  }, []);
  return (
    <View style={liveStyles.container}>
      <Header navigation={navigation} />
      <View style={DataContainerStyles.dataContainer}>
        <Text style={liveStyles.text}> Livescore</Text>
        {/* <Text>{getCurrentDate()}</Text> */}
        <ScrollView>
          {
            isLoading ?
              <Loader />
              : leagues.map((league, key) => {
                return (
                  <View key={key} style={liveStyles.leagueBox}>
                    <View style={liveStyles.leagueAndFlag}>
                      <Text style={liveStyles.leagueName}>{league.league}</Text>
                      <Image
                        source={{ uri: league.games[0].leagueFlag }}
                        style={liveStyles.flag}
                      />
                    </View>
                    <FlatList
                      data={league.games}
                      numColumns={1}
                      renderItem={({ item }) => (
                        <GameView
                          game={item}
                          key={item.id}
                        />
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                )
              })
          }
        </ScrollView>
      </View>
    </View>
  );
}

Livescore.propTypes = {
  navigation: PropTypes.object,
  leagues: PropTypes.array,
  getLiveGames: PropTypes.func
};

const mapStateToProps = ({ liveScore }) => {
  return {
    leagues: liveScore.leagues,
    isLoading: liveScore.isLoading
  };
};

export default connect(mapStateToProps, { getLiveGames })(Livescore);
