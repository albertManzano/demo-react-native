import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './ResultsList.styles';
import BusinessDetail from '../BusinessDetail/BusinessDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, businesses, navigation }) => {
    return (
        <View style={styles.container}>
            {!businesses.length ? null :
                (<>
                    <Text style={styles.title}>{title}</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={businesses}
                        keyExtractor={business => business.id}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={(() => navigation.navigate('Detail', { id: item.id }))}>
                                    <BusinessDetail result={item} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </>)}
        </View>
    );
};

export default withNavigation(ResultsList);