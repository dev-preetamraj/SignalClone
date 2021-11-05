import * as React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRooms from '../assets/dummy-data/ChatRooms';

const chatRoom1 = ChatRooms[0];
const chatRoom2 = ChatRooms[1];


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
        data={ChatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {}
})