import React from "react";
import { Button,Text } from "react-native";

function ChildCounter({ countParent, addCount }){

    return(
        <>
            <Text>Número del contador desde el hijo {countParent}</Text>
            <Button title="Incrementar desde el hijo" onPress={addCount}></Button>
        </>
    )
}

export default ChildCounter