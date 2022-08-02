import { View, Text } from 'react-native'
import React, { useState } from 'react'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class App extends React.Component {
    state = { value: "", total: "", tax: "", grandTotal: "" };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    totalAmount = (e) => {
        if (this.state.tax === 0) {
            return;
        }
        this.setState({
            tax: e.target.value
        });
    };

    handleClick = (e) => {
        e.preventDefault();
        const result = Number(this.state.tax) * (this.state.value / 100);
        this.setState({
            total: result,
            tax: "",
            value: ""
        });
        this.setState({
            grandTotal: result + this.state.total
        });
    };
    render() {
        const { value, total, grandTotal } = this.state;
        return (
            <div style={styles}>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="letter"
                            value="5"
                            checked={value === "5"}
                            onChange={this.handleChange}
                        />{" "}
                        5
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="letter"
                            value="12"
                            checked={value === "12"}
                            onChange={this.handleChange}
                        />{" "}
                        12
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="letter"
                            value="18"
                            checked={value === "18"}
                            onChange={this.handleChange}
                        />{" "}
                        18
                    </label>
                </div>
                <input
                    type="text"
                    placeholder="Total Amount"
                    value={this.state.tax}
                    onChange={this.totalAmount}
                />
                {/* <div>Selected: {value}</div> */}
                <button onClick={this.handleClick}> Calculate </button>
                <div>Amount including GST: {grandTotal} </div>
                <div>GST : {total}</div>
            </div>
        );
    }
}

export default App;
