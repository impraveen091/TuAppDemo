import React, { useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Link } from "@react-navigation/native";
import Circle from "../Components/Circle";
import { useNavigation } from "@react-navigation/native";

const RegistrationStart = () => {
  const navigation = useNavigation();

  const handleRetailer = () => {
    // Perform login logic

    console.log("SignIn");
  };
  const handleDistributor = () => {
    // Perform login logic

    console.log("SignIn");
  };

  return (
    <View>
      <Circle />

      <View style={styles.container}>
        <Text style={styles.title}>TU Register</Text>
        <Text style={styles.line}>Register with TU trade</Text>
        <TouchableOpacity
          style={styles.whitebutton}
          onPress={() => {
            navigation.navigate("RegistrationPersonalInfo");
          }}
        >
          <Text style={styles.whitebuttonText}>
            Retailer
            <Link style={styles.link} to={{ screen: "SignUp" }}></Link>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.redbutton}
          onPress={() => {
            navigation.navigate("RegistrationPersonalInfo");
          }}
        >
          <Text style={styles.redbuttonText}>Distributor</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 60 }}>
          Having an account?
          <Link style={styles.link} to={{ screen: "Login" }}>
            {" "}
            Login
          </Link>
        </Text>
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

  title: {
    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 5,
  },

  line: {
    color: "grey",

    fontSize: 12,
  },

  input: {
    height: 40,

    borderColor: "grey",

    borderWidth: 1,

    marginBottom: 10,

    paddingHorizontal: 10,
  },

  whitebutton: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderColor: "#D12D32",
    borderRadius: 10,
    borderWidth: 2,

    alignItems: "center",
  },

  whitebuttonText: {
    color: "#D12D32",

    fontSize: 16,

    fontWeight: "bold",
  },
  redbutton: {
    backgroundColor: "#D12D32",
    paddingVertical: 10,
    borderRadius: 10,

    alignItems: "center",
  },

  redbuttonText: {
    color: "white",

    fontSize: 16,

    fontWeight: "bold",
  },

  link: {
    marginTop: 20,

    color: "#C93B1F",

    textAlign: "center",
  },
});

export default RegistrationStart;
