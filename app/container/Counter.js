
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../../redux/action/counter.action'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

export default function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector(stste => stste.counter);

    console.log(counter);

    const handleIncrement = () => {
        dispatch(incrementCounter())    
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => handleIncrement()}
            >
                <Text>+</Text>
            </TouchableOpacity>
            <Text>{counter.count}</Text>
            <TouchableOpacity
                onPress={() => handleDecrement()}
            >
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    )
}