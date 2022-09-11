import React from "react";
import { TouchableOpacity } from "react-native";

import Text from "../Text";

import styles from "./styles";

const Button = ({ text, disabled, loading, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity
      testID="button"
      style={[styles.default, disabled || loading ? styles.disabled : {}, style]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {text ? <Text style={textStyle}>{text}</Text> : null}
    </TouchableOpacity>
  );
};

export default Button;
