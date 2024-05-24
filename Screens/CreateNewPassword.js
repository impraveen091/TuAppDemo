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
// import InputField from "./UI/InputField";
// import Button from "./UI/Button";
import axios from "axios";
// import { BASE_URL } from "../constant/Urls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "@react-navigation/native";
import { HeaderTitle } from "react-navigation-stack";
import Checkbox from "expo-checkbox";
import PhoneInput from "react-native-phone-input";
import email from "react-native-email";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreateNewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNewPasswordChange = (text) => {
    setNewPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleResetPassword = () => {
    // Perform reset password logic here
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new password</Text>
      <Text>Your new password must be unique</Text>

      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry={true}
        onChangeText={handleNewPasswordChange}
        value={newPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={handleConfirmPasswordChange}
        value={confirmPassword}
      />
      <TouchableOpacity
        style={styles.buttons}
        color="#C93B1F"
        onPress={handleResetPassword}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Resend
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  reset: {
    backgroundColor: "red",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "100%",
  },
  buttons: {
    backgroundColor: "#C93B1F",
    padding: 10,
    borderRadius: 10,
    labelColor: "white",
    fontFamily: "bold",
    textAlign: "center",
    width: 290,
  },
});
