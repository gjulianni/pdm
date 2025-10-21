import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const PORTRAIT_COLOR = '#FFA500';
const LANDSCAPE_COLOR = '#1E90FF';

const Um: React.FC = () => {
  const { width, height } = useWindowDimensions();

  const isPortrait = height > width;

  const backgroundColor = isPortrait ? PORTRAIT_COLOR : LANDSCAPE_COLOR;
  const displayText = isPortrait
    ? 'Tela em modo portrait'
    : 'Tela em modo landscape';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.text}>{displayText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Um;