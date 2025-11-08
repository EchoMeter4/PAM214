import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
                    summary: 'Lorem ipsum dolor sit amet.'
                },
                {
                    title: 'Titulo de Articulo 2',
                    date: 'April 16 2025',
                    summary: 'Lorem ipsum dolor sit amet.'
                },
            ]
        },
        {
            title: 'Sports',
            articles: [
                {
                    title: 'Titulo de Articulo 3',
                    date: 'April 15 2025',
                    summary: 'Lorem ipsum dolor sit amet.'
                },
                {
                    title: 'Titulo de Articulo 4',
                    date: 'April 16 2025',
                    summary: 'Lorem ipsum dolor sit amet.'
                },
            ]
        },
        {
            title: 'Entertainment',
            articles: [
                {
                    title: 'Titulo de Articulo 5',
                    date: 'April 15 2025',
                    summary: 'Lorem ipsum dolor sit amet.'
                },
                {
                    title: 'Titulo de Articulo 6',
                    date: 'April 16 2025',
                    summary: 'Lorem ipsum dolor sit amet.'
                },
            ]
        },
    ]
    return (
        <ScrollView
            stickyHeaderIndices={[0]}
        >
            <View style={styles.container}>
                <AppHeader title="Boring News"/>
                {
                    sections.map(section => (
                        <ArticleSection
                            title={section.title}
                            articles={section.articles}
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
    },
});
