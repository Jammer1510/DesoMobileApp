
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Feather'
import { COLORS, SIZES, SHADOWS, assets } from "../constants";


import StackNavigator from "./StackNavigator";
import Listing from "./Listing";
import NewListing from "./NewListing"
import ListingButton from "../components/ListingButton";
// import DesoLogin from '../components/DesoLogin';
import LogIn from './LogIn';


const Tab = createBottomTabNavigator();

function MyTabs({navigation}) {
  return (
    <Tab.Navigator  screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:COLORS.primary,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel:false,

      }}
      initialRouteName="Home"
      >
      {/* <Tab.Screen name="LogIn"  component={LogIn}
        options={{ tabBarIcon : ({color, size}) =>
        <Icons name ="user" color={color} size={size}/> }}
      /> */}
      <Tab.Screen name="Home" component={StackNavigator}
        options={{ tabBarIcon : ({color, size}) =>
        <HomeIcon name ="home" color={color} size={size}/> }}
      />

      <Tab.Screen
        name="NewList"
        component={NewListing}
        options={{
          tabBarIcon : ({color, size}) => (
            <Icons name ="plus-circle" color={color} size={size}/>)
          }}

      />
      <Tab.Screen name="List"  component={Listing}
        options={{ tabBarIcon : ({color, size}) =>
        <Icons name ="tag" color={color} size={size}/> }}
      />
    </Tab.Navigator>
  );
};


export default MyTabs;