import {StyleSheet, View, Text} from 'react-native';

export default function AppHeader({title}) {
    return (
        <View style={styles.header}>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f7f7f7',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
    },
});
