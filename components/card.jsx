import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Card = (props) => {
  return (
    <View>
      <Text>{props.id}</Text>
      <Image style={s.img} source={props.img} />
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      <Text>{props.date}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
});
