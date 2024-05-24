import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";

import React, { useEffect, useState } from "react";

import axios from "axios";

export default function ApiCheck() {
  const generateNonce = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:80/wordpress/wp-json/jwt-auth/v1/token",
        {
          username: username,

          password: password,
        }
      );

      // const { nonce } = response.data.token;

      console.log(" response.data", response.data.data.token);

      return response.data.data.token;
    } catch (error) {
      console.error(error);

      throw error;
    }
  };

  const fetchProductsAndCategories = async () => {
    const username = "praveen";
    const password = "praveen#123";
    const nonce = await generateNonce(username, password);
    console.log("noncenonce", nonce);
    const response = await axios.get(
      "http://localhost:80/wordpress/wp-json/wc/v3/products/categories",
      {
        headers: {
          Authorization: "Bearer" + nonce,
        },
      }
    );

    console.log(response.data);

    return response.data;
  };
  const login = async () => {
    try {
      const username = "praveen";
      const password = "praveen#123";
      const nonce = await generateNonce(username, password);
      console.log("Generated nonce:", nonce);

      // Use the nonce for subsequent API requests

      // ...

      return nonce;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Button title="APICALL" onPress={fetchProductsAndCategories} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
});
