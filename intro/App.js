//1. Zona de importaciones.
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

//2. Vista, zona de componentes.
export default function App() {
  const [getContador, setContador] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text>{getContador}</Text>
      <Button
          title="Incrementar"
          onPress={() => {setContador(getContador + 1)}}
      />
      <Button
          title="Decrementar"
          onPress={() => {setContador(getContador - 1)}}
      />
      <Button
          title="Reiniciar"
          onPress={() => {setContador(0)}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

//3. Zona de estilos.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
