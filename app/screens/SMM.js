import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList,StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity, Image, Button } from 'react-native';
import { sendGETRequest, sendPOSTRequest } from '../Components/requests';
import { NavigationContainer } from '@react-navigation/native';

function SMM({ navigation }) {

    return (
        <View style={styles.container}>
        <StatusBar style='dark'/>
        <View style={styles.mainArea}><FlatList
        data={[
          {date: '30/9/2019',time:"12:12:12 am",post:"Huh"},
          {date: '11/9/2019',time:"10:10:10 am",post:"September 11 is a conspiracy. The twin towers did not collapse due to planes, the buildings were demolished"},//not serious, this is just dummy data
          {date: '10/9/2019',time:"01:01:01 pm",post:"What is real? What is fake?"},
          {date: '1/9/2019',time:"01:01:01 am",post:":P"},
          {date: '31/8/2019',time:"10:10:10 pm",post:"Augustus would not be proud"},
          {date: '21/8/2019',time:"10:10:10 am",post:"Looking at the wrong places"},
          {date: '9/8/2019',time:"09:09:09 pm",post:"My brain is full of fvck. My brain is full of fvck. My brain is full of fvck."},
          {date: '5/8/2019',time:"09:09:09 am",post:"Reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},
          {date: '1/8/2019',time:"08:08:08 pm",post:"Long live Augustus"},
          {date: '31/7/2019',time:"08:08:08 am",post:"Death to Julius"},
        ]}
        ItemSeparatorComponent = {renderSeparator}
        renderItem={({item}) => <Text style={styles.text}>
        {'Date: '}{item.date}
        {'\nTime: '}{item.time}
        {'\nPost: '}{item.post}
        {'\n'}
        <TouchableOpacity
        style={styles.buttonStyle}
    onPress={null}>
    <Text>Rate Post</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.buttonStyle}
    onPress={null}>
    <Text>Get Help</Text>
    </TouchableOpacity>
        </Text>}
      />
    <TouchableOpacity style={styles.buttonStyle}
    onPress={null}><Text>Get Help</Text></TouchableOpacity>
    </View>
      
      
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    text: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 14,
        color: '#fff',
        backgroundColor: "#444",
    },
    mainArea: {
        flex: 1,
        padding: 8,
        backgroundColor: '#121212',
        alignItems: 'center',
        
    },
    postBorder:{
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor:'#83C5BE',
    },
    buttonStyle: {
    //marginTop:10,
    paddingTop:5,
    paddingBottom:5,
    marginLeft:5,
    paddingLeft:10,
    paddingRight:10,
    marginRight:5,
    backgroundColor:'#83C5BE',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
});

const renderSeparator = () => {
    return (
      <View
        style={{
            borderRadius:10,
            borderWidth: 2,
            borderColor: '#fff',
            backgroundColor:'#83C5BE',
        }}
      />
    )};

const dummyFunc = () => {
    console.log('Hi!');
};

const query = () => {
    sendPOSTRequest({
        "stage": "1",
        "response_type": "closed",
        "text": "None"
    });
};

export default SMM;