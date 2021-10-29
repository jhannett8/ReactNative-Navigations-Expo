import React from "react";

import BottomTabNavigator from "./bottomTabNavigators/BottomTabNavigator";
import ScreenFive from "../screens/ScreenFive";
import ScreenSix from "../screens/ScreenSix";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="screenFiveRootStack"
        component={ScreenFive}
        options={{
          gestureDirection: "horizontal-inverted",
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="screenSixRootStack"
        component={ScreenSix}
        options={{ gestureEnabled: true }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
