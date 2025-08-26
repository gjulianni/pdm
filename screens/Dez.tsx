import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import {Switch, StyleSheet} from 'react-native';
import styled from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

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

const ButtonSld = styled.TouchableOpacity<{ disabled?: boolean }>`
  width: 80%;
  background-color: ${(props: any) => (props.disabled ? "#aaa" : "#f6b20d")};
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

const StyledPicker = styled(Picker)`
  width: 80%;
  height: 50px;
  color: black;         
  background-color: #fff; 
  margin: 8px 0;
`;

export default function Nove() {
  const [text, onChangeText] = useState("");
  const [newText, setNewText] = useState("");
  const [password, onChangePassword] = useState("");
  const [showValues, setShowValues] = useState(false);
  const [role, setRole] = useState();
  const [stayConnected, setStayConnected] = useState(true);

  const toggleSwitch = () => setStayConnected(previousState => !previousState);



  const [confirmPassword, setConfirmPassword] = useState(false);

  useEffect(() => {
    if (newText !== "" && newText === password) {
      setConfirmPassword(true);
    } else {
      setConfirmPassword(false);
    }
  }, [newText, password]);

  const handlePress = () => {
    setShowValues(!showValues);
  };

  return (
    <SafeAreaProvider>
      <GlobalStyles>
        <StyledInput
          placeholder="Seu e-mail"
          value={text}
          onChangeText={onChangeText}
          keyboardType="email-address"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="false"
        />
        <StyledInput
          placeholder="Sua senha"
          value={password}
          onChangeText={onChangePassword}
          keyboardType="text"
          secureTextEntry={true}
          maxLength={8}
        />
                <StyledInput
          placeholder="Confirme sua senha"
          value={newText}
          onChangeText={setNewText}
          keyboardType="text"
          secureTextEntry={true}
          maxLength={8}
        />
        <StyledPicker
  selectedValue={role}
  onValueChange={(itemValue: any, itemIndex: any) =>
    setRole(itemValue)
  }>
  <Picker.Item label="Administrador" value="adm" />
  <Picker.Item label="Gestor" value="gestor" />
  <Picker.Item label="Usuário" value="usuario" />
</StyledPicker>
<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
  <h1 style={{ fontSize: '16px', color: '#fff', margin: '5px', fontWeight: '300'}}>Manter-se conectado</h1>
  <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={stayConnected ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={stayConnected}
        />
</View>

        <View style={{ display: 'flex', flexDirection: 'row', gap: '10px', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
        <ButtonSld onPress={handlePress} disabled={!confirmPassword}>
          <ButtonText>Logar</ButtonText>
        </ButtonSld>
        <ButtonSld onPress={handlePress}>
          <ButtonText>Cadastrar-se</ButtonText>
        </ButtonSld>
        </View>

        {showValues && <NameText>{text} - {password} - {role} </NameText>}
      </GlobalStyles>
    </SafeAreaProvider>
  );
}
