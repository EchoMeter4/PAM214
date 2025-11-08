import {StyleSheet, View, Text, Button, Image, Alert} from 'react-native';

export default function ArticleCard({title, summary, date, index = 1, image}) {
    return (
        <View style={[index === 0 && styles.spacing]}>
            <Image source={image} style={styles.image}/>
            <Text>{title}</Text>
            <Text>{summary}</Text>
            <Text>{date}</Text>
            <Button onPress={() => alert(title)} title="Read More"/>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
        resizeMode: "cover"
    },
    spacing: {
        marginRight: 20,
    }
});
