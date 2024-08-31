import react from "react";
import { Text } from "react-native";

function userDetail(props){
    return(
        <Text>Hola, soy {props.name}, tengo {props.age} años y soy {props.job}</Text>
    )
}

export default userDetail;