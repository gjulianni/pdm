import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const Um = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight }}>
      {/* Primeira View (cor crimson) */}
      <View style={{ flex: 0.5, backgroundColor: 'crimson' }}>

      </View>
      {/* Segunda View (cor salmon) */}
      <View style={{ flex: 0.5, backgroundColor: 'salmon' }}>

      </View>
    </View>
  );
};

export default Um;