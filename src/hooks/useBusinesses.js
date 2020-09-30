import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null)

    const searchApi = async (searchQuery) => {
        try {
            const { data } = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchQuery,
                    location: 'barcelona'
                }
            });
            setBusinesses(data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong :( ')
        }
    };
    
    useEffect(() => {
        searchApi('pasta')
    }, []);


    return [searchApi, businesses, errorMessage];
};
