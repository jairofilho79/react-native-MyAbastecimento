import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#FFA500',
        alignItems: 'center'
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    logo: {
        width: 120,
        height: 120
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        marginTop: 20
    },
    inputContainer: {
        marginTop: 20,
        alignItems: "center"
    },  
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16, 
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, .7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37,
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37,
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        backgroundColor: '#E82A00',
        justifyContent: 'center',
        marginTop: 20
    },
    btnLoginText: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: 16,
        textAlign: 'center'
    }
})