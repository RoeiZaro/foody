import { Text, View } from "react-native";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../reduxSlices/basketSlice";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);

  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  );
};

export default BasketIcon;
