import React from "react";
import { Stack } from "expo-router";

import "@/global.css";
import AuthProvider from "@/src//providers/Authprovider";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </AuthProvider>
  );
};

export default RootLayout;
