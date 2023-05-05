import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from 'react-native';
import CustomButtom from './CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks} from './logo/redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Task({navigation}) {
  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const setTask = () => {
    if (title.length == 0) {
      Alert.alert('Warning', 'The title is empty');
    } else {
      try {
        var Task = {
          ID: taskID,
          Title: title,
          Desc: desc,
        };
        let newTask = [...tasks, Task];
        AsyncStorage.setItem('Tasks', JSON.stringify(newTask))
          .then(() => {
            dispatch(setTasks(newTask));
            Alert.alert('Success', 'New task added!');
            navigation.goBack();
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        value={title}
        placeholder="title"
        onChangeText={value => setTitle(value)}
      />
      <TextInput
        style={styles.input}
        value={desc}
        placeholder="Description"
        multiline
        onChangeText={value => setDesc(value)}
      />

      <TouchableOpacity style={styles.button}
      onPress={setTask}
      >
        <Text style={styles.buttonText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'left',
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
  }
});
