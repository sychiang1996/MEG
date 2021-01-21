import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image, Pressable, TouchableOpacity, Text } from 'react-native';

function MenuPage() {

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>

            </View>

            <View style={styles.mainArea}>
                <TouchableOpacity style={styles.touchable} onPress={chat}>
                    <Image
                    style={styles.image}
                    source={require('../assets/MeganGraphic.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable} onPress={monitor}>
                    <Image
                    style={styles.image}
                    source={require('../assets/SocialMediaGraphic.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable} onPress={wearable}>
                    <Image
                    style={styles.image}
                    source={require('../assets/WearableGraphic.png')}/>
                </TouchableOpacity>
            </View>
            <StatusBar style='dark'/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 14,
        color: '#fff'
    },
    image: {
        height: 150,
        width: 340
    },
    touchable: {
        flex: 1,
        padding: 15
    },
    topBar: {
        height: 85,
        width: '100%',
        backgroundColor: '#1c1c1e',
    },
    mainArea: {
        flex: 111,
        backgroundColor: '#121212',
        alignItems: 'center'
    },
});

const dummyFunc = () => {
    console.log('Hi!');
}

const chat = () => {
    console.log('Chat!');
}

const monitor = () => {
    console.log('Monitor!');
}

const wearable = () => {
    console.log('Wearable!');
}

export default MenuPage;