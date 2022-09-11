import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/Login";
import Form from "../../screens/Form";

import TabNavigator from "./tabs";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Form" component={Form} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
  </Stack.Navigator>
);
