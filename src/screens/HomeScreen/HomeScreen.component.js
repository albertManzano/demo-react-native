import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from './HomeScreen.styles';

// function HomeScreen() {
//   return <Text style={styles.text}>hello anjdhl world</Text>;
// };

function HomeScreen({navigation}) {

  // 2 console.log(props) ===> que es props?
  // console.log(props.navigation) ====> mover screens
  // props.navigation.navigate() ===> metodo para navegar viene de stacknavigator 
  // si navigate('string') hace match con una de las screens cambiara de pantalla

  // 1 return (
  //   <View>
  //     <Text style={styles.text}>hello world</Text>
  //     <Button
  //       onPress={()=> console.log('button pressed')}
  //       title="Go to Landing"
  //     />
  //     <TouchableOpacity
  //       onPress={()=> console.log('button pressed')}>
  //       <Text>Go to List</Text>
  //     </TouchableOpacity>
  //   </View>
  // )

  return (
    <View>
      <Text style={styles.text}>hello world</Text>
      <Button
        onPress={() => navigation.navigate('Landing')}
        title="Go to Landing"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('List')}>
        <Text>Go to List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Square')}>
        <Text>Go to Square</Text>
      </TouchableOpacity>
    </View>
  )
};

export default HomeScreen
