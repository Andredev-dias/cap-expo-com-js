import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Card2 = (props) => {
  return (
    <View style={s.wrap}>
      <Text>{props.id}</Text>
      <Image style={s.img} source={props.img} />
      <Text>{props.text1}</Text>
      <Text>{props.text2}</Text>
      <Text>{props.text3}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
  wrap:{
    marginBottom: 10,
    borderWidth: 2,
    marginTop: 10
  }
});
