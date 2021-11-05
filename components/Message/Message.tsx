import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const blue = '#3777f0';
const grey = 'lightgrey';
const myId = 'u1';

export default function Message({ message }){
    const isMe = message.user.id === myId;
    return(
        <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer ]}>
            <Text style={{color: isMe ? 'white' : 'black'}}>{message.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
    leftContainer: {
        backgroundColor: grey,
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: blue,
        marginLeft: 'auto',
        marginRight: 10
    }
})