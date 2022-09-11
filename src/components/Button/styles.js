import { StyleSheet } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "../../services/styles";

const styles = StyleSheet.create({
  default: {
    backgroundColor: "#d3e6f3",
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BORDER_RADIUS.medium,
    paddingHorizontal: SPACING.medium,
  },
  disabled: {
    backgroundColor: COLORS.GRAY,
  },
});

export default styles;
