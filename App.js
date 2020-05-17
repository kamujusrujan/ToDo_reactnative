import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  use,
} from 'react-native';
import Constants from 'expo-constants';

function TaskView(props) {
  return (
    <View style={style.container}>
      <Text>
        {' '}
        {props.order} {props.name}{' '}
      </Text>
      <Button
        title="Delete"
        onPress={() => {
          props.OnTap(props.name);
        }}
      />
    </View>
  );
}

const app = () => {
  const [goal, updategoal] = useState('sample');
  const [toDoList, updateList] = useState([]);
  const addToList = function () {
    updateList([...toDoList, goal]);
  };

  const delFromList = function (name) {
    updateList(toDoList.filter((task) => task != name));
  };

  return (
    <View>
      <View style={style.body}>
        <TextInput
          style={[style.block, { width: '60%' }]}
          placeholder="enter the task"
          onChangeText={(text) => updategoal(text)}
        />
        <Button
          style={[style.block, { width: '30%' }]}
          title="add"
          onPress={addToList}
        />
      </View>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>Tasks</Text>
      <View style={style.list}>
        {toDoList.map((task, index) => (
          <TaskView
            key={index + 1}
            name={task}
            order={index + 1}
            OnTap={delFromList}
          />
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10,
  },

  block: {
    alignItems: 'center',
  },

  list: {
    flexDirection: 'column',
  },

  debug: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 5,
    textAlign: 'center',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    alignItems: 'center',
  },
});

export default app;
