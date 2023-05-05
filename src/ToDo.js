import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function ToDo({navigation}){
    const onPressHandler = () => {
        navigation.navigate('Task')
    }

    return(
        <View style={styles.body}>
          <TouchableOpacity
            onPress={onPressHandler}
            style={styles.button}
            >
                <FontAwesome5
                name={'plus'}
                size={20}
                color={'#ffffff'}
                />
            </TouchableOpacity>
         
           
        </View>

    )
}
const styles = StyleSheet.create({
    body:{
           flex: 1
    },
    button:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#0080ff',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        right:10,
        elevation:5
    }

})