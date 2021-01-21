import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

function MenuPage() {

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>

            </View>
            
            <View>

            </View>

            <View>

            </View>

            <View>

            </View>
            <StatusBar style='dark'/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    topBar: {
        height: 85,
        width: '100%',
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainArea: {
        flex: 3,
        backgroundColor: '#000000',
    },
});

export default MenuPage;