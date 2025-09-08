import React from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

export default function Um() {
  const openYoutube = async () => {
    const url = "https://www.youtube.com/watch?v=OPWoycAL4HA";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Não foi possível abrir o YouTube.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openYoutube}>
        <Text style={styles.text}>Abrir vídeo no YouTube</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  button: {
    backgroundColor: "#FF0000",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
