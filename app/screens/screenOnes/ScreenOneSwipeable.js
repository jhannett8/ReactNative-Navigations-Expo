import React, { useCallback } from "react";
import { StyleSheet, Dimensions, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from "react-native-gesture-handler";
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
          backgroundColor: item.color,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {item.title}
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
});

export default ScreenOneSwipeable;
