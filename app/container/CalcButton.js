import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';

export default class CalcButton extends Component {

    static defultProps = {
        onPress: function () { },
        title: "",
        color: "white",
        backgroundColor: "black",
        redius: 40,
        style: {},
    };

    render() {

        var r = this.props.redius;
        var w = this.props.redius * 2;
        var h = this.props.redius * 2;
        var bc = this.props.backgroundColor;

        return (
            <TouchableOpacity
                style={[
                    styles.container,
                    { width: w, height: h, borderRadius: r, backgroundColor: bc },
                    { ...this.props.style }
                ]}
            >
                <Text style={[styles.text, { color: this.props.color }]}>
                    {this.props.style}

                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    text: {
        fontSize: 30,
        fontweight: "bold"
    }
})