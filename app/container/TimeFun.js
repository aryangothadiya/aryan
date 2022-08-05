let styles = StyleSheet.create({
    time: {
        fontSize: 50,
        margin: 90,

    },

})



import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        this.time = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.time !== this.state.time) {

        }
    }

    componentWillUnmount = () => {
        clearInterval(this.time)
    }

    render() {
        console.log(this.state.time);
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.time}>{this.state.time.toLocaleTimeString()}</Text>
            </View>
        )
    }
}


