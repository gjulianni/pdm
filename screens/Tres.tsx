import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const Tres = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight }}>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: Constants.statusBarHeight}}>
            <View style={{ flex: 1, backgroundColor: 'lime'}} />

            <View style={{ flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
                <View style={{ flex: 1, backgroundColor: 'teal'}} />
                <View style={{ flex: 1, backgroundColor: 'skyblue'}} />
            </View>
        </View>
      <View style={{ flex: 1, backgroundColor: 'salmon' }}>
      </View>

    </View>
  );
};

export default Tres;