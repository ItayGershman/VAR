import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styles from './/JoinBoxStyles';

const JoinBox = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalInputVisible, setIsModalInputVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  let roomCode = '';
  const moveAndHide = (navigation, roomCode) => {
    fetch(`http://var-football-prediction.herokuapp.com/routes/check_room/${roomCode}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result) {
          setIsModalInputVisible(!isModalInputVisible);
          navigation.navigate('GamesRoom');
        } else {
          navigation.navigate('JoinRoom', {
            roomCode
          });
        }
        setModalVisible(false);
      });
  };
  const Hide = (navigation) => {
    setIsModalInputVisible(!isModalInputVisible);
    navigation.navigate('GamesRoom');
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxJoin}>
        <Text style={styles.text}>Join Room</Text>
        <TouchableOpacity style={styles.joinButton} title="" onPress={toggleModal}>
          <Icon name="play-arrow" color="#3DD598" />
        </TouchableOpacity>
        <Text style={styles.infoText}>Enter the PIN you got from your{'\n'}friend and join!</Text>
        <Modal isVisible={isModalVisible} style={styles.modal}>
          <View style={styles.msgContainer}>
            <Text style={styles.titleRoom}>Enter the room code:</Text>
            <Input
              style={styles.inputText}
              placeholder=""
              inputStyle={styles.inputStyle}
              onChangeText={(value) => (roomCode = value)}
            />
            <TouchableOpacity
              style={styles.enterButton}
              title="LETS PLAY!"
              onPress={() => moveAndHide(navigation, roomCode)}
            >
              <Text style={styles.enterButtonText}>LET&apos;S PLAY!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={isModalInputVisible} style={styles.modal}>
          <View style={styles.msgContainer}>
            <Text style={styles.titleRoom}>Wrong room code!</Text>
            <TouchableOpacity
              style={styles.enterButton}
              title="TRY AGAIN!"
              onPress={() => Hide(navigation)}
            >
              <Text style={styles.enterButtonText}>TRY AGAIN!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

JoinBox.propTypes = {
  navigation: PropTypes.object
};

export default JoinBox;
