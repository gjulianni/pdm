import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "Onze">;

export default function Onze({ navigation }: Props) {
  const telas = [
    "Um", "Dois", "Tres", "Quatro", "Cinco",
    "Seis", "Sete", "Oito", "Nove", "Dez"
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {telas.map((tela) => (
        <TouchableOpacity
          key={tela}
          style={styles.button}
          onPress={() => navigation.navigate(tela as any)}
        >
          <Text style={styles.text}>{tela}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10
  },
  button: {
    backgroundColor: "yellow",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 5,
    width: "80%",
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  }
});
