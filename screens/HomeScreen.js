import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";


const HomeScreen = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(()=>{
    client.fetch(`
      *[_type == 'featured']{
      ...,
       restaurants[]->{
         ...,
         dishes[]->
       }
       }
    `)
  },[])
  
  return (
    <SafeAreaView className="">
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
        <FeaturedRow 
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow 
          id="1234"
          title="Tasty Discount"
          description="Find the best deals available"
        />
        <FeaturedRow 
          id="12345"
          title="Offers near you!"
          description="support your local restaurants tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
