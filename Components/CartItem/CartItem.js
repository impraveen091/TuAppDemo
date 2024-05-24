import * as React from "react";

import {
  View,
  Text,

  StyleSheet,
 
  Image,
 
  TouchableOpacity,
} from "react-native";


import Icon from "react-native-vector-icons/FontAwesome";

export default function CartItem(props) {
  const [quantity, setQuantity] = React.useState(1);

  const result = props.description?.replace(regex, "");

  const words = result?.split(" ");

  const truncatedText = words?.slice(0, 6).join(" ");

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.cartContainer}>
      <View>
        <Image source={{ uri: props?.cartImage }} style={styles.productImage} />
      </View>

      <View style={styles.productDetails}>
        <Text style={styles.productName}>{props?.cartTitle}</Text>

        <Text style={styles.details}>{truncatedText}</Text>

        <View
          style={{
            display: "flex",

            flexDirection: "row",

            justifyContent: "space-between",

            alignItems: "center",
          }}
        >
          <Text style={styles.productPrice}>£{props?.cartPrice}</Text>

          <Text
            style={{
              fontSize: 10,

              color: "grey",

              textDecoration: "line-through",

              marginTop: -4,
            }}
          >
            £{props?.mrp}
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.Quantity}>
          <TouchableOpacity onPress={()=>{props?.decrementQuantity(props?.id)}}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>{props?.quantity}</Text>

          <TouchableOpacity onPress={()=>{props?.incrementQuantity(props?.id)}}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>

        <Icon name="trash" size={22} color={"red"} />

        <button style={styles.laterButton}>Save for later</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    display: "flex",

    flexDirection: "row",

    justifyContent: "space-between",

    backgroundColor: "white",

    shadowColor: "rgba(0.5, 0.5, 0.5, 0.5)",

    shadowOffset: { width: 0, height: 1 },

    shadowOpacity: 0.8,

    shadowRadius: 10,

    elevation: 7,

    marginTop: 15,

    marginBottom: 20,

    padding: 10,

    borderRadius: 7,
  },

  productImage: {
    width: 100,

    height: 100,

    resizeMode: "cover",

    borderRadius: 10,

    marginBottom: 12,
  },

  productDetails: { width: 100 },

  productName: {
    fontSize: 10,

    fontWeight: "bold",

    marginBottom: 7,
  },

  productPrice: {
    fontSize: 12,

    fontWeight: "bold",

    color: "green",

    marginBottom: 8,

    marginTop: 5,
  },

  Quantity: {
    width: 100,

    display: "flex",

    flexDirection: "row",

    justifyContent: "space-around",
  },

  laterButton: { color: "grey", marginTop: 10, fontSize: 10 },

  button: {
    fontSize: 18,

    fontWeight: "bold",

    color: "black",

    paddingHorizontal: 8,
  },

  quantity: {
    fontSize: 18,

    fontWeight: "bold",

    color: "black",

    paddingHorizontal: 12,
  },
});
