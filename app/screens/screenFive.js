import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../config/theme";

/* Icons */
import { Ionicons } from "@expo/vector-icons";

function ScreenFive(props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.icon}>
              <Ionicons
                name="chevron-forward-outline"
                size={30}
                color={colors.white}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={{
          marginTop: 360,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ textAlign: "center", fontSize: 20, color: colors.darkRed }}
        >
          This screen is referenced in the root stack navigator, parent to the
          Bottom Tab Navigator. This is one solution to hiding the bottom tab
          bar from view.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: "100%",
    position: "absolute",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 10,
    right: 0,
    position: "absolute",
  },
  icon: {
    height: 34,
    width: 34,
    backgroundColor: colors.darkRed,
    borderRadius: 17,
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScreenFive;
