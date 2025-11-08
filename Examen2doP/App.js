import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import ArticleCard from "./components/ArticleCard";
import AppHeader from "./components/AppHeader";
import ArticleSection from './components/ArticleSection'


// Instrucciones:
//     Desarrolla una aplicación tipo portal de noticias o blog con múltiples
// secciones y artículos (Deportes,Nacional,Entretenimiento,Tecnologia).
//     Requerimientos funcionales:
//     1. Pantalla principal estructurada con:
//     - Encabezado fijo con nombre del portal (elige el tuyo)
// 2. Implementar ScrollView principal que contenga 3 Secciones:
//     - Cada sección debe contener 2 artículos por cada categoría
// 3. Cada artículo debe presentarse como tarjeta con:
//     - Una imagen relacionada al articulo
// - título del artículo
// - fecha de publicación
// - resumen breve (2-3 líneas)
// - Button Switch “Leer más”
// 4. Al presionar “Leer más”, mostrar Alert con:
//     - Título del artículo
// - Opciones: “Compartir”, “Guardar”, “Cerrar”
//
// Entregar completo y funcionado:
//     ▪ Antes de hora límite del pizarrón
// ▪ No se revisa después de la hora limite
// Valor:
//     Entregado completo dentro del límite 10
// Sin entregar 0

export default function App() {
    const sections = [
        {
            title: 'Technology',
            articles: [
                {
                    title: 'Titulo de Articulo 1',
                    date: 'April 15 2025',
                    summary: 'Lorem ipsum dolor sit amet.',
                    img: require('./assets/tech1.jpeg'),
                },
                {
                    title: 'Titulo de Articulo 2',
                    date: 'April 16 2025',
                    summary: 'Lorem ipsum dolor sit amet.',
                    img: require('./assets/tech2.jpeg'),
                },
            ]
        },
        {
            title: 'Sports',
            articles: [
                {
                    title: 'Titulo de Articulo 3',
                    date: 'April 15 2025',
                    summary: 'Lorem ipsum dolor sit amet.',
                    img: require('./assets/sports1.jpg'),
                },
                {
                    title: 'Titulo de Articulo 4',
                    date: 'April 16 2025',
                    summary: 'Lorem ipsum dolor sit amet.',
                    img: require('./assets/sports2.jpeg'),
                },
            ]
        },
        {
            title: 'Entertainment',
            articles: [
                {
                    title: 'Titulo de Articulo 5',
                    date: 'April 15 2025',
                    summary: 'Lorem ipsum dolor sit amet.',
                    img: require('./assets/ent1.jpeg'),
                },
                {
                    title: 'Titulo de Articulo 6',
                    date: 'April 16 2025',
                    summary: 'Lorem ipsum dolor sit amet.',
                    img: require('./assets/ent2.jpg'),
                },
            ]
        },
    ]
    return (
        <ScrollView
            stickyHeaderIndices={[0]}
        >
            <AppHeader title="Boring News"/>

            <View style={styles.container}>
                {
                    sections.map((section, index) => (
                        <ArticleSection
                            title={section.title}
                            articles={section.articles}
                            key={index}
                            style={[index !== sections.length - 1 && styles.spacing]}
                        />
                    ))
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    spacing: {
        borderBottomWidth: 1
    }
});
