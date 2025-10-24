import {Text, StyleSheet, View, Button, Alert, TextInput, Platform} from "react-native";
import React, {useState} from 'react';

export default function TextInputScreen() {

    function mostrarAlerta() {
        return (
            <View>
                <Text>Proximamente</Text>
            </View>
        )
    }
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
    },
});
