import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, StatusBar, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import {FocusedStatusBar } from "../components";
import { COLORS, assets } from "../constants";
import {CircleButton} from "../components/Button";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Colors, useTheme } from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const EditProfile = ({navigation}) => {

  const {colors} = useTheme();

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  

  

  

  return (
      <SafeAreaView style={{flex:1}}>
          <FocusedStatusBar backgroundColor={COLORS.primary} />
          <View style={{flex: 1, flexDirection: 'row'}}>
            
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight }
                zIndex={1}
                backgroundColor={'transparent'}
            />
            
            <Text style={{left: 60, top: StatusBar.currentHeight + 9}}>Back</Text>


            <View style={styles.container}>
              

            
              <View style={{margin: 20}}>
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => {}}>
                    <View style={{
                      height: 100,
                      width: 100,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignContent: 'center'
                    }}>
                      <ImageBackground
                        source={assets.person01}
                        style={{height: 100, width: 100}}
                        imageStyle={{borderRadius: 15}}
                      >
                        <View style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                          <Icon name='camera' size ={35} color="#fff" style={{
                            opacity: 0.7,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderRadius: 10,
                          }}/>
                        </View>

                      </ImageBackground>
                    </View>
                  </TouchableOpacity>

                  <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                    Team 6
                  </Text>

                  <View style={styles.action}>
                    <FontAwesome name="user-o" color={Colors.text} size={20} style={{top: -5}}/>
                    <TextInput
                      placeholder='First Name'
                      placeholderTextColor='#666666'
                      autoCorrect={false}
                      style={[styles.textInput, {color: colors.text}]}
                    />
                  </View>

                  <View style={styles.action}>
                    <FontAwesome name="user-o" color={Colors.text} size={20} style={{top: -5}}/>
                    <TextInput
                      placeholder='Last Name'
                      placeholderTextColor='#666666'
                      autoCorrect={false}
                      style={[styles.textInput, {color: colors.text}]}
                    />
                  </View>

                  <View style={styles.action}>
                    <Feather name="phone" color={Colors.text} size={20} style={{top: -5}}/>
                    <TextInput
                      placeholder='Phone'
                      keyboardType='number-pad'
                      placeholderTextColor='#666666'
                      autoCorrect={false}
                      style={[styles.textInput, {color: colors.text}]}
                    />
                  </View>

                  <View style={styles.action}>
                    <FontAwesome name="envelope-o" color={Colors.text} size={20} style={{top: -5}}/>
                    <TextInput
                      placeholder='Email'
                      keyboardType='email-address'
                      placeholderTextColor='#666666'
                      autoCorrect={false}
                      style={[styles.textInput, {color: colors.text}]}
                    />
                  </View>

                  <View style={styles.action}>
                    <FontAwesome name="globe" color={Colors.text} size={20} style={{top: -5}}/>
                    <TextInput
                      placeholder='Country'
                      placeholderTextColor='#666666'
                      autoCorrect={false}
                      style={[styles.textInput, {color: colors.text}]}
                    />
                  </View>

                  <View style={styles.action}>
                    <Icon name="map-marker-radius" color={Colors.text} size={20} style={{top: -5}}/>
                    <TextInput
                      placeholder='City'
                      placeholderTextColor='#666666'
                      autoCorrect={false}
                      style={[styles.textInput, {color: colors.text}]}
                    />
                  </View>

                  <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>

          
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });

export default EditProfile;


