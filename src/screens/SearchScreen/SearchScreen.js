import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './SearchScreen.styles';
import { SearchBar, ResultsList, filterByPrice, Spinner, Feedback } from '../../index';
import useBusinesses from '../../hooks/useBusinesses'

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [searchApi, businesses, errorMessage] = useBusinesses();

    return (
        <View style={styles.background}>
            <SearchBar
                query={query}
                onChangeQuery={(newQuery) => setQuery(newQuery)}
                onQuerySubmit={() => searchApi(query)}
            />

            {(businesses.length === 0 && !!!errorMessage) ? <Spinner /> :
                errorMessage ? <Feedback message={errorMessage} level={"error"} /> :
                    <ScrollView>
                        <Feedback message={`We found ${businesses.length} restaurants for you`} level={"success"} />
                        <ResultsList businesses={filterByPrice(businesses, '€')} title='Cheap' />
                        <ResultsList businesses={filterByPrice(businesses, '€€')} title='Bit Expensive' />
                        <ResultsList businesses={filterByPrice(businesses, '€€€')} title='Expensive' />
                        <ResultsList businesses={filterByPrice(businesses, '€€€€')} title='Richer than rich' />
                    </ScrollView>
            }
        </View>
    )
}

export default SearchScreen;