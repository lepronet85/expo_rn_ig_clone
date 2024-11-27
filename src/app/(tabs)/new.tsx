import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "expo-router";

const CreatePost = () => {
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (!image) {
        pickImage();
      }
    }, [image])
  );

  return (
    image && (
      <View className="p-3 items-center flex-1">
        <Image
          source={{
            uri: image || "",
          }}
          className="w-52 aspect-[3/4] rounded-lg shadow-md"
        />
        <Text onPress={pickImage} className="text-blue-500 font-semibold my-5">
          Change
        </Text>
        <TextInput
          value={caption}
          onChangeText={setCaption}
          placeholder="What is on your mind"
          className="w-full p-3 "
        />
        <View className="mt-auto w-full">
          <Pressable
            onPress={() => console.log("Pressed")}
            className="bg-blue-500 w-full p-3 items-center rounded-md"
          >
            <Text className="text-white font-semibold">Share</Text>
          </Pressable>
        </View>
      </View>
    )
  );
};

export default CreatePost;
