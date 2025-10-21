import React from "react";
import { Text, SafeAreaView, View, useWindowDimensions } from "react-native";
import styles from "./styles";

const Dois: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const flexDirection = isPortrait ? 'column' : 'row';

  return (
    <SafeAreaView style={[styles.container, { flexDirection }]}>
      <View style={styles.top}>
        <Text>Top</Text>
      </View>
      <View style={styles.middle}>
        <Text>Middle</Text>
      </View>
      <View style={styles.bottom}>
        <Text>Botton</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dois;