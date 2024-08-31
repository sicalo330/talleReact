import React, { useState } from "react";
import { Button, Text } from "react-native";

function ClickCounter(){
    const [count, setCount] = useState(0)

    const upCount = () => {
        setCount(count + 1)
    }

    return(
        <>
            <Text>You pressed the button {count} times</Text>
            <Button title="Up" onPress={upCount}></Button>
        </>
    )
}

export default ClickCounter;