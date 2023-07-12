import { Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotalPrice,
} from "../reduxSlices/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotalPrice = useSelector(selectBasketTotalPrice);

  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  );
};

export default BasketIcon;
