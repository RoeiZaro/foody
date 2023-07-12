import { Text, View } from "react-native";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../reduxSlices/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();

  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  );
};

export default BasketIcon;
