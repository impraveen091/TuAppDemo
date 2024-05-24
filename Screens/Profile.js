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
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar, Avatar, Button, Card } from "react-native-paper";
import axios from "axios";
import Nav from "../Components/Comp/Nav";

const Profile = ({ navigation, route }) => {
  const [search, setSearch] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={styles.logo}
          source={require("../Components/Images/logo.png")}
        />
        <Searchbar
          style={{ width: "70%", height: 60, borderRadius: 0 }}
          placeholder="Search..."
          onChangeText={(newText) => setSearch(newText)}
          value={search}
        />
      </View>
      <View style={styles.orderCon}>
        <View style={styles.profileSection}>
          <Image
            source={require("../Components/Images/profile.png")} // Replace with the path to your profile photo
            style={styles.profilePhoto}
          />
          <Icon
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: "white",
              paddingLeft: 10,
              paddingTop: 9,
              borderColor: "grey",
              borderWidth: 0.5,
            }}
            name="user-plus"
            size={30}
            color={"grey"}
          />
        </View>
        <View style={styles.buttonGroup}>
          <button style={styles.buttonOrd}>
            {" "}
            <Icon name="shopping-bag" size={22} color={"red"} />
            Orders
          </button>
          <button style={styles.buttonOrd}>
            <Icon name="gift" size={22} color={"red"} />
            TU Rewards
          </button>
          <button style={styles.buttonOrd}>
            <Icon name="ticket" size={22} color={"red"} />
            Coupons
          </button>
          <button style={styles.buttonOrd}>
            <Icon name="headphones" size={22} color={"red"} />
            Help
          </button>
        </View>
      </View>

      <View style={styles.searchIcon}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View></View>
      </ScrollView>
      <Nav style={{ paddingBottom: 20 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fef1f1",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    height: 70,
  
  },
  logo: {
    height: 50,
    width: 50,
    alignSelf: "center",
    borderRadius: 7,
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    columnGap: 20,
  },
  orderCon: {
    display: "flex",
    // flexDirection: "row",
    rowGap: 20,
    padding: 20,
  },
  buttonOrd: {
    fontSize: 15,
    width: 140,
    height: 40,
    borderRadius: 5,
    borderColor: "grey",
    fontWeight: "bold",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    rowGap: 20,
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "grey",
    borderWidth: 0.5,
  },
});

export default Profile;
