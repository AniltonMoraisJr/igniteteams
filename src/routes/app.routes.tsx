import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Groups from "@screens/Groups";
import NewGroup from "@screens/NewGroup";
import Players from "@screens/Players";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
};

export default AppRoutes;
