import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Um from './screens/Um';
import Dois from './screens/Dois'
import Tres from './screens/Tres'
import Quatro from './screens/Quatro';
import Cinco from './screens/Cinco';
import Seis from './screens/Seis';
import Sete from './screens/Sete';
import Oito from './screens/Oito';
import Nove from './screens/Nove';
import Dez from './screens/Dez';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <Dez />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
