import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useCep } from "./hooks/useCep";

export default function CepScreen() {
  const [inputCep, setInputCep] = useState("");
  const { cepData, consultarCep, mensagemErro } = useCep();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        maxLength={8}
        value={inputCep}
        onChangeText={setInputCep}
      />
      <TouchableOpacity style={styles.button} onPress={() => consultarCep(inputCep)}>
        <Text style={styles.buttonText}>Obter</Text>
      </TouchableOpacity>

      {mensagemErro && <Text style={styles.error}>{mensagemErro}</Text>}

      {cepData && (
        <View style={styles.result}>
          <Text>CEP: {cepData.cep}</Text>
          <Text>Logradouro: {cepData.logradouro}</Text>
          <Text>Bairro: {cepData.bairro}</Text>
          <Text>Cidade: {cepData.localidade}</Text>
          <Text>UF: {cepData.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: "80%",
    marginBottom: 15,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#1976D2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  error: { color: "red", marginTop: 10, fontSize: 16 },
  result: { marginTop: 20, alignItems: "center" }
});