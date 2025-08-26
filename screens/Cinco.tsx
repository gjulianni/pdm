import React from 'react';
import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import logo from '../assets/adaptive-icon.png';

const Cinco = () => {

  const handlePress = () => {
    Alert.alert("Boa noite!");
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight }}>
      <View style={{ flex: 1, flexDirection: 'row', paddingTop: Constants.statusBarHeight }}>
        
    
        <View style={{ flex: 1, backgroundColor: 'lime', justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={logo} style={{ width: 64, height: 64 }} />
          </TouchableOpacity>
        </View>
        
        <View style={{ flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight }}>
        
          <View style={{ flex: 1, backgroundColor: 'teal', justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={logo} style={{ width: 64, height: 64 }} />
            </TouchableOpacity>
          </View>

      
          <View style={{ flex: 1, backgroundColor: 'skyblue', justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={logo} style={{ width: 64, height: 64 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    
      <View style={{ flex: 1, backgroundColor: 'salmon', justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={handlePress}>
          <Image source={logo} style={{ width: 64, height: 64 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cinco;
