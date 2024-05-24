import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Picker } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
const RegistrationPersonalInfo = ({}) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postcode, setPostcode] = useState("");
  const [role, setRole] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const handleBackPress = () => {
    navigation.navigate("RegistrationStart");
  };
  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
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

  const handlePostcodeChange = (text) => {
    setPostcode(text);
  };

  const handleRoleChange = (value) => {
    setRole(value);
  };

  const handleReferralCodeChange = (text) => {
    setReferralCode(text);
  };

  const handleContinue = () => {
    // Perform validation and registration logic here
    console.log("First Name:", firstName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Address 1:", address1);
    console.log("Address 2:", address2);
    console.log("City:", city);
    console.log("Region:", region);
    console.log("Postcode:", postcode);
    console.log("Role:", role);
    console.log("Referral Code:", referralCode);
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
          Retailer Register
        </Text>
        <Text style={styles.text}> Personal Information</Text>

        <TextInput
          style={styles.input}
          placeholder="First name and Last name"
          onChangeText={handleFirstNameChange}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your email address"
          onChangeText={handleEmailChange}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Home Address (Line 1)"
          onChangeText={handleAddress1Change}
          value={address1}
        />
        <TextInput
          style={styles.input}
          placeholder="Home Address (Line 2)"
          onChangeText={handleAddress2Change}
          value={address2}
        />
      </View>
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

      {/* <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={handleCityChange}
        value={city}
      />
      <TextInput
        style={styles.input}
        placeholder="Region"
        onChangeText={handleRegionChange}
        value={region}
      /> */}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Postcode"
          onChangeText={handlePostcodeChange}
          value={postcode}
        />
        <Picker
          style={styles.input}
          selectedValue={role}
          onValueChange={handleRoleChange}
        >
          <Picker.Item
            style={styles.inputPick}
            label="Select Role"
            placeholderTextColor="grey"
            value=""
          />
          <Picker.Item label="Retailer" value="role1" />
          <Picker.Item label="Distributor" value="role2" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Referal Code"
          onChangeText={handleReferralCodeChange}
          value={referralCode}
        />

        <TouchableOpacity
          style={styles.buttons}
          color="#C93B1F"
          onPress={() => {
            navigation.navigate("RegistrationCompanyInfo");
          }}
        >
          <Text style={{ color: "white" }}>Continue</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Having Trouble?
        </Text>
      </View>
    </>
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
    marginTop: 20,
    color: "#C93B1F",
    textAlign: "center",
  },

  input1: {
    height: 40,
    width: 119,
    borderColor: "grey",
    borderWidth: 0.5,
    // marginBottom: 16,
    paddingHorizontal: 5,
    borderRadius: 8,
    placeholderTextColor: "grey",
    labelTextcolor: "grey",
    marginLeft: 1,
  },

  rowDir: {
    flexDirection: "row",
  },

  flexFull: {
    flex: 1,
    paddingHorizontal: 5,
    width: 10,
    marginLeft: 10,
  },
});

export default RegistrationPersonalInfo;
