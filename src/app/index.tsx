import { Redirect } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Home = () => {
  return <Redirect href="/(tabs)/" />;
};

export default Home;
