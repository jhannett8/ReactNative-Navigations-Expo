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
        swipeEnabled={false}
        tabBarOptions={{
          activeTintColor: colors.white,
          inactiveTintColor: "rgba(255,255,255,0.8)",
          indicatorStyle: { backgroundColor: colors.black },
          indicatorContainerStyle: {
            width: "100%",
          },
          labelStyle: styles.labelStyle,
          style: [styles.tabBarStyle, { top: insets.top }],
          scrollEnabled: false,
        }}
        initialRouteName="Swipeable"
      >
        <Tab.Screen name="NestedTab">
          {(props) => <ScreenOneNestedTab {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Swipeable">
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
