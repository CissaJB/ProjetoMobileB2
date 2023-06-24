import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function ForgotPasswordPage(){
    return(
       <View style={styles.container}>
        <Image source={require('../../assets/imgs/logofilms.png')} style={styles.imgLogo} />
        <TextInput placeholder="email" style={styles.input}/>
        <TouchableOpacity style={styles.btnLogin}>
            <Text>Recuperar</Text>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
            <Link to={{screen: "LoginPage"}}>Voltar para o Login</Link>
            <Link to={{screen: "RegisterPage"}}>Registrar-se</Link>
        </View>
       </View> 
    )
}