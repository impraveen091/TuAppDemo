import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "@react-navigation/native";

const Splash = () => {
  const handleLogin = () => {
    console.log("Login");
  };
  const handleRegister = () => {
    console.log("Register");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../Components/Images/logo.png")}
      />

      <Text
        style={{
          color: "white",

          marginBottom: 200,
          textAlign: "center",
        }}
      >
        <b>TU Trade</b>
      </Text>
      <TouchableOpacity style={styles.whiteButton} onPress={handleLogin}>
        <Link
          style={{ textAlign: "center", marginTop: 8, color: "#D12D32" }}
          to={{ screen: "SignIn" }}
        >
          Login
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.redButton} onPress={handleRegister}>
        <Link
          style={{ textAlign: "center", marginTop: 8, color: "white" }}
          to={{ screen: "SignUp" }}
        >
          Register
        </Link>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#D12D32",
    flexDirection: "column",
    justifyContent: "center",
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 0,
    zIndex: -1,
  },
  whiteText: {
    color: "white",
    textAlign: "center",
  },
  redtext: {
    textAlign: "center",
  },
  whiteButton: {
    backgroundColor: "#ffffff",
    height: 40,

    //textAlign:"center",

    borderRadius: "5px",

    border: "2px solid white",

    marginTop: 50,
  },

  redButton: {
    backgroundColor: "#D12D32",

    height: 40,
    textAlign: "center",
    marginBottom: 10,
    //marginTop: 10,
    borderRadius: "5px",
    border: "2px solid white",

    textAlign: "center",
  },
  input: {
    height: 40,

    borderColor: "white",
    textAlign: "center",
    borderWidth: 1,

    marginBottom: 0,

    paddingHorizontal: 8,
  },

  link: {
    //marginTop: 20,

    color: "#C93B1F",

    textAlign: "center",
  },
});

export default Splash;
