import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, StatusBar, View, Picker, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FocusedStatusBar,CircleButton , RectButton} from "../components";
import { COLORS , assets, SIZES} from "../constants";
//import {LoginButton} from "../components/Button";


const Buy = ({navigation}) => {
    const [number, onChangeNumber] = React.useState("");
    const [selectedValue, setSelectedValue] = React.useState("deso");
    const [balanceUsd, setBalanceUsd] = React.useState("0.00");
    const [balanceDeSo, setBalanceDeso] = React.useState("10.00");
  return (
      <SafeAreaView style={{flex:1}}>
          <FocusedStatusBar backgroundColor={COLORS.primary} />
          <View style={{
            paddingTop:25,
            paddingBottom:25
          }}>
            <CircleButton
              imgUrl={assets.left}
              handlePress={() => navigation.goBack()}
              left={15}
              top={StatusBar.currentHeight + 10}
              zIndex={1}
            />
            <Text style={{
              textAlign:"center",
              fontSize:40,
            }}>
              Enter Amount
            </Text>
          </View>

          <View style={{
            paddingBottom:25,
            paddingLeft: 30,
            paddingRight: 30
          }}>
            <TextInput
                style={{
                  height:80,
                  borderWidth: 1,
                  textAlign: 'center',
                  fontSize: 40
                }}
                placeholder="0.00"
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
            />
            {/* <Picker
                selectedValue={selectedValue}
                style={{height: 100,width: 100}}
                mode={"dropdown"}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="USD" value="usd" />
                <Picker.Item label="Deso" value="deso" />
            </Picker> */}
          </View>

          <View style={{
            paddingLeft: 30,
            paddingRight: 30
          }}
          >
            <RectButton
                text="Confirm"
                minWidth={50}
                fontSize={25}
                borderRadius={10}
            />
          </View>

          <View style={{
            paddingTop: 30,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 20,
          }}>
            <Text style={{
              position: 'absolute',
              paddingTop: 50,
              fontSize: 20,
              paddingLeft: 53,
              zIndex: 1
            }}
            >
              Balance
            </Text>
            <Text style={{
              fontSize:30,
              textAlign:'left',
              backgroundColor: 'orange',
              padding: 30,
              height: 200,
              borderRadius: 15,
              textAlignVertical: 'bottom'
            }}
            >{(selectedValue === "usd")? balanceUsd : balanceDeSo}</Text>

            <Text style={{
              position: 'absolute',
              right: 20,
              top: 130
            }}>
              <Picker
                  selectedValue={selectedValue}
                  style={{height: 100,width: 100}}
                  mode={"dropdown"}
                  onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  textAlign={'right'}
              >
                  <Picker.Item label="USD" value="usd" />
                  <Picker.Item label="Deso" value="deso" />
              </Picker>
            </Text>


          </View>


      </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//     input: {
//       height: 80,
//       margin: 12,
//       borderWidth: 1,
//       padding: 10,
//       borderRadius: 5,
//       width: 280,
//       textAlign: 'center',
//       justifyContent: 'center',
//       fontSize:40
//     },
// });

export default Buy;