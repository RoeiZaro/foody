import "react-native-gesture-handler"; // for new react-navigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import "react-native-url-polyfill/auto";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator headerShown="false">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Restaurant page"
            component={RestaurantScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              ...TransitionPresets.ModalSlideFromBottomAndroid,
              presentation: "modal",
            }}
            name="Basket page"
            component={BasketScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: "fullScreenModal",
            }}
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
