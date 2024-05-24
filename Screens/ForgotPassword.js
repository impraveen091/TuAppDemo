import React, { useState } from "react";
import { View, Text, TextInput, Alert, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "@react-navigation/native";

// const sendCodeToEmail = (email) => {
//   console.log('Verification code sent to email:', email);
// };

// const sendCodeToPhoneNumber = (phoneNumber) => {
//   console.log('Verification code sent to phone number:', phoneNumber);
// };

const ForgotPassword = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handleEmailSubmit = () => {
    if (email) {
      setEmail(email);
      Alert.alert("Success", "Verification code sent to your email");
    } else {
      Alert.alert("Error", "Please enter your email");
    }
  };

  const handlePhoneNumberSubmit = () => {
    if (phoneNumber) {
      setPhoneNumber(phoneNumber);
      Alert.alert("Success", "Verification code sent to your phone number");
    } else {
      Alert.alert("Error", "Please enter your phone number");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: "20px",
          textAlign: "left",
          fontWeight: 500,
        }}
      >
        Forgot Password?
      </Text>

      <Text
        style={{
          color: "grey",
        }}
      >
        Please enter the email address or phone number linked with your account.
        We will send you the code.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Your email address"
        onChangeText={handleEmailChange}
        value={email}
      />
      <TouchableOpacity
        style={styles.buttons}
        color="#C93B1F"
        onPress={handleEmailSubmit}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Send Code
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          margin: 20,
          fontSize: 15,
          color: "gray",
          textAlign: "center",
        }}
      >
        or
      </Text>

      <TouchableOpacity
        style={styles.buttons}
        color="#C93B1F"
        onPress={handlePhoneNumberSubmit}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Send code to registered number
        </Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", marginTop: 200, color: "black" }}>
        Having Trouble?
        <Link style={styles.link} to={{ screen: "Login" }}>
          Login
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  input: {
    height: 40,

    borderColor: "grey",

    borderWidth: 1,

    marginBottom: 16,

    paddingHorizontal: 8,

    borderRadius: 8,

    placeholderTextColor: "grey",

    labelTextcolor: "grey",
  },

  buttons: {
    backgroundColor: "#C93B1F",
    padding: 10,
    borderRadius: 10,
    labelColor: "white",
    fontFamily: "bold",
    textAlign: "center",
  },
  link: {
    color: "red",
    paddingHorizontal: "2px",
  },
});
export default ForgotPassword;
