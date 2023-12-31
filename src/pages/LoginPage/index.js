import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){

    const { singIn } = useContext(AuthContext);

    return(
       <View style={styles.container}>
        <Image source={require('../../assets/imgs/logofilms.png')} style={styles.imgLogo} />
        <TextInput placeholder="email" style={styles.input}/>
        <TextInput placeholder="senha" style={styles.input}  secureTextEntry/>
        <TouchableOpacity style={styles.btnLogin} onPress={() => singIn()}>
            <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
            <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
            <Link to={{screen: "ForgotPasswordPage"}}>Esqueci minha senha</Link>
        </View>
       </View> 
    )
}