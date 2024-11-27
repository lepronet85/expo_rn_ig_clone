import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { AdvancedImage } from "cloudinary-react-native";

import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from "@/src/lib/cloudinary";

interface Post {
  id: string;
  user: {
    id: string;
    username: string;
    image_url: string;
    avatar_url: string;
  };
  image_url: string;
  caption: string;
  image: string;
}

const PostListItem = ({ post }: { post: Post }) => {
  const image = cld.image(post.image);
  const avatar = cld.image(post.user.avatar_url);
  const { width } = useWindowDimensions();

  image.resize(thumbnail().width(width).height(width));
  avatar.resize(
    thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face()))
  );

  return (
    <View className="bg-white">
      <View className="p-3 flex-row items-center gap-2">
        {/* <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        /> */}
        <AdvancedImage
          cldImg={avatar}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      {/* <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" /> */}
      <AdvancedImage cldImg={image} className="w-full aspect-[4/3]" />
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />
        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
};

export default PostListItem;
