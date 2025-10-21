import React from "react";
import { Text, SafeAreaView, View, useWindowDimensions } from "react-native";
import portraitStyles from "./styles.portrait";
import landscapeStyles from "./styles.landscape";

const Exercicio4: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const styles = isPortrait ? portraitStyles : landscapeStyles;

  return (
    <SafeAreaView style={styles.container}>
      {isPortrait && (
        <View style={styles.top}>
          <Text>Exercício 4</Text>
        </View>
      )}

      <View style={styles.middle}>
        <Text>Middle</Text>
      </View>

      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  );
};

export default Exercicio4;