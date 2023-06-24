import { StyleSheet, Text, View } from "react-native";

export default function MovieDetailsPage({route}){

    const { filme } = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse}</Text> 
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
    },
    sinopse: {
        fontSize: 20,
        textAlign: 'center'
    }
})

