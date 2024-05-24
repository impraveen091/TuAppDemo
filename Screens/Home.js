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
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar, Avatar, Button, Card } from "react-native-paper";
import axios from "axios";
import Nav from "../Components/Comp/Nav";
import { useDispatch } from "react-redux";
import { fetchproducts } from "../states/actionCreaters/actionCreaters";
import { store } from "../states/store";

const Home = ({ navigation, route }) => {
const [search, setSearch] = React.useState("");
const [categories, setCategories] = React.useState([]);
const [allProducts,setAllProducts]= React.useState([]);
const [searchQuery, setSearchQuery] = React.useState('');
const HomeState = store.getState();
const dispatch= useDispatch();
  React.useEffect(() => {
    console.log("auth", route.params.authToken);
    console.log("categories", route.params.categories);
    fetchAllProducts();
    console.log(HomeState.product);
  }, []);

  const generateNonce = async (username, password) => {
    try {
      const data = {
        username: username,
        password: password,
      };
      const response = await axios.post(
        "http://apps.ecosmossolutions.com/wp/wp-json/jwt-auth/v1/token",
        data,

        {
          mode: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(" response.data", response.data.token);
      return response.data.token;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const fetchProducts = async (id) => {
    const response = await axios.get(
      `http://apps.ecosmossolutions.com/wp/wp-json/wc/v3/products?categories/${id}`,
      {
        headers: {
          Authorization: "Bearer" + route.params.authToken,
        },
      }
    );
   
  

    console.log("prod", response.data);
    navigation.navigate("ProductsPage", {
      authToken: route.params.authToken,
      id: id,
      products: response.data,
    });

    return response.data;
  };

  const fetchAllProducts = async (id) => {
    const response = await axios.get(
      `http://apps.ecosmossolutions.com/wp/wp-json/wc/v3/products`,
      {
        headers: {
          Authorization: "Bearer" + route.params.authToken,
        },
      }
    );
    
    setAllProducts(response.data);
    dispatch(fetchproducts(response.data));
    console.log("allProductsrod", response.data);
    console.log("routeProds",route.params.allProducts);
    return response.data;
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={styles.logo}
          source={require("../Components/Images/logo.png")}
        />

        <Icon name="bell" size={22} color={"orange"} />
      </View>

      <View style={styles.searchIcon}>
        {/* <Searchbar
          style={{ width: "100%" }}
          placeholder="Search your Products..."
          onChangeText={(newText) => setSearch(newText)}
          value={search}
        /> */}
        <TouchableOpacity
        onPress={()=>{  navigation.navigate("Search", {
          authToken: route.params.authToken,
          categories: route.params.categories,
          allProducts: allProducts,
        });}}
        ><TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      /></TouchableOpacity>
        
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Connecting Businesses</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "#eee",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://source.unsplash.com/1024x768/?shopping",
                }}
                style={{
                  height: 235,
                  width: 330,
                }}
              />
            </View>
            <View
              style={{
                padding: 10,
                width: 330,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "grey",
                marginBottom: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <Text>
                <b>Click, Shop, Delivered</b>
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "grey",
                }}
              >
                <i>Shop Online, Simplifying Retail</i>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
          }}
        >
          <View>
            <Image
              source={require("../Components/Images/Ad1.png")}
              style={{
                height: 235,
                width: 330,
                borderRadius: 10,
                marginBottom: 10,
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Explore Categories</Text>
          <View style={styles.cat}>
            {route.params.categories.map((data, index) => {
              if (data.parent == 0) {
                return (
                  <View key={index} style={styles.row}>
                    <View
                      key={index}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
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
                            navigation.navigate("ProductsPage",{authToken:route.params.authToken,products:HomeState.product})
                            }
                          }
                        >
                          <View>
                            <Image
                              key={index}
                              source={{
                                uri: `${data.image?.src}`,
                              }}
                              style={{
                                height: 100,
                                width: 140,
                                alignItems: "center",
                                justifyContent: "center",
                                borderTopLeftRadius: 10,
                              }}
                            />
                          </View>
                          <View
                            style={{
                              padding: 10,
                              width: 140,
                              height: 30,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "grey",
                            }}
                          >
                            <Text style={{ fontSize: 16 }}>{data.name}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }
            })}
          </View>
        </View>
        <View>
          <Text style={styles.title}>Explore SubCategories</Text>
          <View style={styles.cat}>
            {route.params.categories.map((data, index) => {
              if (data.parent !== 0) {
                return (
                  <View key={index} style={styles.row}>
                    <View
                      key={index}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
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
                            fetchProducts(data.id);
                          }}
                        >
                          <View>
                            <Image
                              key={index}
                              source={{
                                uri: `${data.image?.src}`,
                              }}
                              style={{
                                height: 100,
                                width: 140,
                                alignItems: "center",
                                justifyContent: "center",
                                borderTopLeftRadius: 10,
                              }}
                            />
                          </View>
                          <View
                            style={{
                              padding: 10,
                              width: 140,
                              height: 30,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "grey",
                            }}
                          >
                            <Text style={{ fontSize: 16 }}>{data.name}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
      <Nav />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 20,

    justifyContent: "center",
  },

  wrapper: {
    marginBottom: 16,
  },

  header: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",

    marginBottom: 20,

    fontSize: 30,
  },
  searchInput: {
    flexDirection:'column',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    width: 290,
    marginLeft: 50,
    marginTop:-30,
  },

  Inputmail: {
    borderWidth: 0.5,

    borderRadius: 5,
  },

  logo: {
    height: 100,

    width: 100,

    alignSelf: "center",

    borderRadius: 20,

    marginBottom: 10,
  },

  link: {
    marginTop: 20,

    color: "blue",

    textAlign: "center",
  },

  remember: {
    marginLeft: 25,

    marginTop: -20,

    marginBottom: 25,
  },

  login: {
    borderRadius: 10,
  },

  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },

  wrapper: { marginBottom: 10 },
  headCard: {},
  title: { fontSize: 19, marginBottom: 10 },
  Card: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "50%",
  },

  searchIcon: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  head: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  bell: { marginLeft: 100 },
  offers: { marginBottom: 10 },
  image: { height: 100, width: 100, borderRadius: 5 },
  cat: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 30,
    rowGap: 30,
    marginLeft: 20,
  },
});

export default Home;
