import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { sendGETRequest } from '../Components/requests';

function LoadingScreen() {
    sendGETRequest();
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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