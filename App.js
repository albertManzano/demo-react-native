//intro

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from 'react-navigation-stack'
// import  HomeScreen from './src/screens/HomeScreen/HomeScreen.component'
// import  LandingScreen from './src/screens/LandingScreen/LandingScreen.component'
// import ListScreen from "./src/screens/ListScreen/ListScreen.component";
// import SquareScreen from './src/screens/SquareScreen/SquareScreen.component'

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Landing: LandingScreen,
//     List : ListScreen,
//     Square : SquareScreen
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "List"
//     }
//   }
// )

// export default createAppContainer(navigator)


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import DetailScreen from './src/screens/DetailScreen/DetailScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: DetailScreen
},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title:'Demo native',
      headerTitleAlign: "center"
      // title: 'Business Search',
      // headerShown: false
    }
  });

export default createAppContainer(navigator)
