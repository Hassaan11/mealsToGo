import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../../feature/account/screens/login.screens";
import { AccountScreen } from "../../feature/account/screens/account.screens";
import { RegisterScreen } from "../../feature/account/screens/register.screens";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
