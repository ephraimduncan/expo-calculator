import { StyleSheet } from "react-native";
import { colors } from "./colors";

const buttonStyle = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
});

export const Styles = StyleSheet.create({
  buttonBlue: {
    ...buttonStyle.button,
    backgroundColor: colors.blue,
  },
  buttonDark: {
    ...buttonStyle.button,
    backgroundColor: colors.btnDark,
  },

  buttonLight: {
    ...buttonStyle.button,

    backgroundColor: colors.white,
  },
  buttonGray: {
    ...buttonStyle.button,

    backgroundColor: colors.btnGray,
  },

  smallTextDark: {
    fontSize: 32,
    color: colors.dark,
  },

  smallTextLight: {
    fontSize: 32,
    color: colors.light,
  },

  // Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },

  screenFirstNumber: {
    fontSize: 96,
    color: colors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },

  screenSecondNumber: {
    fontSize: 40,
    color: colors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
