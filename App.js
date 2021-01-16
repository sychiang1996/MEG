import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function App() {
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
        onPress={sendFirstRequest} 
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

function sendFirstRequest() {
  const url = 'https://meg-backend-46.herokuapp.com/Megan/';

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let response = xhr.response;
        console.log(JSON.stringify(response));
      }
  };

  xhr.open('GET', url);
  xhr.send()
}