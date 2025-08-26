import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import Constants from 'expo-constants';
import logo from '../assets/adaptive-icon.png';

const Quatro = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight }}>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: Constants.statusBarHeight}}>
            <View style={{ flex: 1, backgroundColor: 'lime'}}>
            <Image source={logo} style={{ flex: 1}} />
            </View>
            
            <View style={{ flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
                <View style={{ flex: 1, backgroundColor: 'teal'}}>
                <Image source={logo} style={{ flex: 1, resizeMode: 'contain' }} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'skyblue'}}>
                <Image source={logo} style={{ flex: 1, resizeMode: 'contain' }} />
                </View>
            </View>
        </View>
      <View style={{ flex: 1, backgroundColor: 'salmon' }}>
      <Image source={logo} style={{ flex: 1, resizeMode: 'contain' }} />
      </View>

    </View>
  );
};

export default Quatro;