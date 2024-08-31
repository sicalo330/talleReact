import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

function DynamicForm() {
    //Este useState guarda el nombre del input
  const [name, setName] = useState("");
  //Este será el nombre que aparecerá debajo del formulario
  const [submittedName, setSubmittedName] = useState("");

  const getName = () => {
    setSubmittedName(name);
  };

  return (
    <View>
        {/*onChangetext será llamado cada vez que aparezca o se elimine alguna letra, el valor del input será almacenada en el*/}
      <TextInput
        keyboardType="default"
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter your name"
      />
      <Button title="Submit" onPress={getName} />
      {/*Esto verifica si el campo de texto no está vaciá y se cumple cuando el valor es truthy*/}
      {submittedName ? (
        <Text style={{ marginTop: 20 }}>You entered: {submittedName}</Text>
      ) : null}
    </View>
  );
}

export default DynamicForm;
