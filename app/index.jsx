import { Image } from "expo-image";
import { router } from "expo-router";
import {
  //   Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Principal() {
  const navegar = () => {
    router.push("/list");
  };

  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.all}>
          <Text style={s.mainText}>Primeira página</Text>
          {/* IMAGENS DO REACT NATIVE */}
          {/* <Image
            style={s.img}
            source={require("../assets/images/react-logo.png")}
          />
          <Image
            style={s.img}
            source={
              "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
            }
          /> */}

          {/* IMAGENS DO EXPO REACT NATIVE */}
          <Image
            source="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
            style={s.img}
          />
          <Image
            source={require("../assets/images/react-logo.png")}
            style={s.img}
          />

          <Text style={s.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quas
            nobis consectetur sit, voluptates accusamus maxime in culpa
            repellendus ipsa est velit ad saepe fugit dicta totam reiciendis
            earum illo? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Aut quas nobis consectetur sit, voluptates accusamus maxime in
            culpa repellendus ipsa est velit ad saepe fugit dicta totam
            reiciendis earum illo?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aut quas nobis consectetur sit, voluptates
            accusamus maxime in culpa repellendus ipsa est velit ad saepe fugit
            dicta totam reiciendis earum illo?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Aut quas nobis consectetur sit,
            voluptates accusamus maxime in culpa repellendus ipsa est velit ad
            saepe fugit dicta totam reiciendis earum illo?Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Aut quas nobis consectetur sit,
            voluptates accusamus maxime in culpa repellendus ipsa est velit ad
            saepe fugit dicta totam reiciendis earum illo?Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Aut quas nobis consectetur sit,
            voluptates accusamus maxime in culpa repellendus ipsa est velit ad
            saepe fugit dicta totam reiciendis earum illo?
          </Text>

          <TouchableOpacity style={s.btn} onPress={navegar}>
            <Text style={s.mainText}>Ir para os cards</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "black",
  },
  mainText: {
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 20,
    // textAlign: "center"
    // textAlign: "justify"
  },
  all: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginBottom: 20
  },
  img: {
    width: 150,
    height: 150,
    // borderRadius: "100%"
  },
  btn: {
    backgroundColor: "#1a5381",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 999,
    shadowColor: "#ffffff31",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 30,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
