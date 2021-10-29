import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import screenOne from "../../screens/screenOne";
import screenTwo from "../../screens/screenTwo";
import screenThree from "../../screens/screenThree";
import screenFour from "../../screens/screenFour";

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
        component={screenOne}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="glass" color={colors.white} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="screenTwoAppNavigator"
        component={screenTwo}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="music" color={colors.white} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="screenThreeAppNavigator"
        component={screenThree}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="home" size={25} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="screenFourAppNavigator"
        component={screenFour}
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
