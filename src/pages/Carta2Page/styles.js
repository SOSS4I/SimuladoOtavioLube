import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkgoldenrod',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '300px',
        height: '400px',
        marginBottom: '20px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: 'black',
        color:'white',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px solid white',
        borderRadius: '5px',
        marginBottom: '5px',
        alignItems:'center',
    },
    btn: {
        backgroundColor: 'white',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: 'green'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },
    Text:{
        width: '80%',
        height: '75px',
        backgroundColor: 'black',
        color:'white',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px solid white',
        borderRadius: '5px',
        marginBottom: '5px',
        alignItems:'center',

    },

    Link:{
        width:'35%',
        height:'50px',
        backgroundColor: 'black',
        color:'white',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px solid white',
        borderRadius: '5px',
        marginBottom: '5px',
        alignItems:'center',
        

    }

});

export default styles;