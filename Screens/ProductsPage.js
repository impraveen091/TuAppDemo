import * as React from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import Nav from "../Components/Comp/Nav";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar, Avatar, Button, Card } from "react-native-paper";

export default function ProductsPage({ navigation, route }) {
  const [products, setProducts] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const Id = route.params.id;
  const regex = /(<([^>]+)>)/gi;

  const demoDesc = (des) => {
    const result = des?.replace(regex, "");
    const words = result?.split(" ");
    const truncatedText = words?.slice(0, 8).join(" ");
    console.log(truncatedText);
    return truncatedText;
  };

  // React.useEffect(() => {
  //   fetchProductsByCategory(Id);
  // }, []);

  const generateNonce = async (username, password) => {
    try {
      const response = await axios.post(
        "http://apps.ecosmossolutions.com/wp/wp-json/jwt-auth/v1/token",
        {
          username: username,
          password: password,
        }
      );
      console.log(" response.data", response.data.token);
      return response.data.token;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const fetchProductsByCategory = async (id) => {
    // const username = "admin";
    // const password = "pass";
    // const nonce = await generateNonce(username, password);
    // console.log("nonce", nonce);
    const response = await axios.get(
      `http://apps.ecosmossolutions.com/wp/wp-json/wc/v3/products?categories/${id}`,

      {
        headers: {
          Authorization: "Bearer" + route.params.authToken,
        },
      }
    );

    console.log(response.data);
    // setProducts(response.data);
    return response.data;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <Searchbar
          style={{ width: "100%" }}
          placeholder="Search your Products..."
          onChangeText={(newText) => setSearch(newText)}
          value={search}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          {route.params.products.map((data, index) => {
            return (
              <View key={index}>
                <View
                  key={index}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                    shadowColor: "rgba(0.5, 0.5, 0.5, 0.5)",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 4,
                    elevation: 7,
                  }}
                >
                  <View
                    key={index}
                    style={{
                      backgroundColor: "#eee",
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("ProductsDetail", { id: data.id });
                      }}
                    >
                      <View>
                        <Image
                          key={index}
                          source={{
                            uri: `${data?.images?.[0]?.src}`,
                          }}
                          style={{
                            height: 155,
                            width: 155,
                            borderRadius: 10,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          padding: 10,
                          width: 155,
                          height: 100,
                          // backgroundColor: "grey",
                        }}
                      >
                        <Text style={{ fontSize: 10, flexWrap: "wrap" }}>
                          <b>{data.name}</b>
                          {demoDesc(data?.description)}
                      
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <Text style={{ color: "green" }}>
                              £{data?.sale_price}
                            </Text>
                            <Text
                              style={{
                                color: "red",
                                textDecoration: "line-through",
                              }}
                            >
                              £{data?.price}
                            </Text>
                          </View>
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    height: "100%",
  },

  searchIcon: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  image: { height: 100, width: 100, borderRadius: 5 },
  row: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 20,
    rowGap: 20,
  },
});
