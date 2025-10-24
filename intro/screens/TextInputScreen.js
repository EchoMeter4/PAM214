import {
    Text,
    StyleSheet,
    View,
    Button,
    Alert,
    TextInput,
    Platform
} from "react-native";
import React, {useState} from 'react';

export default function TextInputScreen() {
    const [nombre, setNombre] = useState('');
    const [pin, setPin] = useState('');
    const [comentario, setComentario] = useState('');

    function mostrarAlerta() {
        if ([nombre.trim(), pin.trim(), comentario.trim()].includes('')) {
            if (Platform.OS === 'web') {
                alert('Por favor complete el formulario.');
            } else {
                Alert.alert('Error', 'Por favor, llena todos los campos.');
            }
        } else {
            if (Platform.OS === 'web') {
                alert(`Hola, ${nombre}!`);
            } else {
                Alert.alert(`Hola, ${nombre}!`, 'Tu nombre ha sido registrado con éxito.');
            }
            setNombre('');
            setPin('');
            setComentario('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Ingresa tu nombre:
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Ej. Gael"
                value={nombre}
                onChangeText={setNombre}
                keyboardType="default"
                autoCapitalize="words"
            />

            <TextInput
                style={styles.input}
                placeholder="Pin"
                value={pin}
                onChangeText={setPin}
                keyboardType="numeric"
                secureTextEntry={true}
            />

            <TextInput
                style={styles.input}
                placeholder="Ej. Gael"
                value={comentario}
                onChangeText={setComentario}
                keyboardType="default"
                multiline={true}
                numberOfLines={4}
            />

            <Button
                title="Saludar"
                onPress={mostrarAlerta}
                color="#841584"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1, //Sirve para ver el borde del input
        borderRadius: 8, // Bordes redondeados
        paddingHorizontal: 15, // Espacio interno a los lados
        marginBottom: 20, // Espacio debajo del input
        fontSize: 16,
    }
});
