import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { SvgUri } from "react-native-svg";

const getSvg = (uri) => <SvgUri className="h-36 w-64 rounded-sm" uri={uri} />;

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  adress,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const [imgUri, setImgUri] = useState(urlFor(imgUrl).url());
  const imgType = imgUri.slice(-3, imgUri.length);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant page", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          adress,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      {imgType == "svg" ? (
        getSvg(imgUri)
      ) : (
        <Image
          source={{
            uri: imgUri,
          }}
          className="h-36 w-64 rounded-sm"
        />
      )}
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pr-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text classname="text-xs text-gray-400">
            <Text className="text-green-500">{rating}</Text>
            <Text className="text-gray-500"> - {genre}</Text>
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby - {adress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
