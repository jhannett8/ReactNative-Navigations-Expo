import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootStack from "./app/navigations/RootStack";

import { colors } from "./app/config/theme";

export default function App() {

  return (
        <NavigationContainer
          theme={{
            colors: {
              primary: colors.darkRed,
              background: colors.darkGray,
            },
          }}
          style={styles.container}
        >
           <RootStack /> 
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    alignItems: "center",
    justifyContent: "center",
  },
});
