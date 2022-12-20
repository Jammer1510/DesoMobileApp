import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, SafeAreaView, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import {NavigationActions} from 'react-navigation';

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

// hard code for signing transaction
import signTransaction from "../components/signTransaction";
import {API} from '../utils/development';
const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState('');
  // const [userProfile, setUserProfile] = useState({});
  const [nftData, setNftData] = useState(null);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };
  const getNFTData = () => {
    setIsLoading(true);
    axios.get(`http://10.110.228.226:5000/api/marketplace`)
      .then(response => {
        if(response.data !== userData) {
          console.log('data change');
          setNftData(response.data);
          setIsLoading(false);
        }
        // console.log(response.data);
        //setNFTData(res.data.results);
      });
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getNFTData();
  }, [currentPage]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.dark_primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            ListHeaderComponent={<HomeHeader navigation={navigation} onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.dark_primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
})

export default Home;