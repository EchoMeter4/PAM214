import {StyleSheet, View, Text, Button} from 'react-native';

{/*// - título del artículo*/}
{/*// - fecha de publicación*/}
{/*// - resumen breve (2-3 líneas)*/}
{/*// - Button Switch “Leer más”*/}
{/*// 4. Al presionar “Leer más”, mostrar Alert con:*/}
{/*//     - Título del artículo*/}

export default function ArticleCard({title, summary, date}) {
    return (
        <View style={styles.card}>
            <View style={styles.imagePlaceholder}/>
            <Text>{title}</Text>
            <Text>{summary}</Text>
            <Text>{date}</Text>
            <Button onPress={() => alert(title)} title="Read More"/>
        </View>
    );
}

const styles = StyleSheet.create({
    imagePlaceholder: {
        width: 200, height: 200,
        backgroundColor: 'gray',
    },
    card: {
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10
    }
});
