import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { sendGETRequest, sendPOSTRequest } from '../Components/requests';
import { NavigationContainer } from '@react-navigation/native';

function SMM({ navigation }) {

    return (
        <View style={styles.container}>

            <StatusBar style='dark'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    text: {
        fontSize: 14,
        color: '#fff'
    },
});

const dummyFunc = () => {
    console.log('Hi!');
};

const query = () => {
    sendPOSTRequest({
        "stage": "1",
        "response_type": "closed",
        "text": "None"
    });
};

export default SMM;