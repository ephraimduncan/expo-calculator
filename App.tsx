import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, SafeAreaView } from "react-native";
import { ThemeContext } from "./context/ThemeContext";
import { colors } from "./styles/colors";
import Button from "./components/Button";
import Keyboard from "./components/Keyboard";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style="auto" />

        <Switch
          value={theme === "light"}
          onChange={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />

        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
