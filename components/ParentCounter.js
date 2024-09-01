import React, { useState } from "react";
import { Button, Text } from "react-native";
import ChildCounter from "./ChildCounter";

function ParentCounter(){
    const [countParent, setCountParent] = useState(0)

    const addCount = () => {
        setCountParent(countParent + 1)
    }

    return(
        <>
            <Text>Componente desde el padre</Text>
            <ChildCounter countParent={countParent} addCount={addCount} />
        </>
    )
}

export default ParentCounter