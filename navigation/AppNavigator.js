import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from '../screens/TaskListScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import EditTaskScreen from '../screens/EditTaskScreen';

const Stack = createStackNavigator();

export default function AppNavigator({ tasks, setTasks }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6A0DAD',  
          },
          headerTintColor: '#FFFFFF',   
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="WANDER-TAREAS"
          options={{ title: 'WANDER - TAREAS' }}
        >
          {props => <TaskListScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>

        <Stack.Screen
          name="AddTask"
          options={{ title: 'AGREGAR TAREA' }}
        >
          {props => <AddTaskScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
        
        <Stack.Screen
          name="EditTask"
          options={{ title: 'EDITAR TAREA' }}
        >
          {props => <EditTaskScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}






