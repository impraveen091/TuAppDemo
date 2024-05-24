import * as React from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Nav() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../Images/home.png")}
        style={styles.image}
        onAccessibilityTap={() => {
          navigation.navigate("Home");
        }}
      />

      <Image source={require("../Images/reward.png")} style={styles.image} />

      <Image source={require("../Images/cart.png")} style={styles.image} />
      <Image source={require("../Images/favourite.png")} style={styles.image} />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Image source={require("../Images/user.png")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});
