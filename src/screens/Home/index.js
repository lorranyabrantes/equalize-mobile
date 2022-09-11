import React, { useState, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Text from "../../components/Text";

import styles from "./styles";

const Home = ({ navigation, user }) => {
  const goToForm = () => navigation.navigate("Form");

  const currentUser = user?.user?.[0];

  return (
    <Container pageTitle={"EQUALIZE"}>
      <View style={styles.Card2}>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.Card2Text}>Dados pessoais</Text>
          <Text style={styles.Card3Text}>Nome: {currentUser?.name}</Text>
          <Text style={styles.Card3Text}>Cargo: {currentUser?.profession}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Card2}>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.Card2Text}>Dados da empresa</Text>
          <Text style={styles.Card3Text}>
            Nome: {currentUser?.company?.name}
          </Text>
          <Text style={styles.Card3Text}>
            Email: {currentUser?.company?.email}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Card}>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.cardText}>Engajamento Individual</Text>
          <Text style={styles.cardRating}>{currentUser?.engagement}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Você tem um novo formulário para responder
        </Text>
        <Button
          onPress={goToForm}
          style={styles.botao}
          textStyle={styles.textButton}
          text={"Ambiente de Trabalho"}
        ></Button>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(Home);
