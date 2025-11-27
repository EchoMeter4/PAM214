import {StyleSheet, View, Text} from "react-native";

export default function RenderUsuario({item, index}) {
    return (
        <View style={styles.userItem}>
            <View style={styles.userNumber}>
                <Text style={styles.userNumberText}>
                    {index + 1}
                </Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>
                    {item.nombre}
                </Text>
                <Text style={styles.userId}>
                    ID: {item.id}
                </Text>
                <Text style={styles.userDate}>
                    {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userItem: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
    },
    userNumber: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    userNumberText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    userId: {
        fontSize: 12,
        color: '#007AFF',
        marginBottom: 2,
    },
    userDate: {
        fontSize: 12,
        color: '#666',
    },
})