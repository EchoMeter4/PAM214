import {StyleSheet, View, Text} from 'react-native';
import ArticleCard from "./ArticleCard";

export default function articleSection({title, articles}) {
    return (
        <View>
            <Text>{title}</Text>
            <View style={styles.articleContainer}>
                {
                    articles.map(
                        article => (
                            <ArticleCard
                                style={styles.articleStyle}
                                title={article.title}
                                date={article.date}
                                summary={article.summary}
                            />
                        )
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    articleContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    articleStyle: {
        marginRight: 100
    }
});
