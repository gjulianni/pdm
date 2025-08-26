import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const Dois = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight }}>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: Constants.statusBarHeight}}>
            <View style={{ flex: 0.5, backgroundColor: 'lime'}} />
            <View style={{ flex: 0.5, backgroundColor: 'aquamarine'}} />
        </View>
      <View style={{ flex: 1, backgroundColor: 'salmon' }}>
      </View>

    </View>
  );
};

export default Dois;