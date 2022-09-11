import { StyleSheet } from "react-native";
import {
  SPACING,
  COLORS,
  BORDER_RADIUS,
  FONT_FAMILY,
} from "../../services/styles";

const styles = StyleSheet.create({
  text: {
    width: "100%",
    textAlign: "center",
    marginVertical: SPACING.large,
    fontFamily: FONT_FAMILY.roboto.bold,
    fontSize: 22,
    marginTop: 150,
  },
  input: {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.medium,
    borderColor: COLORS.GRAY,
    height: 40,
    flexGrow: 1,
    marginBottom: 15,
    backgroundColor: COLORS.GRAY,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
