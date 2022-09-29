import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

export default function ExampleDemo() {
    const first = () => {
        return "First Ans";
    }

    const second = () => {
        // setTimeout(() => {return "Second Ans"}, 2000);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Second Ans"), 2000);
        })
    }

    const third = () => {
        return "Third Ans"
    }

    const All = async () => {
        const firstAns = first();
        console.log(firstAns);

        const secondAns = await second();
        console.log(secondAns);

        const thirdAns = third();
        console.log(thirdAns);
    }

    useEffect(() => {
        All();
    }, [])

    const print = (c) => {
        console.log(c);
    }

    const sum = (a, b, callback) => {
        let c = a+b;

        callback(c);
    }

    sum(10, 20, print);

    return (
        <View>
            <Text>ExampleDemo</Text>
        </View>
    )
}