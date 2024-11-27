import * as ImagePicker from "expo-image-picker";

export const pickImage = async (
  setImage: React.Dispatch<React.SetStateAction<string | null>>,
  aspectRatio: [number, number] = [1, 1]
) => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: aspectRatio,
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};
