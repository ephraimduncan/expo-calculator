import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../styles/colors";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

export default function Button({
  title,
  onPress,
  isBlue,
  isGray,
}: ButtonProps) {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isBlue
          ? Styles.buttonBlue
          : isGray
          ? Styles.buttonGray
          : theme === "light"
          ? Styles.buttonLight
          : Styles.buttonDark
      }
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
