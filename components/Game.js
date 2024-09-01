import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GuessForm from './GuessForm';

function Game(){
    //Esto define la respuesta correcta
    const [correctAnswer, setCorrectAnswer] = useState('42')

    return (
        <View style={styles.container}>
          <GuessForm correctAnswer={correctAnswer} />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default Game;