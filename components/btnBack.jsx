import { router } from "expo-router"
import { Image, TouchableOpacity } from "react-native"


export const BtnBack = () => {
    return(
        <TouchableOpacity onPress={() => router.push("/")}>
            <Image source={require("../assets/images/icons8-back-arrow-26.png")}/>
        </TouchableOpacity>
    )
}