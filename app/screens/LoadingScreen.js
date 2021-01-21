import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { sendGETRequest } from '../Components/requests';

function LoadingScreen() {
    sendGETRequest();
    return (
        <View style={styles.container}>
            <View style={styles.bg}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
            </View>            
            <StatusBar style='dark'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    bg: {
        height: '100%',
        width: '100%',
        backgroundColor: '#E29578',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
})

export default LoadingScreen;