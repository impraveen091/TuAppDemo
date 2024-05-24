import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./Screens/Home";
// import ApiCheck from "./Screens/ApiCheck";
import ProductsPage from "./Screens/ProductsPage";
import Cart from "./Screens/Cart";
import ProductsDetail from "./Screens/ProductsDetail";
import ForgotPassword from "./Screens/ForgotPassword";
import OtpVerification from "./Screens/OtpVerification";
import CreateNewPassword from "./Screens/CreateNewPassword";
import Login from "./Screens/Login";
import Splash from "./Screens/Splash";
import PasswordChanged from "./Screens/PasswordChanged";
import RegistrationCompanyInfo from "./Screens/RegistrationCompanyInfo";
import RegistrationPersonalInfo from "./Screens/RegistrationPersonalInfo";
import RegistrationStart from "./Screens/RegistrationStart";
import Profile from "./Screens/Profile";

import Address from "./Screens/Address";
import Payments from "./Screens/Payments";
import PlaceOrder from "./Screens/PlaceOrder";
import { Provider } from "react-redux";
import { store } from "./states/store";
import Search from "./Screens/Search";
import LoyaltyAndDiscount from "./Screens/LoyaltyAndDiscount";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* <Stack.Screen name="ApiCheck" component={ApiCheck} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="LoyaltyAndDiscount"
            component={LoyaltyAndDiscount}
          />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="ProductsPage" component={ProductsPage} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ProductsDetail" component={ProductsDetail} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Profile" component={Profile} />

          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            screenOptions={{
              headerShown: true,
            }}
          />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen name="Payments" component={Payments} />
          <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
          <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
          <Stack.Screen
            name="RegistrationStart"
            component={RegistrationStart}
          />
          <Stack.Screen
            name="RegistrationCompanyInfo"
            component={RegistrationCompanyInfo}
          />
          <Stack.Screen
            name="RegistrationPersonalInfo"
            component={RegistrationPersonalInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
