import React from 'react';
import { StyleSheet, Text } from 'react-native';

function Feedback({ message, level }) {
    return (<>
        {level === "success" && <Text style={styles.success}>{message}</Text>}
        {level === "error" && <Text style={styles.error}>{message}</Text>}
    </>)

}

const styles = StyleSheet.create({
    success: {
        fontWeight: "bold",
        textAlign: "center",
        color: '#66cc00',
        width: '100%',
    },

    error: {
        fontWeight: "bold",
        alignSelf: "center",
        color: 'red',

    }
});

export default Feedback;
