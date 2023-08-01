import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';

import socketServcies from './utils/socketService';

const App = () => {
  const [message, setMessage] = useState('Default message');

  useEffect(() => {
    socketServcies.initializeSocket();
  }, []);

  const sendMessage = () => {
    socketServcies.emit('chat', {
      socketId: 'diBoMkUYwct5HkRjAAAL',
      message,
    });
  };

  useEffect(() => {
    socketServcies.on('chat', iiead => {
      Alert.alert('===', iiead);
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text>Socket Chat</Text>
      <TextInput
        value={message}
        onChangeText={text => setMessage(text)}
        placeholder="hello"
        style={styles.input}
        selectionColor={'black'}
        clearButtonMode="while-editing"
        onSubmitEditing={sendMessage}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
    backgroundColor: 'white',
    color: 'black',
  },
});
