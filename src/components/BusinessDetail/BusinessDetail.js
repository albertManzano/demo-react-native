import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './BusinessDetail.styles';

const BusinessDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View >
    )
};

export default BusinessDetail;