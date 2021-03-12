import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity, Image, Button } from 'react-native';
import { sendGETRequest, sendbpmRequest } from '../Components/requests';
import { NavigationContainer } from '@react-navigation/native';

function Wearable({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.bpmArea}><Text style={styles.bpmText}>{"Heart Rate\n"}{"BPM: "}{'90'}</Text>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={null}>
            <Text>Measure</Text>
            </TouchableOpacity>
            {/*<Text>{"Date: "}{'30/9/2019'}</Text><Text>{"Time: "}{"10:10:10 am"}</Text>*/}</View>
            <View style={styles.sleepArea}><Text style={styles.bpmText}>{"Sleep\n"}{"Quality: "}{'Good'}</Text></View>
            {/* <View style={styles.mainArea}><FlatList
        data={[
          {date: '30/9/2019',time:"12:12:12 am",bpm:"100"},
          {date: '11/9/2019',time:"10:10:10 am",bpm:"110"},//not serious, this is just dummy data
          {date: '10/9/2019',time:"01:01:01 pm",bpm:"95"},
          {date: '1/9/2019',time:"01:01:01 am",bpm:"80"},
          {date: '31/8/2019',time:"10:10:10 pm",bpm:"85"},
          {date: '21/8/2019',time:"10:10:10 am",bpm:"90"},
          {date: '9/8/2019',time:"09:09:09 pm",bpm:"92"},
          {date: '5/8/2019',time:"09:09:09 am",bpm:"96"},
          {date: '1/8/2019',time:"08:08:08 pm",bpm:"79"},
          {date: '31/7/2019',time:"08:08:08 am",bpm:"105"},
        ]}
        ItemSeparatorComponent = {renderSeparator}
        renderItem={({item}) => <View style={{backgroundColor:'#83C5BE'}}><Text>
        <Text style={styles.bpmText}>{'BPM: '}{item.bpm}</Text>
        <Text style={styles.text}>{'\nDate: '}{item.date}
        {' Time: '}{item.time}</Text>
        </Text></View>}
      /></View> */}
            <StatusBar style='dark'/>
            <View style={styles.buttonArea}>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={null}>
            <Text>Sync Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={null}>
            <Text>Sync Data</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={null}>
            <Text>Get Help</Text>
            </TouchableOpacity>
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
        fontSize: 14,
        color: '#fff'
    },
    bpmText: {
        fontSize: 20,
        color: '#fff'
    },
    mainArea: {
        flex: 1,
        //padding: 8,
        backgroundColor: '#121212',
        alignItems: 'stretch',
        
    },
    bpmArea: {
        flex: 1,
        //padding: 8,
        backgroundColor: '#83C5BE',
        alignItems: 'stretch',
        borderWidth: 1,
        borderColor: '#fff'
        
    },
    sleepArea: {
        flex: 1,
        //padding: 8,
        backgroundColor: '#83C5BE',
        alignItems: 'stretch',
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonArea: {
        //flex: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'center'
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
    sendbpmRequest({
        "stage": "1",
        "response_type": "closed",
        "text": "None"
    });
};

export default Wearable;