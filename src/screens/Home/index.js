import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { ref, set } from 'firebase/database';
import { db } from '../../db';

export default function Home() {
  const [name, setName] = useState('');



  function createData() {
    set(ref(db, 'Services/' + name), {
      name: name,
    })
      .then(() => {
        // Data saved successfully!
        Alert.alert('Data submitted');
        setName('');
      })
      .catch((error) => {
        // The write failed...
        Alert.alert(error);
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={(name) => {
          setName(name);
        }}
        placeholder="Name"
        style={styles.textBoxes}
      />
      <Button title="SignUp" onPress={createData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
