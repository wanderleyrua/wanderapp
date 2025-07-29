import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AddTaskScreen({ navigation, tasks, setTasks }) {
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text,
        completed: false
      }]);
      setText('');
      navigation.goBack();
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#b7abfdff' }}>
      <TextInput
        placeholder="Nueva tarea"
        value={text}
        onChangeText={setText}
        style={{ borderBottomWidth: 1, marginBottom: 20  }}
      />
      <Button title="Agregar" onPress={addTask} />
    </View>
  );
}

