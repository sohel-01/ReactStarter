import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC = 15;

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state : { ...state, red: state.red + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state : { ...state, blue: state.blue + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state : { ...state, green: state.green + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (color, change) => {
    //     // color === 'red','blue','green'
    //     // change === +15,-15
    //     // if (color === 'red') {
    //     //     if (red + change > 255 || red + change < 0) {
    //     //         return;
    //     //     } else {
    //     //         setRed(red + change);
    //     //     }
    //     // }
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             color > 255 || color < 0 ? alert("Reach Max Limit") : alert("Reach Min Limit");
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //             return;
    //         default:
    //             return;
    //     }
    // };

    const [state, runReducer] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
    const { red, blue, green } = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => runReducer({ type: 'change_red', payload: COLOR_INC })}
                onDecrease={() => runReducer({ type: 'change_red', payload: -1 * COLOR_INC })}
                color="Red" />
            <ColorCounter
                onIncrease={() => runReducer({ type: 'change_blue', payload: COLOR_INC })}
                onDecrease={() => runReducer({ type: 'change_blue', payload: -1 * COLOR_INC })}
                color="Blue" />
            <ColorCounter
                onIncrease={() => runReducer({ type: 'change_green', payload: COLOR_INC })}
                onDecrease={() => runReducer({ type: 'change_green', payload: -1 * COLOR_INC })}
                color="Green" />
            <View style={{ height: 150, width: 150, backgroundColor: ` rgb(${red},${blue},${green})` }} />
        </View>

    );

};

const styles = StyleSheet.create({});

export default SquareScreen;