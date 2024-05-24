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
  Button,
} from "react-native";
import { store } from "../states/store";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } from "../states/actionCreaters/actionCreaters";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar, Avatar, Card } from "react-native-paper";
import Nav from "../Components/Comp/Nav";

export default function ProductsDetail({ navigation, route }) {
  const [productDetails, setProductDetails] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const Id = route.params.id;
  const regex = /(<([^>]+)>)/gi;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    fetchProductsDetails(Id);
  }, []);
  React.useEffect(() => {
    const des = productDetails?.description;
    const result = des?.replace(regex, "");
    // setDescription(result);
    console.log(result);
    const words = result?.split(" ");
    const truncatedText = words?.slice(0, 25).join(" ");
    const rest = words?.slice(26).join(" ");
    setDesc(truncatedText);
    setDescription(rest);
  }, [productDetails]);

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
const  handleCartAdd= async(item)=>{
  dispatch(addCartItem(item));
const cart = await store.getState(); 
  navigation.navigate("Cart", {
    cart:cart
  });
};
const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const fetchProductsDetails = async (id) => {
    const username = "admin";
    const password = "pass";
    const nonce = await generateNonce(username, password);
    console.log("nonce", nonce);
    const response = await axios.get(
      `http://apps.ecosmossolutions.com/wp/wp-json/wc/v3/products/${id}`,
      {
        headers: {
          Authorization: "Bearer" + nonce,
        },
      }
    );

    console.log(response.data);
    setProductDetails(response.data);

    return response.data;
  };

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const images = [
    `${productDetails?.images?.[0]?.src}`,
    `${productDetails?.images?.[1]?.src}`,
    `${productDetails?.images?.[2]?.src}`,
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
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
        <View style={styles.container}>
          <View style={styles.slider}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={[
                  styles.slide,
                  index === currentSlide && styles.activeSlide,
                ]}
              />
            ))}
            <TouchableOpacity style={styles.button} onPress={nextSlide}>
              <Text style={styles.buttonText}>➡</Text>
            </TouchableOpacity>
          </View>
          {/* <Image source={{ uri: `${productDetails?.images?.[0]?.src}` }} style={styles.image} /> */}
          <Text style={styles.title}>{productDetails?.name}</Text>
          <Text style={styles.price}>
            <Text>Price: £{productDetails?.sale_price}</Text>
          </Text>
          <Text>
            <b>Description:</b>
          </Text>
       
          <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
            <Text>
              {desc} <b>{expanded ? "" : "read more..."}</b>
            </Text>
          </TouchableOpacity>
          {expanded && <Text style={styles.content}>{description}</Text>}
        </View>
        <View style={styles.colTwo}>
          <Button title="Add to Cart" 
          onPress={() => {
            handleCartAdd({
              _id: productDetails?.id,
              // category: action.payload.category,
              createdAt: productDetails?.date_created,
              description: productDetails?.description,
              image: productDetails?.images[0]?.src,
              sale_price: productDetails?.sale_price,
              regular_price: productDetails?.regular_price,
              sku:productDetails?.sku,
              title: productDetails?.name,
              updatedAt: productDetails?.date_modified,
              availableQuantity: productDetails?.stock_quantity,
              //is this the right way to update quantity
              //availableQuantity: action.payload.availableQuantity- action.payload.quantity,
              quantity: 1,
            })
          }}/>
          <Button
            title="Buy now"
            onPress={() => {
              handleCartAdd({
                _id: productDetails?.id,
                // category: action.payload.category,
                createdAt: productDetails?.date_created,
                description: productDetails?.description,
                image: productDetails?.images[0]?.src,
                sale_price: productDetails?.sale_price,
                regular_price: productDetails?.regular_price,
                sku:productDetails?.sku,
                title: productDetails?.name,
                updatedAt: productDetails?.date_modified,
                availableQuantity: productDetails?.stock_quantity,
                //is this the right way to update quantity
                //availableQuantity: action.payload.availableQuantity- action.payload.quantity,
                quantity: 1,
              })
            }}
          />
        </View>
      </ScrollView>
      <Nav style={{ position: "absolute", bottom: 0 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    height: "100%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  slider: { width: 320, height: 200 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 10,
  },
  image: {
    width: 320,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 40,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
  colTwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  slide: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0,
    transition: "opacity 1s ease-in-out",
  },
  activeSlide: {
    opacity: 1,
  },
  button: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 200,
    width: 50,
    alignSelf: "flex-end",
  },
  buttonText: {
    width: 300,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
