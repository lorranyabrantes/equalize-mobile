import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Toast from "react-native-toast-message";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Input from "../../components/Input";
import styles from "./styles";

import equalizeApi from "../../services/network/equalizeApi";

const GET_BY_EMAIL = "https://fiap-equalize.herokuapp.com/employee?email=";

import { addUser } from "../../services/actions";

const Login = ({ navigation, addUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const goToForm = () => {
    if (email === "") {
      Toast.show({
        type: "error",
        text1: "Ops...",
        text2: "Coloque seu email!",
      });

      return;
    }

    setIsLoading(true);

    equalizeApi.get(`${GET_BY_EMAIL}${email}`, (response) => {
      setIsLoading(false);
      const { password: senha } = response.data;

      if (senha === password) {
        navigation.navigate("TabNavigator");

        addUser(response.data);

        Toast.show({
          type: "success",
          text1: "Uhul...",
          text2: "Login efetuado com sucesso!",
        });

        setEmail("");
        setPassword("");
        return;
      }

      setPassword("");

      Toast.show({
        type: "error",
        text1: "Ops...",
        text2: "Senha incorreta!",
      });
    });
  };

  return (
    <Container pageTitle={"login"}>
      <View>
        <Text style={styles.text}>EQUALIZE</Text>
        <Input
          testID={"seach-input"}
          style={styles.input}
          placeholder="Endereço de e-mail"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          testID={"seach-input"}
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(value) => setPassword(value)}
          password={true}
        />
        {isLoading && <Text>Carregando...</Text>}
        <View style={styles.button}>
          <Button onPress={goToForm} text={"ENTRAR"} />
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
