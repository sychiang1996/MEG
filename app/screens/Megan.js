import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View, ScrollView, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import MessageBubble from '../Components/MessageBubble';
import { NavigationContainer } from '@react-navigation/native';

const APIUrl = 'https://meg-backend-46.herokuapp.com/Megan/';

function Megan({ navigation }) {
    const [stage, setStage] = useState(0);
    const [userInput, setUserInput] = useState('');

    const send = () => {
        const data = JSON.stringify({
            'stage': '4',
            'response_type': 'open',
            'text': userInput
        });

        fetch(APIUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed.');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            console.log(jsonResponse);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainArea}>
                <ScrollView style={styles.scrollview}>
                    <MessageBubble
                    mine
                    text='Hi!'
                    />
                </ScrollView>

                <KeyboardAvoidingView style={styles.replyBox}>
                    <TextInput
                    style={styles.textBox}
                    onChangeText={text => setUserInput(text)}
                    value={userInput}
                    />

                    <TouchableOpacity
                    onPress={send}
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

export default Megan;