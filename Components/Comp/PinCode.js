import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const PinCode = () => {
  const [addressCode, setAddressCode] = useState("");

  const handleAddressCodeChange = (text) => {
    setAddressCode(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pin}>Delivery to:</Text>
      <TextInput
        style={styles.pinCode}
        value={addressCode}
        onChangeText={handleAddressCodeChange}
        placeholder="pin-code"
        autoCapitalize="characters"
        maxLength={6} // Adjust as per your address code length
      />
      <Text style={{ color: "red" }}>Check</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
  },
  pinCode: {
    textAlign: "center",
    color: "grey",
    fontSize: 16,
  },
  pin: { fontWeight: "bold" },
});

export default PinCode;
