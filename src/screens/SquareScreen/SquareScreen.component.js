import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../../components/ColorCounter/ColorCounter";
import { color } from "react-native-reanimated";

// { colorTochange: 'red' , amount : 15 } our action
// { type : 'change_red', payload : 15} by convention

const COLOR_INCREMENT = 15

const reducer = (state, action) => {

    //state === {red: number, green: number, blue: number} can't change directly
    //action === colorTochange: 'red || 'green' ||  'blue' , amount: 15 || -15  function gives new object


    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount }
        //  return { red:0, green:0,blue:0, red:state.red + action.amount}
        //   return { red:state.red + action.amount, green:0,blue:0, }
        case 'green':
            return { ...state, green: state.green + action.amount }
        case 'blue':
            return { ...state, blue: state.blue + action.amount }
        default:
            return state
    }

}

const SquareScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    //     state, activatereducer                      state initial
    const { red, green, blue } = state;                                    


    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color='Green'
            />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color='Blue'
            />
            <View style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }}></View>
        </View>
    )
}


export default SquareScreen;

