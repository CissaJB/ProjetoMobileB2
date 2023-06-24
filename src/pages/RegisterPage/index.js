import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage(){
    return(
       <View style={styles.container}>
        <Image source={require('../../assets/imgs/logofilms.png')} style={styles.imgLogo} />
        <TextInput placeholder="username" style={styles.input}/>
        <TextInput placeholder="email" style={styles.input}/>
        <TextInput placeholder="senha" style={styles.input}  secureTextEntry/>
        <TouchableOpacity style={styles.btnLogin}>
            <Text>Registrar</Text>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
            <Link to={{screen: "LoginPage"}}>Voltar para o Login</Link>
            <Link to={{screen: "ForgotPasswordPage"}}>Esqueci minha senha</Link>
        </View>
       </View> 
    )
}