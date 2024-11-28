import React from "react";
import { useAuth } from "@/src/providers/Authprovider";
import { Redirect, Stack } from "expo-router";

const Authlayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }
  return <Stack />;
};

export default Authlayout;
