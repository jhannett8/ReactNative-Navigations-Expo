import React from "react";
import AppNavigator from "./AppNavigator";

import BottomNavigator from "./bottomTabNavigators"
import screenFive from "../screens/screenFive";
import screenSix from "../screens/screenSix";

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
        component={screenFive}
        options={{
          gestureDirection: "horizontal-inverted",
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="screenSixRootStack"
        component={screenSix}
        options={{ gestureEnabled: true }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
