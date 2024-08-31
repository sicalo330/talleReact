import react from "react";
import { Text } from "react-native";

function greeting(props){
    return(
        <>
            <Text>Hola, {props.name}</Text>
        </>
    )
}

export default greeting;