import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button, TextInput } from 'react-native';
import MessageBubble from '../Components/MessageBubble';
import { sendGETRequest, sendPOSTRequest } from '../Components/requests';

function Megan() {

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.topBar}>
                <Text style={styles.text}>Megan</Text>
            </SafeAreaView>

            <ScrollView style={styles.mainArea}>
                
            </ScrollView>

            <View style={styles.bottomBar}>
                <Button
                onPress={sendPOSTRequest}
                title="POST"
                />
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
    topBar: {
        height: '10%',
        width: '100%',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent:'center'
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