import React, { useState } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const ProductCard = (props) => {
  const navigation = useNavigation();

  const [addressCode, setAddressCode] = useState("");

  const handleAddressCodeChange = (text) => {
    setAddressCode(text);
  };

  console.log("this is props", props);

  const regex = /(<([^>]+)>)/gi;

  const demoDesc = (des) => {
    const result = des?.replace(regex, "");

    const words = result?.split(" ");

    const truncatedText = words?.slice(0, 8).join(" ");

    console.log(truncatedText);

    return truncatedText;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",

          justifyContent: "center",

          marginBottom: 10,

          borderRadius: 10,

          backgroundColor: "white",

          shadowColor: "rgba(0.5, 0.5, 0.5, 0.5)",

          shadowOffset: { width: 0, height: 1 },

          shadowOpacity: 0.8,

          shadowRadius: 4,

          elevation: 7,
        }}
      >
        <View
          style={{
            backgroundColor: "#eee",

            borderRadius: 10,

            overflow: "hidden",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductsDetail", { id: props?.Id });
            }}
          >
            <Image
              source={{
                uri: props?.Image1,
              }}
              style={{
                height: 155,

                width: 155,

                borderRadius: 10,
              }}
            />

            <View
              style={{
                padding: 10,

                width: 155,

                height: 100,

                // backgroundColor: "grey",
              }}
            >
              <Text style={{ fontSize: 10, flexWrap: "wrap" }}>
                <b>{props.Title}</b>
                {demoDesc(props?.Description)}
                <View
                  style={{
                    display: "flex",

                    flexDirection: "row",

                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "green" }}>£{props?.SalePrice}</Text>

                  <Text
                    style={{
                      color: "red",

                      textDecoration: "line-through",
                    }}
                  >
                    £{props?.mrp}
                  </Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    justifyContent: "space-around",

    display: "flex",

    flexDirection: "row",

    shadowColor: "rgba(0.5, 0.5, 0.5, 0.5)",

    shadowOffset: { width: 0, height: 1 },

    shadowOpacity: 0.8,

    shadowRadius: 4,

    elevation: 7,
  },

  pinCode: {
    textAlign: "center",

    color: "grey",

    fontSize: 16,
  },

  pin: { fontWeight: "bold" },
});

export default ProductCard;
