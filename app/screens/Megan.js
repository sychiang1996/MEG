import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View, ScrollView, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import MessageBubble from '../Components/MessageBubble';
import { sendGETRequest, sendPOSTRequest } from '../Components/requests';
import { NavigationContainer } from '@react-navigation/native';

function Megan({ navigation }) {

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.mainArea}>
                <ScrollView style={styles.scrollview}>
                
                </ScrollView>

                <View style={styles.replyBox}>
                    <TextInput style={styles.textBox}></TextInput>
                    <TouchableOpacity
                    onPress={dummyFunc}
                    >
                        <Image
                        style={styles.sendButton}
                        source={require('../assets/Send.png')}
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>           
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
        flex: 111,
        backgroundColor: '#121212',
    },
    scrollview: {
        flex: 1,
        backgroundColor: '#121212'
    },
    replyBox: {
        flex: 0.1,
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
    menuButton: {
        height: 30,
        width: 30,
        position: 'relative',
        top: 40,
        right: 0,
        bottom: 15,
        left: 15,
    }
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