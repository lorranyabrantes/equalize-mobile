import { StyleSheet } from "react-native";
import {
  SPACING,
  FONT_SIZES,
  COLORS,
  BORDER_RADIUS,
} from "../../services/styles";

const styles = StyleSheet.create({
  search: {
    paddingHorizontal: SPACING.large,
    marginVertical: SPACING.xxlarge,
  },
  text: {
    width: "100%",
    textAlign: "center",
    marginVertical: SPACING.large,
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 10,
  },
  mainText: {
    marginVertical: SPACING.xxlarge,
    fontSize: FONT_SIZES.xxlarge,
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    paddingTop: SPACING.small,
    paddingHorizontal: SPACING.xsmall,
    paddingBottom: SPACING.medium,
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    flexGrow: 1,
    backgroundColor: COLORS.GRAY,
    borderRadius: BORDER_RADIUS.medium,
    paddingHorizontal: SPACING.small,
    marginBottom: SPACING.medium,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
