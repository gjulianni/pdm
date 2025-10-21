import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  useWindowDimensions,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import portraitStyles from './styles.portrait';
import landscapeStyles from './styles.landscape';

const Exercicio5: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const styles = isPortrait ? portraitStyles : landscapeStyles;

 
  const [nome, setNome] = useState<string>('');
  const [nomesSalvos, setNomesSalvos] = useState<string[]>([]);

  const handleSalvarNome = () => {
    if (nome.trim().length > 0) {
      setNomesSalvos(nomesAnteriores => [...nomesAnteriores, nome.trim()]);
      setNome(''); 
    }
  };

  const corTextoLista = isPortrait ? '#FFFFFF' : '#000000';

  return (
    <SafeAreaView style={styles.container}>
   
      <View style={localStyles.inputContainer}>
        <Text style={[
            localStyles.label, 
            { color: corTextoLista }
        ]}>
          Nome completo
        </Text>
        
        <TextInput
          style={localStyles.input}
          value={nome}
          onChangeText={setNome}
          onSubmitEditing={handleSalvarNome}
          returnKeyType="done"
          placeholder="Digite o nome..."
        />

        <ScrollView style={localStyles.scrollView}>
          {nomesSalvos.map((nomeItem, index) => (
            <Text 
              key={index} 
              style={[localStyles.nomeItem, { color: corTextoLista }]}
            >
              {nomeItem}
            </Text>
          ))}
        </ScrollView>
      </View>

      {isPortrait && (
        <View style={styles.top}>
          <Text>Exercício 5</Text>
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


const localStyles = StyleSheet.create({
  inputContainer: {
    flex: 2, 
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  nomeItem: {
    fontSize: 18,
    paddingVertical: 4,
  },
});

export default Exercicio5;