import React, { useState } from "react";
import { Button, TextInput } from "react-native";

//Aquí recibe la función de App.js
function RegistrationForm({onRegister}){
const [mail, setMail] = useState("");
const [password, setPassword] = useState("");

    //Esta función hará uso de onRegister, este fue traido como prop desde App.js y se encargará de agregar los datos de padre a hijo
    const handleRegister = () => {
        //Invocar onRegister es pasar a App.js y llamar nuevamente al componente, este se cargará con los datos nuevos
        onRegister({ mail, password });
    }

    return(
        <>
            <TextInput
                keyboardType="default"
                onChangeText={(text) => setMail(text)}
                value={mail}
                placeholder="mail@mail.com"
            />

            <TextInput
                keyboardType="default"
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="12345"
            />
            <Button title="SEND DATA" onPress={handleRegister}></Button>
        </>
    )
}

export default RegistrationForm;