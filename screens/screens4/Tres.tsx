import React from "react";
import { Text, SafeAreaView, View, useWindowDimensions } from "react-native";
import portraitStyles from "./styles.portrait";
import landscapeStyles from "./styles.landscape";

const Exercicio3: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const styles = isPortrait ? portraitStyles : landscapeStyles;

  return (
    <SafeAreaView style={styles.container}>
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

export default Exercicio3;