import React from "react";
import { Alert, Button } from "react-native";

function AlertButton({message}){
    const alert = () => {
        Alert.alert("Alerta",message)
    }

    return(
        <Button title="Alert" onPress={alert}></Button>
    )
}

export default AlertButton;