import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { pickImage } from "@/src/utils/ImagePicker";
import Button from "@/src/components/Button";
import { supabase } from "@/src/lib/supabase";

const Feed = () => {
  const [userProfile, setUserProfile] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");

  return (
    <View className="p-3 flex-1">
      {userProfile ? (
        <Image
          source={{
            uri: userProfile,
          }}
          className="w-52 aspect-square self-center rounded-full bg-slate-300"
        />
      ) : (
        <View className="w-52 aspect-square self-center rounded-full bg-slate-300" />
      )}
      <Text
        onPress={() => pickImage(setUserProfile)}
        className="text-blue-500 font-semibold my-5 self-center"
      >
        Change
      </Text>
      <Text className="mb-2 text-gray-500 font-semibold">Username</Text>
      <TextInput
        value={username}
        placeholder="Username"
        onChangeText={setUsername}
        className="border border-gray-300 p-3 rounded-md"
      />
      <View className="gap-2 mt-auto">
        <Button
          title="Update profile"
          type="primary"
          onPress={() => console.log("Shared")}
        />
        <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  );
};

export default Feed;
