import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Pressable, Button } from 'react-native';
import MessageBubble from '../Components/MessageBubble';
import { sendGETRequest, sendPOSTRequest } from '../Components/requests';

function Megan() {

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>

            </View>

            <ScrollView style={styles.mainArea}>
                <MessageBubble
                mine
                text='Hello World!'
                />
                <MessageBubble
                text='what'
                />
                <MessageBubble
                text='if'
                />
                <MessageBubble
                text='i'
                />
                <MessageBubble
                mine
                text='have'
                />
                <MessageBubble
                mine
                text='many'
                />
                <MessageBubble
                text='many'
                />
                <MessageBubble
                text='messages'
                />
                <MessageBubble
                text='messages'
                />
                <MessageBubble
                text='messages'
                />
                <MessageBubble
                text='messages'
                />
                <MessageBubble
                text='messages'
                />
                <MessageBubble
                text='messages'
                />
                <MessageBubble
                text='messages'
                />
                <MessageBubble
                text='messages'
                />
            </ScrollView>

            <View style={styles.bottomBar}>
                <Button
                    style={styles.text}
                    onPress={sendPOSTRequest({
                        "stage": "1",
                        "response_type": "closed",
                        "text": "None"
                    })}
                    title='Hello!'
                />
            </View>
            <StatusBar style='dark'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 14
    },
    topBar: {
        height: 85,
        width: '100%',
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomBar: {
        height: 45,
        width: '100%',
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainArea: {
        flex: 3,
        backgroundColor: '#000000',
    },
});

const UselessTextInput = () => {
    const [value, onChangeText] = React.useState('Type here');

    return (
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText(text)}
        value={value}
        />
    )
};

export default Megan;