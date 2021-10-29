import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "../../config/theme";
import constants from "../../config/constants";

import FollowingFeedScreen from "../../screens/loopFeedScreens/FollowingFeedScreen";
import DiscoverFeedScreen from "../../screens/loopFeedScreens/DiscoverFeedScreen";


function tabNavigator(props) {
    const Tab = createMaterialTopTabNavigator();

  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        swipeEnabled={false}
        tabBarOptions={{
          activeTintColor: colors.white,
          inactiveTintColor: "rgba(255,255,255,0.8)",
          indicatorStyle: { backgroundColor: colors.blue },
          indicatorContainerStyle: {
            width: "100%",
          },
          labelStyle: styles.labelStyle,
          style: [styles.tabBarStyle, { top: insets.top }],
          scrollEnabled: false,
        }}
        initialRouteName="Discover"
      >
        <Tab.Screen name="Following">
          {(props) => <FollowingFeedScreen {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Discover">
          {(props) => <DiscoverFeedScreen {...props} />}
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
      height: constants.topNavBarHeight,
    },
  });

export default tabNavigator;