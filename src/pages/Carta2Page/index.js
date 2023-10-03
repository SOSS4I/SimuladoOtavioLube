import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function Carta2(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/carta2.png')} style={styles.logo}/>
            <Text style={styles.input}> CARTA BARBARO FERAL </Text>
            <Text style={styles.Text}> FORÇA = 90  VELOCIDADE = 180  ESTAMINA = 60</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>TROCAR CARTA</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'carta1'}} style={styles.Link}>CARTA 1</Link>
                <Link to={{screen: 'carta2'}} style={styles.Link}>CARTA 2 </Link>
                <Link to={{screen: 'carta3'}} style={styles.Link}>CARTA 3</Link>
            </View>
        </View>
    )
}