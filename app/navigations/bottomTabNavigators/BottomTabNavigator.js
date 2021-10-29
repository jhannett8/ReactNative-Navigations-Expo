import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import TopTabNavigator from "../topTabNavigators/TopTabNavigator";
import ScreenTwo from "../../screens/ScreenTwo";
import ScreenThree from "../../screens/ScreenThree";
import ScreenFour from "../../screens/ScreenFour";

import { colors, navigationConstants } from "../../config/theme";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const insets = useSafeAreaInsets();
  const bottomNavHeight =
    navigationConstants.bottomNavBarHeight + insets.bottom;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.darkRed,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.darkGray,
          height: bottomNavHeight,
        },
      }}
    >
      <Tab.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="glass" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="screenTwoAppNavigator"
        component={ScreenTwo}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="music" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="screenThreeAppNavigator"
        component={ScreenThree}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="screenFourAppNavigator"
        component={ScreenFour}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="road" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
