import { Text, Pressable } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
  type?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onPress: () => void;
};

const types = {
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
  outline: "border border-blue-500",
};

const textTypes = {
  primary: "text-white",
  secondary: "text-white",
  outline: "text-blue-500",
};

const textSizes = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

const sizes = {
  small: "p-2",
  medium: "p-3",
  large: "p-4",
};

const Button = ({
  title,
  className,
  type = "primary",
  size = "medium",
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`${types[type]} w-full ${sizes[size]} items-center rounded-md ${className}`}
    >
      <Text className={`${textTypes[type]} ${textSizes[size]} font-semibold`}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
