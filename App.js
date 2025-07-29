import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <AppNavigator tasks={tasks} setTasks={setTasks} />
  );
}


