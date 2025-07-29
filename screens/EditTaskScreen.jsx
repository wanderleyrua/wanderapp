// screens/EditTaskScreen.jsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function EditTaskScreen({ route, navigation, tasks, setTasks }) {
  const { taskId } = route.params;
  const task = tasks.find(t => t.id === taskId);
  const [text, setText] = useState(task?.text || '');

  const updateTask = () => {
    setTasks(tasks.map(t =>
      t.id === taskId ? { ...t, text } : t
    ));
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#b7abfdff' }}>
      <TextInput
        placeholder="Editar tarea"
        value={text}
        onChangeText={setText}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Guardar cambios" onPress={updateTask} />
    </View>
  );
}
