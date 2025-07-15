import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Card = ({id, img, name, age, date}) => {
  return (
    <View>
      <Text>{id}</Text>
      <Image style={s.img} source={img} />
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{date}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
});
