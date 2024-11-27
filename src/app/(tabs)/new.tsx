import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useEffect } from "react";

const CreatePost = () => {
  const [caption, setCaption] = React.useState<string>("");

  return (
    <View className="p-3 items-center flex-1">
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        className="w-52 aspect-[3/4] rounded-lg shadow-md"
      />
      <Text
        onPress={() => console.log("press")}
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
        <Pressable
          onPress={() => console.log("Pressed")}
          className="bg-blue-500 w-full p-3 items-center rounded-md"
        >
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePost;
