import { View, Text, TimePickerAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function TimeFun() {
    const [time, settime] = useState(new Date());

    useEffect(() => {
        const t = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            clearInterval(t)
        }
    }, []);
    return (
        <View>
            <Text>{time.toLocaleTimeString()}</Text>
        </View>
    )
}