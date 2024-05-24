import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { Link } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const RegistrationCompanyInfo = () => {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [PostCode, setPostCode] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [taxId, setTaxId] = useState("");
  const handleBackPress = () => {
    navigation.navigate("RegistrationStart");
  };
  const handleCompanyNameChange = (text) => {
    setCompanyName(text);
  };

  const handleOfficialEmailChange = (text) => {
    setOfficialEmail(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleAddress1Change = (text) => {
    setAddress1(text);
  };

  const handleAddress2Change = (text) => {
    setAddress2(text);
  };

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleRegionChange = (text) => {
    setRegion(text);
  };

  const handlePostCodeChange = (text) => {
    setPostCode(text);
  };

  const handleRegistrationNumberChange = (text) => {
    setRegistrationNumber(text);
  };

  const handleTaxIdChange = (text) => {
    setTaxId(text);
  };

  const handleUploadDocument = () => {
    // Implement file upload logic here
    console.log("Upload document");
  };

  const handleSubmit = () => {
    // Perform validation and registration logic here
    console.log("Company Name:", companyName);
    console.log("Official Email:", officialEmail);
    console.log("Phone Number:", phoneNumber);
    console.log("Address 1:", address1);
    console.log("Address 2:", address2);
    console.log("City:", city);
    console.log("Region:", region);
    console.log("Post Code:", PostCode);
    console.log("Registration Number:", registrationNumber);
    console.log("Company Tax ID:", taxId);
  };

  return (
    <>
      <View style={styles.container}>
        <Icon
          name="arrow-back"
          size={24}
          color="black"
          padding={5}
          onPress={handleBackPress}
          flexDirection="row"
        />
        <Text
          style={{
            fontSize: 26,
            textAlign: "left",
            flexDirection: "row",
            fontWeight: "500",
            marginTop: -34,
            marginLeft: 24,
          }}
        >
          {" "}
          Retailer Register{" "}
        </Text>
        <Text
          style={{
            fontSize: 23,
            textAlign: "left",
            fontWeight: "350",
            marginLeft: 24,
          }}
        >
          Company Information
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Company Name"
          onChangeText={handleCompanyNameChange}
          value={companyName}
        />
        <TextInput
          style={styles.input}
          placeholder="Official Email"
          onChangeText={handleOfficialEmailChange}
          value={officialEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Company Address 1"
          onChangeText={handleAddress1Change}
          value={address1}
        />
        <TextInput
          style={styles.input}
          placeholder="Company Address 2"
          onChangeText={handleAddress2Change}
          value={address2}
        />
      </View>
      {/* <View style={styles.wrapper}> */}
      <View style={styles.rowDir}>
        <View style={styles.flexFull}>
          <TextInput
            style={styles.input1}
            placeholder="City"
            onChangeText={handleCityChange}
            value={region}
          />
        </View>
        <View style={styles.flexFull}>
          <TextInput
            style={styles.input1}
            placeholder="Region"
            onChangeText={handleRegionChange}
            value={region}
          />
        </View>
      </View>
      {/* </View> */}

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Post Code"
          onChangeText={handlePostCodeChange}
          value={PostCode}
        />
        <TextInput
          style={styles.input}
          placeholder="Registration Number"
          onChangeText={handleRegistrationNumberChange}
          value={registrationNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="VAT ID"
          onChangeText={handleTaxIdChange}
          value={taxId}
        />
        {/* <Button

color='black'
borderRadius="5 solid gray"
title="Upload Document"
onPress={handleUploadDocument}
/> <br/>    */}
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={handleUploadDocument}
        >
          <Text style={{ textAlign: "center" }}>Upload Documents</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "gray",
            fontSize: 15,
          }}
        >
          By clicking Register, I agree to TU Trade’s{" "}
          <Link style={{ color: "#C93B1F" }} to={{ screen: "SignUp" }}>
            Terms of Use & Privacy policy
          </Link>
        </Text>

        {/* <TouchableOpacity style={styles.redButton} onPress={handleSubmit}><Text style={styles.whiteText}>Register</Text></TouchableOpacity> */}
        <Button
          color="#C93B1F"
          borderRadius="5"
          title="Register"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  redButton: {
    backgroundColor: "#C93B1F",
    borderRadius: "5px",
  },
  whiteButton: {
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    // borderStyle:"solid",
    // borderColor:"black",
    // borderWidth: "5px",
    paddingVertical: 15,
    paddingHorizontal: 0,
    textAlign: "center",
    border: "2px solid grey",
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
  input1: {
    height: 40,
    width: 178,
    borderColor: "grey",
    borderWidth: 0.5,
    marginBottom: 16,
    paddingHorizontal: 5,
    borderRadius: 8,
    placeholderTextColor: "grey",
    labelTextcolor: "grey",
    marginLeft: 13,
  },
  rowDir: {
    flexDirection: "row",
  },
  flexFull: {
    flex: 1,
    paddingHorizontal: 5,
  },
  text: {
    fontFamily: "bold",
  },
});

export default RegistrationCompanyInfo;
