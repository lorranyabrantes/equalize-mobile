import { StyleSheet } from "react-native";
import {
  FONT_FAMILY,
  SPACING,
  COLORS,
  BORDER_RADIUS,
} from "../../services/styles";

const styles = StyleSheet.create({
  // container:{
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#FSFCFF',
  //},
  Card: {
    backgroundColor: "rgb(174, 228, 232)",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    borderRadius: BORDER_RADIUS.medium,
    marginLeft: "10%",
    width: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 6,
      height: 6,
    },
  },
  cardText: {
    textAlign: "center",
    padding: 10,
    fontSize: 20,

    borderRadius: BORDER_RADIUS.medium,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardRating: {
    textAlign: "center",
    padding: 10,
    fontSize: 80,
    borderRadius: BORDER_RADIUS.medium,

    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  Card2: {
    backgroundColor: "rgb(174, 228, 232)",
    textAlign: "center",
    marginBottom: 30,
    marginLeft: "10%",
    width: "80%",
    borderRadius: BORDER_RADIUS.medium,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 6,
      height: 6,
    },
  },
  Card2Text: {
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    borderRadius: BORDER_RADIUS.medium,

    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  Card3Text: {
    textAlign: "center",
    padding: 3,
    fontSize: 16,
    borderRadius: BORDER_RADIUS.medium,

    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  Card2Rating: {
    textAlign: "center",
    padding: 10,
    fontSize: 80,
    borderRadius: BORDER_RADIUS.medium,

    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  search: {
    paddingTop: SPACING.medium,
    paddingHorizontal: SPACING.xsmall,
  },
  text: {
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    borderRadius: BORDER_RADIUS.medium,

    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  content: {
    backgroundColor: "rgb(174, 228, 232)",
    borderWidth: 1,
    textAlign: "center",
    marginBottom: 10,
    marginLeft: "10%",
    width: "80%",
    borderRadius: BORDER_RADIUS.medium,
    borderColor: COLORS.GRAY,
    padding: SPACING.small,

    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "rgb(174, 228, 232)",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    borderRadius: BORDER_RADIUS.medium,

    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 12,
  },
  pagination: {
    flexDirection: "row",
    paddingTop: SPACING.small,
    paddingHorizontal: SPACING.xsmall,
    paddingBottom: SPACING.medium,
    justifyContent: "space-between",
  },
});

export default styles;
