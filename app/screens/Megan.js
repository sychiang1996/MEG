import React, { useState, useCallback, useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { NavigationContainer } from '@react-navigation/native';

const APIUrl = 'https://meg-backend-46.herokuapp.com/Megan/';

function Megan() {
    const [messages, setMessages] = useState([]);
    const [appReady, setAppReady] = useState(false);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, []);   

    async function getMegan(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed.');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            let message = {
                _id: 2,
                text: jsonResponse,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Megan',
                    avatar: require('C:/Users/atwb9/FYP/MEG/app/assets/logo.png')
                }
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, message));
        });
    }

    if (!appReady) {
        const data = {
            "stage": "1",
            "response_type": "closed",
            "text": "None"
        };
        getMegan(APIUrl, data);
        setAppReady(true);
    }

    return (
        <View style={styles.container}>
            <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    }
});

export default Megan;