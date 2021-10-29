import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, navigationConstants } from "../../config/theme";

import ScreenOneNestedTab from "../../screens/screenOnes/ScreenOneNestedTab";
import ScreenOneSwipeable from "../../screens/screenOnes/ScreenOneSwipeable";

function TopTabNavigator(props) {
  const Tab = createMaterialTopTabNavigator();

  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: "rgba(255,255,255,0.8)",
          tabBarIndicatorStyle: { backgroundColor: colors.white },
          tabBarIndicatorContainerStyle: {
            width: "100%",
          },
          tabBarLabelStyle: styles.labelStyle,
          tabBarStyle: [styles.tabBarStyle, { top: insets.top }],
          tabBarScrollEnabled: false,
        }}
        initialRouteName="Tab 1"
      >
        <Tab.Screen name="Tab 1">
          {(props) => <ScreenOneSwipeable {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Tab 2">
          {(props) => <ScreenOneSwipeable {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    fontWeight: "700",
  },
  tabBarStyle: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 80,
    right: 80,
    bottom: 0,
    height: navigationConstants.topNavBarHeight,
  },
});

export default TopTabNavigator;
