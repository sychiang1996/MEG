import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import sendGETRequest from '../requests';

function Megan() {
    var response;
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.topBar}>
                <Text>Megan</Text>
            </SafeAreaView>

            <View style={styles.mainArea}>
                <Text>Main Text Area</Text>
                <Text>{response}</Text>
            </View>

            <View style={styles.bottomBar}>
                <Button 
                onPress={sendGETRequest} 
                title='Hi'
                color='#fff'
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
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent:'center'
    },
    bottomBar: {
        flex: 3,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainArea: {
        flex: 12,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Megan;