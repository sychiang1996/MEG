import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';
import MessageBubble from '../Components';
import { sendPOSTRequest } from '../requests';

function Megan() {

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.topBar}>
                <Text>Megan</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.mainArea}>
                <MessageBubble
                mine
                text='Hello World!'
                />
            </SafeAreaView>

            <View style={styles.bottomBar}>
                <Button
                onPress={sendPOSTRequest}
                title="POST"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topBar: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent:'center'
    },
    bottomBar: {
        flex: 4,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainArea: {
        flex: 9,
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