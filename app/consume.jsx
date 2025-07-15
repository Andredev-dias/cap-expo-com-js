import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { BtnBack } from "../components/btnBack";
import { Card2 } from "../components/card2";

export default function Consume() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState("1");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCharacters = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      );
      const data = await response.json();

      if (data.error) {
        throw new Error("Página não encontrada");
      }

      setCharacters(data.results);
      setError(false);
    } catch (error) {
      setError(true);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(pageNumber);
  }, [pageNumber]);

  return (
    <SafeAreaView style={s.container}>
        <br />
        <BtnBack/>
        <br />
      <TextInput
        style={s.input}
        keyboardType="default"
        placeholder="1/42"
        value={pageNumber}
        onChangeText={(value) => setPageNumber(value)}
      />
      {loading ? (
        <View style={s.ld}>
          <ActivityIndicator size="large" color="#010101" />
          <Text>CARREGANDO...</Text>
        </View>
      ) : (
        <>
          {error ? (
            <Text style={s.error}>Página não encontrada</Text>
          ) : (
            <FlatList
              style={s.flat}
              data={characters}
              renderItem={({ item }) => {
                return (
                  <Card2
                    id={item.id}
                    img={item.image}
                    text1={item.name}
                    text2={item.status}
                    text3={item.species}
                  />
                );
              }}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  input: {
    backgroundColor: "#090909",
    color: "#fff",
    padding: 10,
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  flat: {
    paddingBottom: 10,
  },
  ld: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  error: {
    color: "red",
    fontSize: 30,
  },
});
