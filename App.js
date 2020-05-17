

import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , Button , Alert , use} from 'react-native';
import Constants from 'expo-constants';






const app = ()=>{

  const [goal,updategoal] = useState('')

  const al = function(){
   updategoal()
  }


  return(
    <View  >
    <View style = {style.container}>
    <TextInput style = {style.block , {width : '80%'}} placeholder = "enter the task" />  
    <Button style = {style.block} title = "add" onPress ={al} /> 
    </View>
    </View>
    )
}






const style =  StyleSheet.create({
  container : {
    flexDirection: 'row', 
    borderBottomColor :'blue',
    borderWidth : 1,
    marginTop : Constants.statusBarHeight,
    flexDirection : 'row',
    justifyContent : 'space-evenly'

  },



  block : {
    borderWidth : 1,
    alignItems : 'center'
  }

});





export default app;
