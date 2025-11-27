import {useEffect, useState, useCallback} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
    ActivityIndicator,
    Platform
} from 'react-native';
import {UsuarioController} from "../controllers/UsuarioController";
import RenderUsuario from '../components/RenderUsuario';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(true);
    const [guardando, setGuardando] = useState(false);

    const cargarUsuarios = useCallback(async () => {
        try {
            setLoading(true);
            const data = await controller.obtenerUsuarios();
            setUsuarios(data);
            console.log(`${data.length} usuarios cargados`);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const init = async () => {
            await controller.initialize();
            await cargarUsuarios();
        }

        init();
        controller.addListener(cargarUsuarios);

        return () => {
            controller.removeListener(cargarUsuarios())
        };
    }, [cargarUsuarios])

    const handleAgregar = async () => {
        if (guardando) return;
        try {
            setGuardando(true);
            const usuarioCreado = await controller.crearUsuario(nombre);
            Alert.alert('Usuario Creado', `"${usuarioCreado.nombre} guardado con ID: ${usuarioCreado.id}"`);
            setNombre('');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setGuardando(false);
        }
    }

    return (

        <View style={styles.container}>

            {/* Zona del encabezado */}

            <Text style={styles.title}> INSERT & SELECT</Text>
            <Text style={styles.subtitle}>
                {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
            </Text>

            {/* Zona del INSERT */}

            <View style={styles.insertSection}>
                <Text style={styles.sectionTitle}> Insertar Usuario</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Escribe el nombre del usuario"
                    value={nombre}
                    onChangeText={setNombre}
                    editable={!guardando}
                />

                <TouchableOpacity
                    style={[styles.button, guardando && styles.buttonDisabled]}
                    onPress={handleAgregar}
                    disabled={guardando}
                >

                    <Text style={styles.buttonText}>
                        {guardando ? ' Guardando...' : 'Agregar Usuario'}
                    </Text>

                </TouchableOpacity>

            </View>


            {/* Zona del SELECT */}

            <View style={styles.selectSection}>

                <View style={styles.selectHeader}>

                    <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

                    <TouchableOpacity
                        style={styles.refreshButton}
                        onPress={cargarUsuarios}
                    >
                        <Text style={styles.refreshText}>Recargar</Text>
                    </TouchableOpacity>

                </View>

                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#007AFF"/>
                        <Text style={styles.loadingText}>Cargando
                                                         usuarios...</Text>
                    </View>
                ) : (
                    <FlatList
                        data={usuarios}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item, index}) => (
                            <RenderUsuario item={item} index={index}/>
                        )}
                        ListEmptyComponent={
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}> No hay
                                                                usuarios</Text>
                                <Text style={styles.emptySubtext}>Agrega el
                                                                  primero
                                                                  arriba</Text>
                            </View>
                        }
                        contentContainerStyle={usuarios.length === 0 && styles.emptyList}
                    />
                )}


            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    insertSection: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    selectSection: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 12,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 15,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: '#fafafa',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    selectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    refreshButton: {
        padding: 8,
    },
    refreshText: {
        color: '#007AFF',
        fontSize: 14,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    loadingText: {
        marginTop: 10,
        color: '#666',
        fontSize: 14,
    },
    emptyContainer: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#bbb',
    },
    mvcInfo: {
        backgroundColor: '#e3f2fd',
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#2196F3',
    },
    mvcTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1976D2',
        marginBottom: 8,
    },
    mvcText: {
        fontSize: 12,
        color: '#555',
        lineHeight: 18,
    },
    bold: {
        fontWeight: 'bold',
        color: '#1976D2',
    },
});