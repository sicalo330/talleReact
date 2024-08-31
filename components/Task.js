import react from "react";
import { Text } from "react-native";

function Task(props){
    return(
        <>
            <Text>{props.task.title}</Text>
            <Text>{props.task.completed? <Text>Está completado</Text> : <Text>No está completado</Text>}</Text>
        </>
    )
}

export default Task;