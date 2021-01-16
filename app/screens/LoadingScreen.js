import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

const image = { uri: 'https://www.lovethegarden.com/sites/default/files/styles/header_image_xl/public/content/articles/UK_advice-lawn-care-maintenance-lawn-feeding-explained_header.jpg?itok=q4dr1OMk' };

function LoadingScreen(prps) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
})

export default LoadingScreen;