import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import { setTaskID, setTasks } from "./logo/redux/actions";
import { FlatList } from "react-native-gesture-handler";

export default function ToDo({navigation}){

    const {tasks} = useSelector(state=>state.taskReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        getTask();
    }, [])

    const getTask = ()=>{
        AsyncStorage.getItem('Tasks')
           .then(tasks => {
            const parsedTasks = JSON.parse(tasks);
            if(parsedTasks && typeof parsedTasks === 'object'){
                dispatch(setTasks(parsedTasks));
            }
           })
           .catch(err => console.log(err))
    }

    const deleteHandler = (id) =>{
        const filteredTasks = tasks.filter(task =>task.ID !== id);
        AsyncStorage.setItem('Tasks', JSON.stringify(filteredTasks))
        .then(()=>{
             dispatch(setTasks(filteredTasks))
             Alert.alert('Task successfully deleted. ')
        })
        .catch(err => console.log(err))
    }



    return(
        <View style={styles.body}>
            <FlatList
            data={tasks}
            renderItem={({item}) => (
                <TouchableOpacity
                 style={styles.item}
                >
                    <View style={styles.item_row}>
                        <View style={styles.item_body}>
                    <Text style={styles.title} numberOfLines={1}>
                        {item.Title}
                    </Text>
                    <Text style={styles.subtitle} numberOfLines={1}>
                        {item.Desc}
                    </Text>
                    </View>
                    <TouchableOpacity
                    style={styles.trashButton}
                    onPress={()=>{deleteHandler(item.ID)}}
                    >
                        <FontAwesome5
                        name={'trash'}
                        color={'#ff3636'}
                        size={15}
                        />
                    </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
          <TouchableOpacity
            onPress={() => {
                dispatch(setTaskID(tasks.length + 1));
                navigation.navigate('Task')
            }}
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
    },
    item:{
        marginHorizontal:10,
        marginVertical:7,
        paddingHorizontal: 10,
        backgroundColor:'#fff',
        justifyContent:'center',
        borderRadius:5,
        elevation:0
    },
    title:{
      color:'#000',
      fontSize: 30,
      margin: 5
    },
    subtitle:{
        color:'#999999',
        fontSize: 20,
        margin:5
    },
    item_row:{
        flexDirection:'row',
        alignItems:'center'
    },
    item_body:{
        flex: 1
    },
   trashButton:{
    padding:5,
    marginBottom:0
   }

})