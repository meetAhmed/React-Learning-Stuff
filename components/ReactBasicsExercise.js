import React from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Button,
    Alert,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions,
    ImageBackground
} from 'react-native';

import colors from '../config/Colors';

const handleTap = () => {

}

const ReactBasicsExercise = () => {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.background}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text>Sell What You Don't Need!</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#fc5c65'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    registerButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#4ecdc4'
    },
});

export default ReactBasicsExercise;