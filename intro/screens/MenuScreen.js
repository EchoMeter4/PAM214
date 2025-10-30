import {Text, StyleSheet, View, Button} from "react-native";
import React, {useState} from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from "./TextInputScreen";
import ImageBackgroundScreen from "./ImageBackgroundScreen";
import ScrollViewScreen from "./ScrollViewScreen";
import ActivityIndicatorScreen from "./ActivityIndicatorScreen";
import FlatListScreen from "./FlatListScreen";
import ModalScreen from "./ModalScreen";
import BottomSheetScreen from "./BottomSheetScreen";
import RepasoUnoScreen from "./RepasoUnoScreen";

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'textInput':
            return <TextInputScreen/>
        case 'imageBackground':
            return <ImageBackgroundScreen/>
        case 'scrollView':
            return <ScrollViewScreen/>
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>
        case 'flatList':
            return <FlatListScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottomSheet':
            return <BottomSheetScreen/>
        case 'repasoUno':
            return <RepasoUnoScreen/>
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <Text>Menú de Prácticas</Text>
                    <Button
                        title="Práctica Contador"
                        onPress={() => setScreen('contador')}
                    />
                    <Button
                        title="Práctica Botones"
                        onPress={() => setScreen('botones')}
                    />
                    <Button
                        title="Práctica TextInput"
                        onPress={() => setScreen('textInput')}
                    />
                    <Button
                        title="Práctica ImageBackground"
                        onPress={() => setScreen('imageBackground')}
                    />
                    <Button
                        title="Práctica ScrollView"
                        onPress={() => setScreen('scrollView')}
                    />
                    <Button
                        title="Práctica ActivityIndicator"
                        onPress={() => setScreen('activityIndicator')}
                    />
                    <Button
                        title="Práctica FlatList"
                        onPress={() => setScreen('flatList')}
                    />
                    <Button
                        title="Práctica Modal"
                        onPress={() => setScreen('modal')}
                    />
                    <Button
                        title="Práctica BottomSheet"
                        onPress={() => setScreen('bottomSheet')}
                    />
                    <Button
                        title="Repaso Uno"
                        onPress={() => setScreen('repasoUno')}
                    />
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
