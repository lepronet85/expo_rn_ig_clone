import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";
import { pickImage } from "@/src/utils/ImagePicker";
import Button from "@/src/components/Button";

const CreatePost = () => {
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (!image) {
        pickImage(setImage, [4, 3]);
      }
    }, [image])
  );

  return (
    image && (
      <View className="p-3 items-center flex-1">
        <Image
          source={{
            uri: image,
          }}
          className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
        />
        <Text
          onPress={() => pickImage(setImage, [4, 3])}
          className="text-blue-500 font-semibold my-5"
        >
          Change
        </Text>
        <TextInput
          value={caption}
          onChangeText={setCaption}
          placeholder="What is on your mind"
          className="w-full p-3 "
        />
        <View className="mt-auto w-full">
          <Button title="Share" onPress={() => console.log("Shared")} />
        </View>
      </View>
    )
  );
};

export default CreatePost;
