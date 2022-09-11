import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import iconHome from "../../assets/png/icon-home.png";
import iconForm from "../../assets/png/icon-form.png";

import Home from "../../screens/Home";
import Form from "../../screens/Form";

import { COLORS } from "../styles";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: COLORS.GRAY,
      tabBarActiveTintColor: COLORS.BLACK,
    }}
  >
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        tabBarIcon: () => (
          <Image style={{ width: 40, height: 30 }} source={iconHome} />
        ),
      }}
    />

    <Tab.Screen
      name="formulário"
      component={Form}
      options={{
        tabBarIcon: () => (
          <Image style={{ width: 40, height: 30 }} source={iconForm} />
        ),
      }}
    />
  </Tab.Navigator>
);
