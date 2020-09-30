import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './ImageDisplay.style';

const ImageDisplay = ({ imageSource, title }) => {
    return (
        <View>
            <Image source={imageSource}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

export default ImageDisplay;