import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskItem({ task, onDelete, onToggle, onEdit, onFavorite }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(task.id)} style={{ flex: 1 }}>
        <Text style={[styles.text, task.completed && styles.completed]}>
          {task.text} {task.favorite && '⭐'}
        </Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => onEdit(task.id)} style={styles.customButton}>
      <Text style={styles.buttonText}>✏️</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onFavorite(task.id)} style={styles.customButton}>
      <Text style={styles.buttonText}>⭐</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.customButton}>
      <Text style={styles.buttonText}>🗑</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  },

  text: {
  fontSize: 15,
  fontWeight: 'bold',     
  borderWidth: 3,       
  borderColor: 'black',   
  backgroundColor: '#f0f0f0', 
  padding: 10,            
  borderRadius: 10,       
  marginRight: 3       
},  
  completed: {
    textDecorationLine: 'line-through',
    color: 'purple'
  },

  customButton: {
    backgroundColor: '#6913ccc2', 
    padding: 10,               
    borderRadius: 10,
    marginLeft: 5
  },
  buttonText: {
    fontSize: 15,               
    color: 'black',            
    textAlign: 'center'
  }


  
});


