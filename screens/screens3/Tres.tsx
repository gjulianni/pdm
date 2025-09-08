import React from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

export default function Quatro() {
  const openInstagram = async () => {
    const url = "https://www.instagram.com/fatec_jacarei";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Não foi possível abrir o Instagram.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openInstagram}>
        <Text style={styles.text}>Abrir Instagram</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f2f2f2" },
  button: { backgroundColor: "#C13584", paddingVertical: 14, paddingHorizontal: 28, borderRadius: 8 },
  text: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});
