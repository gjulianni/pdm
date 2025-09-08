import React from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

export default function Tres() {
  const openDialer = async () => {
    const phoneNumber = "tel:+55190"; 
    const supported = await Linking.canOpenURL(phoneNumber);

    if (supported) {
      await Linking.openURL(phoneNumber);
    } else {
      alert("Não foi possível abrir o discador.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openDialer}>
        <Text style={styles.text}>Abrir discador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f2f2f2" },
  button: { backgroundColor: "#4CAF50", paddingVertical: 14, paddingHorizontal: 28, borderRadius: 8 },
  text: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});
