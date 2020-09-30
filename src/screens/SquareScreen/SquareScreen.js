import React, { useState } from "react";
import { View, } from 'react-native';
import ColorCounter from "../../components/ColorCounter/ColorCounter";


const COLOR_INCREMENT = 15

const SquareScreen = (props) => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function setColor(color, change) {
        if (color === 'blue') {
            if (blue + change > 255 || blue + change < 0) return
            else setBlue(blue + change);
        }
    }

    return (
        <View>
            <ColorCounter
                onIncrease={() => setRed(red + COLOR_INCREMENT)}
                onDecrease={() => setRed(red - COLOR_INCREMENT)}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => setGreen(green + COLOR_INCREMENT)}
                onDecrease={() => setGreen(green - COLOR_INCREMENT)}
                color='Green'
            />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color='Blue'
            />
            <View style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }}></View>
        </View>
    );
};

export default SquareScreen;