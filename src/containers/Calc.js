/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as CalcActions from '../actions/calc_actions'
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
            'u'
});

class Calc extends Component < {} > {
    onpresscalcbutton(input) {
        this
            .props
            .CalcActions
            .INPUT()
    }
    make_magic() {
        try {
            var x = this
                .props
                .result
                .match(/(\D?\d+\.?\d*)\D\D?\d+\.?\d*/)[1];
            var y = this
                .props
                .result
                .match(/\D?\d+\.?\d*\D(\D?\d+\.?\d*)/)[1];
            var operator = this
                .props
                .result
                .match(/\D?\d+\.?\d*(\D)\D?\d+\.?\d*/)[1];
            switch (operator) {
                case '-':
                    this
                        .props
                        .CalcActions
                        .DIFF(x, y);
                    break;
                case '+':
                    this
                        .props
                        .CalcActions
                        .SUM(x, y);
                    break;
                case '*':
                    this
                        .props
                        .CalcActions
                        .INC(x, y);

                    break;
                case '/':
                    this
                        .props
                        .CalcActions
                        .DIV(x, y);

                    break;

                default:
                    break;
            }

        } catch (err) {}
    }
    clearInput() {
        this
            .props
            .CalcActions
            .CLEAR('')

    }
    render() {
        const char = this.props.char;
        const result = this.props.result;
        const INPUT = this.props.CalcActions.INPUT;
        return (

            <View style={styles.container}>
                <Text style={styles.result_text}>{result}</Text>
                <View style={styles.calc_container}>

                    <TouchableOpacity
                        onPress={this
                        .clearInput
                        .bind(this)}
                        style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>C</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calc_container}>
                    <TouchableOpacity onPress={() => INPUT(1)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT(2)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT(3)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT('+')} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calc_container}>
                    <TouchableOpacity onPress={() => INPUT(4)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT(5)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT(6)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT('-')} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calc_container}>
                    <TouchableOpacity onPress={() => INPUT(2)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT(8)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT(9)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT('*')} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calc_container}>
                    <TouchableOpacity onPress={() => INPUT(0)} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT('.')} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this
                        .make_magic
                        .bind(this)}
                        style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => INPUT('/')} style={styles.calc_button}>
                        <Text style={styles.calc_button_text}>/</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    calc_button_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    result_text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    calc_button: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#000',
        // width: 100, height: 100,
        borderColor: 'white',
        borderWidth: 2
    },
    calc_container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between', alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    container: {
        marginTop: 40,
        flex: 4,
        // alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

function mapDispatchToProps(dispatch) {
    return {
        CalcActions: bindActionCreators(CalcActions, dispatch)
    }
}
function mapStateToProps(state) {
    return {result: state.reducer.result}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc)
