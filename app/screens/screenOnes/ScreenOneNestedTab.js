import React, { useCallback } from "react";
import { StyleSheet, Dimensions, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import data from "../../dataObjects/data";
import { colors, navigationConstants } from "../../config/theme";

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
      }}
    >
      <Text style={{ color: colors.white, fontSize: 25 }}>
        This Swipe Feature was enabled by a swipeable Component
      </Text>
    </View>
  );
};

function ScreenOneNestedTab(props) {
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
          scrollEnabled: true,
        }}
        initialRouteName="TabTwo"
      >
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
              {item.title}
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
        viewabilityConfig={viewConfigRef.current}
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
