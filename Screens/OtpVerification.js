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
// import { BASE_URL } from "../constant/Urls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "@react-navigation/native";
import { HeaderTitle } from "react-navigation-stack";
import Checkbox from "expo-checkbox";
import PhoneInput from "react-native-phone-input";
import email from "react-native-email";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const OtpVerification = () => {
  const [otp, setOTP] = useState("");

  const handleOTPChange = (text) => {
    setOTP(text);
  };
  // const navigation = useNavigation();
  const handleVerify = () => {
    // Perform validation and verification logic here
    console.log("OTP:", otp);
  };

  const handleResendOTP = () => {
    // Perform logic to resend OTP here
    console.log("Resend OTP");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>

      <Text style={{ marginBottom: 70, float: "left" }}>
        Enter the verification code we sent
      </Text>

      <View style={styles.otpBox}>
        <TextInput
          style={styles.input}
          //placeholder="Enter 4-digit OTP"
          onChangeText={handleOTPChange}
          value={otp}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.input}
          //placeholder=""
          onChangeText={handleOTPChange}
          value={otp}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.input}
          //placeholder="Enter 4-digit OTP"
          onChangeText={handleOTPChange}
          value={otp}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.input}
          //placeholder="Enter 4-digit OTP"
          onChangeText={handleOTPChange}
          value={otp}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>

      <TouchableOpacity
        style={styles.buttons}
        color="#C93B1F"
        onPress={handleVerify}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Verify
        </Text>
      </TouchableOpacity>

      <Text>
        Didn't recive code?{" "}
        <Link style={styles.link} to={{ screen: "OtpVerification" }}>
          Resend
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 1,
    textAlign: "left",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: 40,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  link: {
    marginTop: 20,
    color: "#C93B1F",
    textAlign: "center",
  },
  otpBox: {
    display: "flex",
    flexDirection: "row",
    columnGap: 15,
  },
  buttons: {
    backgroundColor: "#C93B1F",
    padding: 10,
    borderRadius: 10,
    labelColor: "white",
    fontFamily: "bold",
    textAlign: "center",
    width: 220,
  },
});

export default OtpVerification;
