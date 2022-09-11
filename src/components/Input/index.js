import React, { useState, useCallback, useEffect } from "react";
import { TextInput } from "react-native";

import styles from "./styles";

const Input = ({ onChangeText, value, style, placeholder, password }) => {
  const [text, setText] = useState(value);

  const changeText = useCallback(
    (newText) => {
      setText(newText);
      onChangeText(newText);
    },
    [text, onChangeText]
  );

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <TextInput
      testID={"seach-input"}
      style={[styles.input, style]}
      placeholder={placeholder}
      onChangeText={(value) => changeText(value)}
      value={text}
      secureTextEntry={password}
    />
  );
};

export default Input;
