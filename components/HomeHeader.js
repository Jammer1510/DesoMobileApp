import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { RectButton, CircleButton, LoginButton } from "./Button";
import { COLORS, FONTS, SIZES, assets } from "../constants";





const HomeHeader = ({ onSearch, navigation }) => {

  return (


    <View
      style={{
        backgroundColor: COLORS.dark_primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <LoginButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("LogIn", {navigation})}
          />
        <TouchableOpacity onPress={() =>
               navigation.navigate('Account') }>
          <View style={{ width: 45, height: 45 }}>
            <Image
              source={assets.person01}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />


            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                bottom: 0,
                right: 0,
              }}
            />
          </View>
        </TouchableOpacity>

      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Aspiring Entrepreneurs 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's get rich!
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;