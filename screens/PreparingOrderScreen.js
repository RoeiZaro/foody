import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../elements/loadingStir.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iteration={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for restaurant to confirm the order
      </Animatable.Text>
      <Text>PreparingOrderScreen</Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
