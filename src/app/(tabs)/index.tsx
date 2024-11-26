import { FlatList, View } from "react-native";
import React from "react";
import posts from "@/assets/data/posts.json";
import PostListItem from "@/src/components/PostListItem";

const Feed = () => {
  return (
    <FlatList
      data={posts}
      className="max-w-[600px] w-full self-center"
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => <PostListItem post={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Feed;
