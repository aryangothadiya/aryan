import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { Value } from 'sass';

export default function CalcScreen() {

  const [equation, setEeuation] = useState('');

  const data = ['c', 'back', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.' , '%']

  const Digit = (Value) => {
    setEeuation(equation + Value);
  }

  const Restart = () => {
    setEeuation('');
  }

  const Equal = () => {
    setEeuation(eval(equation).tostring())
  }

  const backSpace = () => {
    setEeuation(equation.substring(0, (equation.length - 1)))
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 20,
      backgroundColor: 'grey'
    },
    result: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    resultTexr: {
      color: 'white',
      fontSize: 50,
      margin: 20
    },
    data: {
      flex: 3,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    batton: {
      width: '25%',
      height: '20.1%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    Bcolor: {
      backgroundColor: 'gray'
    },
    color: {
      backgroundColor: 'black'
    },
    TButton: {
      fontSize: 20;
      color: "white"
    },
    TextColor: {
      color: 'black'
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultTexr}>{equation}</Text>
      </View>
      <View style={styles.data}>

        {
          data.map((Button, i) => {
            return (
              Button === '/' || Button === '*' || Button === '-' || Button === '+' || Button === '%' ?
                <TouchableOpacity key={i} style={[styles.button, styles.Bcolor]} onPress={() => Digit(button)}><Text style={[styles.TButton, styles.TextColor]}>{button}</Text></TouchableOpacity>

                :

                Button === 'C' ?
                  <TouchableOpacity key={i} style={[styles.button, styles.Bcolor]} onPress={() => Restart(button)}><Text style={[styles.TButton, styles.TextColor]}>{button}</Text></TouchableOpacity>

                  :

                  Button === 'back' ?
                    <TouchableOpacity key={i} style={[styles.button, styles.Bcolor]} onPress={() => backSpace(button)}><Text style={[styles.TButton, styles.TextColor]}>{button}</Text></TouchableOpacity>

                    :

                    Button === '=' ?
                      <TouchableOpacity key={i} style={[styles.button, styles.Bcolor]} onPress={() => Equal(button)}><Text style={[styles.TButton, styles.TextColor]}>{button}</Text></TouchableOpacity>

                      :

                      <TouchableOpacity key={i} style={[styles.button, styles.Bcolor]} onPress={() => Digit(button)}><Text style={[styles.TButton, styles.TextColor]}>{button}</Text></TouchableOpacity>

            )
          })
        }
      </View>
    </View>
  )
}