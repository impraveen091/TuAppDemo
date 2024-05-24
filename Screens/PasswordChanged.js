import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const handleBackPress = () => {
   navigation.navigate("Login");
  };
const PasswordChanged = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Components/Images/success.png')}
        style={styles.image}
      />
      <Text style= {{
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
      }}>Password Changed!</Text>

      <Text style={{
        fontSize: 20,
        color: 'gray',
        textAlign: 'center',
      }}>Your password has been changed  successfully.</Text>

<TouchableOpacity
    style={styles.buttons}
    color="#C93B1F"
    onPress={handleBackPress}>
<Text style={{color: 'white'}}>Back to Login</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttons:{ 
    backgroundColor: '#C93B1F',
    padding: 10,
    borderRadius: 10,
    labelColor: "white",
    fontFamily: "bold",
    textAlign: "center",
    marginTop: 40,
    width:400,
},
});

export default PasswordChanged;
