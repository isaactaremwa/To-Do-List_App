import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButtom(){
    return(
        <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Save Task</Text>
      </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
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
})