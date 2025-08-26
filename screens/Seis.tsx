import React, { useState } from "react";
import { TextInput, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const GlobalStyles = styled.View`
  flex: 1;
  background-color: #2f2f2f;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.TextInput`
  width: 80%;
  height: 40px;
  margin: 8px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
`;

const ButtonSld = styled.TouchableOpacity`
  width: 80%;
  background-color: #2196f3;
  padding: 12px;
  border-radius: 5px;
  align-items: center;
  margin-top: 12px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 500;
  text-transform: uppercase;
`;

const NameText = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 12px;
`;

const Label = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 4px;

`;

export default function Seis() {
  const [text, onChangeText] = useState("");
  const [idade, onChangeIdade] = useState("");
  const [showValues, setShowValues] = useState(false);

  const handlePress = () => {
    setShowValues(!showValues);
  };

  return (
    <SafeAreaProvider>
      <GlobalStyles>
        <StyledInput
          placeholder="Seu nome"
          value={text}
          onChangeText={onChangeText}
        />
        <StyledInput
          placeholder="Sua idade"
          value={idade}
          onChangeText={onChangeIdade}
          keyboardType="numeric"
        />
        <ButtonSld onPress={handlePress}>
          <ButtonText>Salvar</ButtonText>
        </ButtonSld>

        {showValues && <NameText>{text} - {idade}</NameText>}
      </GlobalStyles>
    </SafeAreaProvider>
  );
}
