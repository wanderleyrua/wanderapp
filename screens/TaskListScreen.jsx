// screens/TaskListScreen.jsx
import React, { useState } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import TaskItem from '../components/TaskItem';

export default function TaskListScreen({ navigation, tasks, setTasks }) {
  const [showFavorites, setShowFavorites] = useState(false);

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleFavorite = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, favorite: !task.favorite } : task
    ));
  };

  const goToEdit = (id) => navigation.navigate('EditTask', { taskId: id });

  const filteredTasks = showFavorites
    ? tasks.filter(task => task.favorite)
    : tasks;

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#b7abfdff'  }}>
      <Button title="Agregar tarea" onPress={() => navigation.navigate('AddTask')} />
      <Button
        title={showFavorites ? "Ver todas" : "Ver favoritos ⭐"}
        onPress={() => setShowFavorites(!showFavorites)}
      />
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={deleteTask}
            onToggle={toggleComplete}
            onEdit={goToEdit}
            onFavorite={toggleFavorite}
          />
        )}
      />
    </View>
  );
}
