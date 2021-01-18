import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native';
import MessageBubble from '../Components/MessageBubble';
import { sendGETRequest, sendPOSTRequest } from '../Components/requests';

function Megan() {

    return (
        <SafeAreaView style={styles.container}>
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
            </ScrollView>

            <View style={styles.bottomBar}>
                <Pressable
                    onPress={sendPOSTRequest}
                >
                    <Text style={styles.text}>Hi there</Text>
                </Pressable>
            </View>
            <StatusBar style='dark'/>
        </SafeAreaView>
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
    bottomBar: {
        height: '20%',
        width: '100%',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainArea: {
        flex: 3,
        backgroundColor: '#fff',
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