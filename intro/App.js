//1. Zona de importaciones.
import {Button, StyleSheet, Text, View} from 'react-native';
import MenuScreen from "./screens/MenuScreen";

//2. Vista, zona de componentes.
export default function App() {
    return (
        <MenuScreen/>
    )
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
