import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      {/* The headline */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "http://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* search bar */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="grey" size={25} />
          <TextInput placeholder="Restaurants" keyboardType="default" />
        </View>

        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>

      {/* body */}

      <ScrollView>
        {/* categories */}
        <Categories />

        {/* featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
