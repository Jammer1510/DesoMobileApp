import React , {useState} from 'react'
import { SafeAreaView, Text, StyleSheet, View, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity} from "react-native";
import { RectButton } from '../components';
import { SIZES } from '../constants';
import {FocusedStatusBar } from "../components";
import { COLORS} from "../constants";
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'




const NewListing = () => {
  const [post, setPost] = useState({});
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
  };
  return (
      <SafeAreaView style={{flex:1,justifyContent: "center",alignItems: "center"}}>
          <FocusedStatusBar backgroundColor={COLORS.primary} />
          <View >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '110%',
                backgroundColor: '#2e64e515'
              }}>
                <TextInput style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 24,
                  textAlign: 'center',
                  width: '90%',
                  marginBottom: 15
                }}
                  placeholder="What's on your mind?"
                  multiline
                  numberOfLines={4}
                >

                </TextInput>
              </View>
            </TouchableWithoutFeedback>
            {/* <RectButton
              minWidth={20}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate("LogIn", {navigation})}
            /> */}
            <View>
              <RectButton
                  text="Confirm"
                  minWidth={50}
                  fontSize={25}
                  borderRadius={10}
              />
            </View>
            <ActionButton buttonColor="rgba(231,76,60,1)" style={{bottom:50}}>
              <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={() => console.log("Take photo button tapped!")}>
                <Icon name="camera-outline" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={() => {}}>
                <Icon name="md-images-outline" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          </View>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    // backgroundColor: '#007BFF',
    backgroundColor: COLORS.primary,
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  }
});

export default NewListing;