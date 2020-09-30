import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './DetailScreen.styles';
import yelp from '../../api/yelp';
import { FlatList } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    useEffect(() => {
        getResult(id)
    }, [])

    const getResult = async (id) => {
        const { data } = await yelp.get(`/${id}`);
        setResult(data);
    };

    return (
        <View style={styles.container}>
            {result ? (<>
                <Text style={styles.name}>{result.name}</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={styles.image} source={{ uri: item }} />
                    }}
                />
            </>
            ) : null}
        </View>

    )
};

export default DetailsScreen;