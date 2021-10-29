import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import ScreenOne from "../../screens/ScreenOne";
import ScreenTwo from "../../screens/ScreenTwo";
import ScreenThree from "../../screens/ScreenThree";
import ScreenFour from "../../screens/ScreenFour";

import { colors, navigationConstants } from "../../config/theme";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const insets = useSafeAreaInsets();
  const bottomNavHeight = navigationConstants.bottomNavBarHeight + insets.bottom;

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.darkRed,
        inactiveTintColor: colors.white,
        style: {
          backgroundColor: colors.darkGray,
          height: bottomNavHeight,
        },
      }}
    >
      <Tab.Screen
        name="screenOneAppNavigator"
        component={ScreenOne}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="glass" color={colors.white} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="screenTwoAppNavigator"
        component={ScreenTwo}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="music" color={colors.white} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="screenThreeAppNavigator"
        component={ScreenThree}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="home" size={25} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="screenFourAppNavigator"
        component={ScreenFour}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="road" size={25} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
