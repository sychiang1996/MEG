import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View, ScrollView, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import MessageBubble from '../Components/MessageBubble';
import { sendGETRequest, sendPOSTRequest } from '../Components/requests';
import { NavigationContainer } from '@react-navigation/native';

function Megan({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.mainArea}>
                <ScrollView style={styles.scrollview}>
                
                </ScrollView>

                <KeyboardAvoidingView style={styles.replyBox}>
                    <TextInput style={styles.textBox}></TextInput>
                    <TouchableOpacity
                    onPress={dummyFunc}
                    >
                        <Image
                        style={styles.sendButton}
                        source={require('../assets/Send.png')}
                        />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>           
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
    mainArea: {
        flex: 1,
        backgroundColor: '#121212',
    },
    scrollview: {
        flex: 1,
        backgroundColor: '#121212'
    },
    replyBox: {
        height: 55,
        padding: 8,
        backgroundColor: '#1c1c1e',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textBox: {
        height: 35,
        width: '85%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    sendButton:{
        height: 35,
        width: 35,
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

export default Megan;