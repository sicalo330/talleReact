import react, { useState } from "react";
import { Button, Text } from "react-native";

function ToggleText(){
    const [visible, setVisible] = useState(false) 
    const [text, setText] = useState("") 

    const visibilidad = (visible) => {
        if(visible){
            setVisible(false)
            setText("")
        }
        else{
            setVisible(true)
            setText("Hola mundo")
        }
        console.log(visible)
    }

    return(
        <>
            <Text>{text}</Text>
            <Button onPress={() => visibilidad(visible)} title="Cambiar visibiliadad"></Button>
        </>
    )
}


export default ToggleText;
