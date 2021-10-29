import React from "react";

import BottomNavigator from "./bottomTabNavigators/BottomNavigator";
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
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
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
