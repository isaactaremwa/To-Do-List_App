import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButtom from "./CustomButton";

export default function Task(){
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');




    return(
        <View style={styles.body}>
          <TextInput style={styles.input}
          value={title}
          placeholder="title"
          onChangeText={(value) => setTitle(value)}
         />
         <TextInput style={styles.input}
         value={desc}
          placeholder="Description"
          multiline
          onChangeText={(value) => setDesc(value)}
         />
         <CustomButtom/>
        </View>

    )
}
const styles = StyleSheet.create({
 body:{
    flex: 1,
    alignItems: 'center',
    padding: 10
 },
 input:{
    width:'100%',
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign:'left',
    fontSize:20,
    margin: 10,
    paddingHorizontal:10
 }
})