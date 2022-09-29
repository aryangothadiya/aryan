
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../../redux/action/counter.action'
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { getCategory } from '../../redux/action/category.action';

export default function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector(stste => stste.counter);
    const category = useSelector(state => state.category)

    console.log(category);

    const handleIncrement = () => {
        dispatch(incrementCounter())    
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    useEffect(() => {
        dispatch(getCategory())
    }, [])

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
            {
                category.category.map((c) => (
                    <View>
                        <Text>{c.title}</Text>
                        <Text>{c.author}</Text>
                    </View>
                ))
            }
        </View>
    )
}