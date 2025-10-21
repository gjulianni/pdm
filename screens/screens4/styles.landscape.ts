import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE0', 
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C', 
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDB76B', 
  }
});

export default styles;