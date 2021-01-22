import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image, Pressable, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function MenuPage({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.mainArea}>
                <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate('Megan')}
                >
                    <Image
                    style={styles.image}
                    source={require('../assets/MeganGraphic.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate('Monitor')}>
                    <Image
                    style={styles.image}
                    source={require('../assets/SocialMediaGraphic.png')}/>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.touchable} 
                onPress={() => navigation.navigate('Wearable')}>
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
        backgroundColor: '#121212'
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
        padding: 8
    },
    mainArea: {
        flex: 111,
        padding: 8,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'flex-start'
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