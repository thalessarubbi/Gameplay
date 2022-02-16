import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "../global/styles/theme";

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppointmentDetails";

const { Navigator, Screen } = createNativeStackNavigator()
export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        header: () => { return null },
        contentStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
    </Navigator>
  )
}