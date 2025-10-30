import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    Switch,
    Button, Alert
} from "react-native";
import {useEffect, useState} from "react";
/*
• Logo personalizado de carga
• Solicitud Nombre completo y correo electrónico
• Switch para aceptar términos y condiciones
• Botón para registrarse
• Alerta que muestra los datos ingresados correctamente
• Validación de no campos vacíos
• Validación de “debes aceptar términos y condiciones”
• Imagen de fondo
 */

export default function RepasoUnoScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [terms, setTerms] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    function register() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailRegex.test(email)

        if (name.trim() === '') {
            Alert.alert('Error', 'Por favor introduce tu nombre.')
            return;
        }

        if (!emailRegex.test(email.trim())) {
            Alert.alert('Error', 'Por favor introduce tu email correctamente.')
            return;
        }

        if (!terms) {
            Alert.alert('Error', 'Los Términos y Condiciones no han sido aceptados.')
            return;
        }

        Alert.alert('Registro Exitoso', `Nombre: ${name}\nCorreo: ${email}`)
    }

    if (isLoading)
        return (
            <View style={styles.safeArea}>
                <ImageBackground
                    source={require('../assets/wallpaper-repaso.png')}
                    style={styles.background}
                    resizeMode="cover"
                >
                    <Image
                        resizeMode="center"
                        source={require('../assets/UPQ-Logo.png')}
                    />
                </ImageBackground>
            </View>
        )
    return (
        <View style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/wallpaper-repaso.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.card}>
                    <View>
                        <Text style={styles.label}>
                            Nombre completo:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="John Doe"
                            value={name}
                            onChangeText={setName}
                            keyboardType="default"
                            autoCapitalize="words"
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>
                            Correo Electrónico
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="ejemplo@ejemplo.com"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                        />
                    </View>

                    <View
                        style={[
                            {
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: 10,
                                alignItems: "center"
                            }
                        ]}
                    >
                        <Text style={{marginRight: 10}}>
                            Aceptar Términos y Condiciones
                        </Text>
                        <Switch
                            onValueChange={() => setTerms(!terms)}
                            value={terms}
                        />
                    </View>

                    <Button
                        title="Registrarse"
                        onPress={() => register()}
                        color="#841584"
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },
    label: {
        marginBottom: 5
    }
})
