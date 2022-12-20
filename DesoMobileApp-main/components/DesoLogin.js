// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Listing from '../screens/Listing';
import axios from 'axios';

// function parseURLParams(url) {
//   return result;
// }
const DesoLogin = ({ navigation }) =>{
  // const navigation = useNavigation();
  const [signIn, setSignIn] = useState(false)
  const [userProfile, setUserProfile] = useState({})

  const handleNavigationStateChange = () => {
    navigation.navigate("Listing", {userProfile});
  };

  

  const onNavigationStateChange = async (navigationState) => {
    const { url } = navigationState;
    if (url.includes("derivedSeedHex")) {
      const payload = url.split("?")[1];
      try {
        let obj = payload.split("&").reduce(function(prev, curr, i, arr) {
            var p = curr.split("=");
            prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
            return prev;
        }, {});
        setUserProfile(obj);
        console.log(userProfile);
        handleNavigationStateChange();
      } catch(error) {
        console.error(error);
      }
    }
  };

  // update userProfile and pass on to Home screen
  // useEffect(() => {
  //   setSignIn(true);
  // },[userProfile])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://identity.deso.org/derive?callback=https://node.deso.org'
        }}
        onNavigationStateChange={onNavigationStateChange}
        javaScriptEnabled
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
}
export default DesoLogin;