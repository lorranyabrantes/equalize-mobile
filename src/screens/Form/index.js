import React, { useState } from "react";
import { View, Image } from "react-native";
import Toast from "react-native-toast-message";

import iconAnon from "../../assets/png/icon-anon.png";

import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Container from "../../components/Container";

import styles from "./styles";

const Form = ({ navigation }) => {
  const [text, setText] = useState("");

  const handleSendButton = () => {
    Toast.show({
      type: "success",
      text1: "Uhul...",
      text2: "Formulário enviado com sucesso!",
    });
    setText("");
  };

  return (
    <Container pageTitle={"Formulário"}>
      <View style={styles.title}>
        <Image source={iconAnon} />
        <Text style={styles.text}>Anônimo</Text>
      </View>
      <Text style={styles.text}>Ambiente de trabalho</Text>
      <Text style={[styles.text, styles.mainText]}>
        Como você considera{"\n"}seu ambiente de trabalho?
      </Text>
      <View style={styles.search}>
        <Input
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder={"Deixe seu comentário aqui"}
        />
        <Button onPress={handleSendButton} text={"Enviar"}></Button>
      </View>
    </Container>
  );
};

export default Form;
