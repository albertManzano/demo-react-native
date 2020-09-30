import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './ListScreen.component.styles';


const ListScreen = () => {
    const colegas = [
        { name: 'Jorge', key: '1' },
        { name: 'Betho', key: '2' },
        { name: 'Gil', key: '3' },
        { name: 'David', key: '4' },
        { name: 'Diana', key: '5' },
        { name: 'Gerard', key: '6' },
        { name: 'Aliex', key: '7' },
        { name: 'Simon', key: '8' },
        { name: 'Dani', key: '9' },
        { name: 'Victor', key: '10' }

    ]

    return (
        <FlatList data={colegas}
            // optional configs
            
            // horitzontal
            // showsHoritzontalScrollIndicator={true}


            //renderItem={(element) =>{
            //}}
            //element === { item : {name: 'colega# 1'}}

            renderItem={({ item }) => {
                return <Text style={styles.text}>{item.name}</Text>
            }}
        />
    )
}

export default ListScreen;