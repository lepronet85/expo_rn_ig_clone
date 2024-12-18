import { View, Text } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useAuth } from "@/src/providers/Authprovider";

const TabsLyout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "For you",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          headerTitle: "Create post",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-square-o" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLyout;
