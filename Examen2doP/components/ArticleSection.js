import {StyleSheet, View, Text} from 'react-native';
import ArticleCard from "./ArticleCard";

export default function articleSection({title, articles, style}) {
    return (
        <View style={[styles.section && style]}>
            <Text style={styles.sectionHeader}>{title}</Text>
            <View style={styles.articleContainer}>
                {
                    articles.map(
                        (article, index)=> (
                            <ArticleCard
                                style={styles.articleStyle}
                                title={article.title}
                                date={article.date}
                                summary={article.summary}
                                image={article.img}
                                index={index}
                                key={index}
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
        flexDirection: 'row',
        marginBottom: 10
    },
    articleStyle: {
        marginRight: 100
    },
    sectionHeader: {
        fontSize: 24,
        marginBottom: 5
    },
    section: {
    }
});
