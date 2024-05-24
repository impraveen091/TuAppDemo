import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Circle from "../Components/Circle";
import axios from "axios";
import { store } from "../states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "../states/actionCreaters/actionCreaters";
import ProductCard from "../Components/ProductCard/ProductCard";
// import { useNavigation } from "@react-navigation/native";
const LogIn = ({ navigation, route }) => {
  // const navigation = useNavigation();
  const handleOnRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
  };
  React.useEffect(() => {
    console.log(store.getState());
  }, []);
  React.useEffect(() => {
    console.log("print store ", store.getState());
  }, [store]);
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // method to add item to cart (redux)
  const handleAddToCart = (item) => {
    dispatch(addCartItem(item));
    console.log("cp", cartProduct);
  };
  const redirect = (id) => {
    // navigation.navigate("Home",{id: id});
    console.log("come to redirect fucntion", id);
    navigation.navigate("Home", { id: id });
  };
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleLogin = async (username, password) => {
    // Perform login logic
    try {
      setInvalid(false);
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
      getCategories(response.data.token);
      return response.data.token;
    } catch (error) {
      setInvalid(true);
      console.error(error);
      throw error;
    }
  };
  const getCategories = async (token) => {
    const response = await axios.get(
      "http://apps.ecosmossolutions.com/wp/wp-json/wc/v3/products/categories",
      {
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    );
    navigation.navigate("Home", {
      authToken: token,
      categories: response.data,
    });
    return response.data;
  };

  const handleForgotPassword = () => {
    // Handle forgot password

    console.log("Forgot password link pressed");
  };

  return (
    <View style={styles.container}>
      <Circle />

      <View>
        <Text style={styles.title}>TU Login</Text>

        <Text style={styles.line}>
          Access available to registered sellers only
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        {invalid && <Text>Invalid Credentials try again!</Text>}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            handleLogin(email, password);
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            dispatch(removeCartItem(35));
          }}
        >
          <Text style={styles.loginButtonText}>remove</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            dispatch(increaseCartItemQuantity({id:35,type:"increase"}));
          }}
        >
          <Text style={styles.loginButtonText}>inc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            dispatch(decreaseCartItemQuantity({id:35,type:"decrease"}));
          }}
        >
          <Text style={styles.loginButtonText}>dec</Text>
        </TouchableOpacity> */}
        <View style={styles.gap}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
            <View>
              <Text style={{ color: "grey" }}>New to TU Trade?</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("RegistrationStart");
          }}
        >
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginTop: 40, color: "blue" }}>
          Having Trouble?
        </Text>
        {/* <ProductCard
        
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  gap: {
    textAlign: "center",
    color: "grey",
    fontSize: 14,
    marginTop: 90,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 20,
  },

  line: {
    color: "grey",

    fontSize: 18,
  },

  input: {
    height: 40,

    borderColor: "gray",

    borderWidth: 1,

    marginBottom: 10,

    paddingHorizontal: 10,
  },

  forgotPassword: {
    color: "blue",

    textDecorationLine: "underline",

    marginBottom: 20,

    textAlign: "right",
  },

  loginButton: {
    backgroundColor: "red",

    paddingVertical: 10,

    borderRadius: 5,

    alignItems: "center",
  },

  loginButtonText: {
    color: "white",

    fontSize: 16,

    fontWeight: "bold",
  },
});

export default LogIn;
