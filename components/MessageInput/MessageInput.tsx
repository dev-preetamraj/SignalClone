import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { SimpleLineIcons, Feather, MaterialIcons } from '@expo/vector-icons';


const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.warn("sending: ", message);
        setMessage('');
    }

    const onPlusClicked = () => {
        console.warn("On plus clicked");
    }

    const submitText = () =>{
        if(message){
            sendMessage();
        } else{
            onPlusClicked();
        }
    }

    return(
        <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
        >
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Signal message..."
                />
                <Feather name="camera" size={24} color="#595959" style={styles.icon} />
                <SimpleLineIcons name="microphone" size={24} color="#595959" style={styles.icon} />
            </View>
            <Pressable onPress={submitText} style={styles.buttonContainer}>
                {
                    message ?
                    <MaterialIcons name="send" size={24} color="white" /> :
                    <Feather name="plus" size={24} color="black" style={styles.buttonText}/>
                    
                }
                
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    input: {
        flex: 1,
        marginHorizontal: 5
    },
    icon: {
        marginHorizontal: 5
    },
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 35
    }
})

export default MessageInput;