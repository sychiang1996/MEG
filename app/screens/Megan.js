import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const APIUrl = 'https://meg-backend-46.herokuapp.com/Megan/';

function Megan() {
    const [messages, setMessages] = useState([]);

    var initialMessage = '';
    const data = JSON.stringify({
        "stage": "1",
        "response_type": "closed",
        "text": "None"
    })
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
        initialMessage = jsonResponse;
    })

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: initialMessage,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Megan',
                    avatar: require('C:/Users/atwb9/FYP/MEG/app/assets/logo.png'),
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

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