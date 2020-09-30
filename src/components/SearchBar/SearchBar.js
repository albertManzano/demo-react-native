import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './SearchBar.styles';

const SearchBar = ({ query, onChangeQuery, onQuerySubmit }) => {
    return (
        <View style={styles.backgroundStyle}>

            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                value={query}
                onChangeText={onChangeQuery}
                onEndEditing={() => onQuerySubmit(query)}
            />
        </View>
    );
};

export default SearchBar;