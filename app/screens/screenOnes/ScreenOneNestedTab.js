import React, { useCallback } from "react";
import { StyleSheet, Dimensions, View, FlatList, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import data from "../../dataObjects/data";
import { colors, navigationConstants } from "../../config/theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { height } = Dimensions.get("window");

const RenderSwipeAction = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black,
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ color: colors.white, fontSize: 20, paddingVertical: 20 }}>
        Swipeable Component
      </Text>
      <Text
        style={{ color: colors.darkRed, fontSize: 16, paddingVertical: 20 }}
      >
        How do we get rid of the bottom tab bar?
      </Text>
      <Text style={{ color: colors.white, fontSize: 12, paddingVertical: 20 }}>
        1) Reference the root stack navigator. This is done by by calling the
        navigation.navigate function. This option is great for onclick events.
        This option does not work well with the swipeable component - needs to
        take in a component for seamless slide animation (not a function).
      </Text>
      <Text style={{ color: colors.white, fontSize: 12, paddingVertical: 20 }}>
        2) Reference a screen with a modal that will overlap the bottom
        navigation bar.
      </Text>
    </View>
  );
};

function ScreenOneNestedTab() {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const bottomNavHeight =
    navigationConstants.bottomNavBarHeight + insets.bottom;

  const _ItemLayout = (list, index) => ({
    length: height - bottomNavHeight,
    offset: (height - bottomNavHeight) * index,
    index,
  });

  const _keyExtractor = useCallback((item) => item.postId.toString(), []);

  const onNavigationScreenFive = () => {
    navigation.navigate("screenFiveRootStack");
  };

  const onNavigationScreenSixe = () => {
    navigation.navigate("screenSixRootStack");
  };

  const _renderItem = useCallback(({ item }) => (
    <View style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="TabOne">{() => <RenderSwipeAction />}</Tab.Screen>
        <Tab.Screen name="TabTwo">
          {() => (
            <View
              style={{
                flex: 1,
                backgroundColor: item.color,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{item.title}</Text>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableWithoutFeedback onPress={onNavigationScreenFive}>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text>Press Me</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen name="TabThree">{() => <RenderSwipeAction />}</Tab.Screen>
      </Tab.Navigator>
    </View>
  ));

  return (
    <View style={styles.container}>
      <FlatList
        //Required Props
        data={data}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        //Functionality Props
        getItemLayout={_ItemLayout}
        snapToInterval={height - bottomNavHeight}
        snapToAlignment={"center"}
        decelerationRate={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelStyle: {
    color: "transparent",
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

export default ScreenOneNestedTab;
