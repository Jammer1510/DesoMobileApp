import React, {useEffect, useState} from 'react'
import { View, SafeAreaView, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar, Button, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Listing = ({ posts }) => {
  console.log('=============================')
  console.log(posts);
  console.log('=============================')
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
      .then(res => {
        //setUsers(res.data.results);
        setUsers([...users, ...res.data.results]);
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.txtNameStyle}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.txtEmailStyle}>
          Post's text is placed here {"\n"}
          Post's text is placed here {"\n"}
          Post's text is placed here {"\n"}
          Post's text is placed here {"\n"}
          Post's text is placed here {"\n"}
          Post's text is placed here {"\n"}
          Post's text is placed here {"\n"}
          Post's text is placed here {"\n"}
          </Text>
          <View style={styles.postButtons}>

            <TouchableOpacity style ={styles.button} onPress={() => Alert.alert('Like Button pressed')}>
              <Icon name="cards-heart" size={20}></Icon>
            </TouchableOpacity>

            <TouchableOpacity style ={{borderLeftWidth: 1, borderRightWidth: 1, paddingLeft: 35, paddingRight: 35}} onPress={() => Alert.alert('Like Button pressed')}>
              <Icon name="card-text" size={20}></Icon>
            </TouchableOpacity>

            <TouchableOpacity style ={styles.button} onPress={() => Alert.alert('Like Button pressed')}>
              <Icon name="share" size={20}></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: "#777",
    borderTopWidth: 0.6,
    paddingLeft: 10,
    paddingTop: 10,
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
  postButtons: {
    flexDirection: "row",
    alignContent:"space-between",
    flex: 1,
    flexWrap:"wrap",

  },
  button:{
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Listing;