import React, { useState } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'; 

import { Feather } from '@expo/vector-icons';

import logo from '../../../assets/icon.png';

import styles from './styles';

export default function Login() {

    const [passwordVisible, setPasswordVisibility] = useState(true)
    const [passwordVisibilityIcon, setPasswordVisibilityIcon] = useState('eye');

    function changePasswordVisibility() {
        setPasswordVisibility(!passwordVisible);

        setPasswordVisibilityIcon(passwordVisible ? 'eye-off' : 'eye');
    }

    // function login() {
    //     return 123
    // }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.logoText}>My Abastecimento</Text>
            </View>

            <View style={styles.inputContainer}>
                <Feather 
                    name='user' 
                    size={28} 
                    color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.inputIcon}
                />
                <TextInput 
                    style={styles.input}
                    placeholder={'Usuário'}
                    placeholderTextColor={'rgba(255, 255, 255, .7)'}
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.inputContainer}>
                <Feather 
                    name='lock' 
                    size={28} 
                    color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.inputIcon}
                />

                <TextInput 
                    style={styles.input}
                    placeholder={'Senha'}
                    secureTextEntry={passwordVisible}
                    placeholderTextColor={'rgba(255, 255, 255, .7)'}
                    underlineColorAndroid='transparent'
                />

                <TouchableOpacity 
                    style={styles.btnEye}
                    onPress={changePasswordVisibility}
                >
                    <Feather 
                        name={passwordVisibilityIcon} 
                        size={26}
                        color={'rgba(255, 255, 255, 0.7)'}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                style={styles.btnLogin}
                onPress={() => {}}
            >
                <Text style={styles.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}