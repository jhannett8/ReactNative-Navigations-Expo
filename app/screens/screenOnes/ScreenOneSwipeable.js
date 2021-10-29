import React, { useCallback } from "react";
import { StyleSheet, Dimensions, View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Swipeable } from "react-native-gesture-handler";
import data from "../../dataObjects/data";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
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
        1) Reference the root stack navigator. Simply call the
        navigation.navigate function with the screen name found in the Root
        Stack Navigation component. This option is great for onclick events.
        This option does not work well with the swipeable components - the
        Swipeable component needs to take in another component for seamless
        slide animation (cannot call a function).
      </Text>
      <Text style={{ color: colors.white, fontSize: 12, paddingVertical: 20 }}>
        2) Reference a screen with a modal that overlaps the bottom navigation
        bar.
      </Text>
    </View>
  );
};

function ScreenOneSwipeable(props) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const bottomNavHeight =
    navigationConstants.bottomNavBarHeight + insets.bottom;

  const _ItemLayout = (list, index) => ({
    length: height - bottomNavHeight,
    offset: (height - bottomNavHeight) * index,
    index,
  });

  const onNavigationScreenFive = () => {
    navigation.navigate("screenFiveRootStack");
  };

  const onNavigationScreenSixe = () => {
    navigation.navigate("screenSixRootStack");
  };

  const _keyExtractor = useCallback((item) => item.postId.toString(), []);

  const _renderItem = useCallback(({ item }) => (
    <Swipeable
      overshootLeft={false}
      overshootRight={false}
      renderLeftActions={RenderSwipeAction}
      renderRightActions={RenderSwipeAction}
      //rightThreshold={150}
      //leftThreshold={150}
    >
      <View
        style={{
          flex: 1,
          height: height - bottomNavHeight,
          width: "100%",
          backgroundColor: item.color,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ marginBottom: 20 }}>{item.title}</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableWithoutFeedback onPress={onNavigationScreenFive}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                paddingHorizontal: 10,
                marginVertical: 30,
                backgroundColor: colors.darkRed,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: colors.white }}>Press Me</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={{ textAlign: "center" }}>
            Press the following button to display a screen that will sit over
            the bottom tab bar
          </Text>
        </View>
      </View>
    </Swipeable>
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
});

export default ScreenOneSwipeable;
