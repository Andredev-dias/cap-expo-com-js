import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native"
import { Card } from "../components/card"
import mock from "../constants/mock"

export default function List(){
    return(
        <SafeAreaView style={s.wrap}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Text>Lista de cards</Text>
            <FlatList data={mock} keyExtractor={(item) => item.id} renderItem={({item}) => <Card id={item.id} name={item.nome} age={item.idade} date={item.data} img={item.imagem}/>}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
})