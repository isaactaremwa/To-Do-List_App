import React, { useEffect } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

export default function DefaultPage({navigation}){

  useEffect(() =>{
    const timeout = setTimeout(() => {
      navigation.replace('My-Tasks');
    }, 2000);
    return () => clearTimeout(timeout)
  });



  return(
    <View style={styles.body}>
        <Image style={styles.logo} 
         source={require('./logo/logo.jpeg')}
        />
        <Text style={styles.text}>
            ToDoList
        </Text>

    </View>

  )
}


const styles = StyleSheet.create({
  body:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'#0080ff'
  },
  logo:{
     width:150,
     height:150,
     margin:20
  },
  text:{
    fontSize: 40,
    color:'#fff'
  },
  input:{
    width:300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius:10,
    backgroundColor:'#fff'
  }
})