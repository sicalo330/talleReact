import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function GuessForm({ correctAnswer }) {
    //Esto es lo que responderá el usuario y se refleja en el input
  const [guess, setGuess] = useState('');

  //Esto le dice al usuairo si lo que puso es correcto o no
  const [result, setResult] = useState('');

  const verifyAnswer = () => {
    if (guess === correctAnswer) {
      setResult('Correct!');
    } else {
      setResult('Incorrect. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Guess the Number</Text>
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={(text) => setGuess(text)}
        keyboardType="numeric"
        placeholder="Enter your guess"
      />
      <Button title="Submit" onPress={verifyAnswer} />
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default GuessForm;
