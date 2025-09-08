import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useCep } from "./hooks/useCep";

export default function ConsultasScreen() {
  const { consultas } = useCep();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Consultas</Text>
      <ScrollView style={styles.scroll}>
        {consultas.length === 0 ? (
          <Text style={styles.empty}>Nenhum CEP consultado ainda</Text>
        ) : (
          consultas.map((c, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cep}>{c.cep}</Text>
              <Text>{c.logradouro}</Text>
              <Text>{c.bairro}</Text>
              <Text>{c.localidade} - {c.uf}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  scroll: { flex: 1 },
  empty: { textAlign: "center", marginTop: 20, color: "gray" },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },
  cep: { fontWeight: "bold", fontSize: 16 }
});
