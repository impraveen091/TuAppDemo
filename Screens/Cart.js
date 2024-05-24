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
  Button,
  FlatList,
} from "react-native";
import { Steps } from "antd";
import axios from "axios";
import Nav from "../Components/Comp/Nav";
import PinCode from "../Components/Comp/PinCode";
import { useSelector, useDispatch } from "react-redux";
const regex = /(<([^>]+)>)/gi;
import Icon from "react-native-vector-icons/FontAwesome";
import Stepper from "react-stepper-horizontal";
import { store } from "../states/store";
import CartItem from "../Components/CartItem/CartItem";
import { addCartItem, removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } from "../states/actionCreaters/actionCreaters";
export default function Cart({ navigation, route }) {
  const [cartDetails, setCartDetails] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const Id = route.params.id;
  const cartTitle = route.params.title;
  const cartPrice = route.params.price;
  const cartImage = route.params.imageUri;
  const cartDescription = route.params.description;
  const mrp = route.params.mrp;
  const cart = store.getState();
  const dispatch = useDispatch();
  const result = cartDescription?.replace(regex, "");
  const words = result?.split(" ");
  const truncatedText = words?.slice(0, 6).join(" ");
 
  const decrementQuantity = (id) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    dispatch(decreaseCartItemQuantity({id:id,type:"decrease"}));
  };
  React.useEffect(() => {
    console.log("Output");
    console.log(store.getState());
    console.log(cart);
  }, []);

  const incrementQuantity = (id) => {
    setQuantity(quantity + 1);
    dispatch(increaseCartItemQuantity({id:id,type:"increase"}));
  };

  const handlePinCodeComplete = (pinCode) => {
    console.log("PIN code entered:", pinCode);
    // Perform any action with the entered PIN code
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.container2}> */}
      {/* <Steps
      size="small"
      current={0}
      items={[
        {
          title: 'Cart',
        },
        {
          title: 'Address',
        },
        {
          title: 'Payments',
        },
        {
          title: 'Place Order',
        },
      ]}
      /> */}
      <Stepper
        steps={[
          { title: "Cart" },
          { title: "Address" },
          { title: "Payments" },
          { title: "Place Order" },
        ]}
        activeStep={0}
      />
      {/* </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pinCode}>
          <PinCode />
        </View>
        {cart?.cart?.map((product) => {
          return (
            <CartItem
              id={product?._id}
              cartTitle={product?.title}
              cartPrice={product?.sale_price}
              cartImage={product?.image}
              mrp={product?.regular_price}
              truncatedText={product?.description}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              quantity={product?.quantity}
            />
          );
        })}
        {/* <View style={styles.cartContainer}>
          <View>
            <Image source={{ uri: cartImage }} style={styles.productImage} />
          </View>

          <View style={styles.productDetails}>
            <Text style={styles.productName}>{cartTitle}</Text>
            <Text style={styles.details}>{truncatedText}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.productPrice}>£{cartPrice}</Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "grey",
                  textDecoration: "line-through",
                  marginTop: -4,
                }}
              >
                £{mrp}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.Quantity}>
              <TouchableOpacity onPress={decrementQuantity}>
                <Text style={styles.button}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity}>
                <Text style={styles.button}>+</Text>
              </TouchableOpacity>
            </View>
            <Icon name="trash" size={22} color={"red"} />
            <button style={styles.laterButton}>Save for later</button>
          </View>
        </View> */}
        {/* <TouchableOpacity>
          <button style={styles.checkoutButton}
          onPress={()=>{navigation.navigate("Address")}}>
            <b>Proceed to Adress Confirmation</b>
          </button> */}
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => {
            navigation.navigate("Address");
          }}
        >
          {" "}
          <Text style={styles.loginButtonText}>Address Confirmation</Text>
        </TouchableOpacity>
        <View style={styles.couponPrice}>
          <b>Coupons</b>
          <View style={styles.checkout}>
            <Icon name="ticket" size={22} color={"black"} />
            <Text>Apply Coupons</Text>
            <Icon name="chevron-right" size={22} color={"black"} />
          </View>
        </View>
      </ScrollView>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    height: "98%",
    marginBottom: 16,
    marginTop: 16,
  },
  proceedButton: {
    backgroundColor: "red",

    paddingVertical: 10,

    borderRadius: 5,

    alignItems: "center",
  },
  container2: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    maxWidth: "85%",
  },
  pinCode: {
    width: "100%",
    marginBottom: 10,
    marginTop: 20,
    shadowColor: "rgba(0.5, 0.5, 0.5, 0.5)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 7,
    padding: 10,
    borderRadius: 7,
  },
  couponPrice: { marginTop: 20 },
  checkout: {
    width: "100%",
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    shadowColor: "rgba(0.5, 0.5, 0.5, 0.5)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 7,
    padding: 10,
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  laterButton: { color: "grey", marginTop: 10, fontSize: 10 },
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

  details: { fontSize: 9 },
  description: {
    fontSize: 14,
    color: "#777",
  },
  Quantity: {
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  colTwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "red",
    width: "100%",
    height: 40,
    borderRadius: 7,
    borderWidth: 0,
  },
});
