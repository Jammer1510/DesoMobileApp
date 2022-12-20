import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from "./Home";
import Details from "./Details";
import Account from "./Account"
import DesoLogin from "../components/DesoLogin";
import LogIn from "./LogIn";
import Buy from './Buy'
import EditProfile from './EditProfile'
import Scan from './Scan'
import Listing from "./Listing";



const Stack = createStackNavigator();

const StackNavigator = () => (

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeStack"
      >
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="DesoLogin" component={DesoLogin} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Buy" component={Buy} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Scan" component={Scan} />
      </Stack.Navigator>

  );


export default StackNavigator;
