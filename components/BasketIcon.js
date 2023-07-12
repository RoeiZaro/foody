import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotalPrice,
} from "../reduxSlices/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotalPrice = useSelector(selectBasketTotalPrice);

  if (items.length === 0) return null; // not displayed if there are no items

  return (
    <View className="absolute bottom-2 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket page")}
        className="flex-row mx-5 bg-[#00CCBB] p-4 rounded-lg items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-md">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotalPrice} currency="ILS" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
