import React from 'react';
import { StyleSheet, Image } from 'react-native';
import styles from './Spinner.styles';

const Spinner = () => <Image style={styles.spinner} source={require('../../assets/loading.gif')} />

export default Spinner;