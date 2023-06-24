import { Link } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl ="http://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilme({ filme }){
    return(
        <View style={styles.container}>
           <Image style={styles.image} source={{ uri : baseUrl + filme.poster.data.attributes.url  }} />
           <Text style={styles.title}>{filme.titulo}</Text> 
           <Text style={styles.sinopse}>{filme.sinopse.
           length > 200 ? filme.sinopse.substring(0,200) +
        "..." : filme.sinopse }</Text> 
        <Link to={{screen: "DetailsPage", params:{filme: filme}}}>Saiba mais ...</Link>
           <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text> 
           </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: 'lightblue',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover'
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
    sinopse: {
        marginBottom: 10,
        textAlign: 'justify',
        fontSize: 16,
    },
    button: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC745',
        marginTop: 20,
        borderRadius: 10
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})