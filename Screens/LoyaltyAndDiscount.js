import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

import Stepper from 'react-stepper-horizontal';




const LoyaltyAndDiscount = () => {

  const handleRedeem = () => {

    // Handle redeem logic here

    // This function will be called when the Redeem button is pressed

  };




  // Sample user data

  const userName = ' Hey, John !';

  const loyaltyPointsLevel = 'Bronze';

  const steps = [{ title: 'Bronze' }, { title: 'Silver' }, { title: 'Gold' }];

  const activeStep = 0;




  const products = [

    { name: 'Blue Razz ICE',              description:'SKE crystal original bar 600 disposable vape[Blueberry Razz Ice/ 20mg]',          image: require('../Components/Images/img1.jpg'), link: 'https://example.com/product1' },

    { name: 'Blueberry Cherry Cranberry', description: 'SKE crystal original bar 600 disposable vape[Blueberry Cherry Cranberry/ 20mg]', image: require('../Components/Images/img2.jpg'), link: 'https://example.com/product2' },

    { name: 'LOVE 99',                    description:'SKE crystal original bar 600 disposable vape[LOVE 99/ 20mg]',                     image: require('../Components/Images/img3.jpg'), link: 'https://example.com/product3' },

    { name: 'Watermelon Ice',             description:'SKE crystal original bar 600 disposable vape[Watermelon Ice/ 20mg]',              image: require('../Components/Images/img4.jpg'), link: 'https://example.com/product4' },

  ];




  const handleShopNow = (link) => {

    Linking.openURL(link);

  };




  return (

    <View style={styles.container}>

      <Text style={styles.title}>TU Rewards</Text>




      <View style={styles.bannerContainer}>

        <Text style={styles.userName}>{userName}</Text>

        <Text style={styles.loyaltyLevel}><b>Your'e on {loyaltyPointsLevel} Tier</b></Text>




        <Stepper steps={ [{title: 'Bronze'}, {title: 'Silver'}, {title: 'Gold'}] } activeStep={ 0 }   activeColor={"#D29A7E"} size={18} titleFontSize={8} defaultTitleColor={"#D29A7E"}completeTitleColor={"red"} activeTitleColor={"#ffffff"} barStyle={"solid"}

            />

        <Text style = {styles.word}><b>Level up to Silver Membership: Earn 450 Points to Unlock Exclusive Benefits!</b> </Text>

      </View>




      <Image source={require('../Components/Images/rewards_banner.png')} style={styles.image} />




      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>Discount</Text>

        </TouchableOpacity>




        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>Referral Points</Text>

        </TouchableOpacity>

      </View>




      <View style={styles.productsContainer}>

        <Text style={styles.productsTitle}>View Products</Text>




        <ScrollView>

          <View style={styles.productRow}>

            {products.map((product, index) => (

              <TouchableOpacity

                style={styles.productCard}

                key={index}

                onPress={() => handleShopNow(product.link)}

              >

                <Image source={product.image} style={styles.productImage} />

                <Text style={styles.productName}>{product.name}</Text>

                <Text style={styles.productDescription}>{product.description}</Text>

                <Text style={styles.shopNow}>Shop Now</Text>

              </TouchableOpacity>

            ))}

          </View>

        </ScrollView>

      </View>

    </View>

  );

};




const styles = StyleSheet.create({

  container: {

    flex: 1,

    paddingHorizontal: 20,

    marginBottom: 0,

    backgroundColor:'white',

  },

  bannerContainer: {

    backgroundColor: '#231300',

    alignItems: 'left',

    marginBottom: 20,

    borderRadius: 10,

    width: 336,

    height: 180,

  },

  userName: {

    paddingTop: 10,

    paddingLeft: 10,

    fontSize: 10,

    fontWeight: 'bold',

    marginBottom: 10,

    color: 'white',

  },

  stepper: {

    color: 'blue',

  },

  image: {

    width: 336,

    height: 180,

    borderRadius: 10,

  },

  loyaltyLevel: {

    paddingLeft: 10,

    fontSize: 11,

    color: '#C79081',

  },

  word:{

    fontSize: 8,

    color: 'white',

    alignSelf:'center',

    marginTop:15,

    fontFamily:'Helvetica',

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  offerContainer: {

    backgroundColor: '#f2f2f2',

    borderRadius: 10,

    padding: 20,

    marginBottom: 20,

  },

  offerText: {

    fontSize: 16,

    marginBottom: 10,

  },

  redeemButton: {

    backgroundColor: '#3f51b5',

    borderRadius: 5,

    padding: 10,

    alignItems: 'center',

  },

  redeemButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  buttonContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 20,

  },

  button: {

    backgroundColor: '#E9E9E9',

    borderRadius: 5,

    padding: 10,

    width: '48%',

    alignItems: 'center',

  },

  buttonText: {

    color: 'black',

    fontWeight: 'bold',

  },

  productsContainer: {

    marginTop: 20,

  },

  productsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  productRow: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

  },

  productCard: {

    backgroundColor: '#E7F7FF',

    borderRadius: 5,

    padding: 10,

    marginBottom: 10,

    width: '48%',

  },

  productImage: {

    width: '100%',

    height: 150,

    borderRadius: 5,

    marginBottom: 10,

   

  },

  productName: {

    fontSize: 12,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  productDescription: {

    fontSize: 14,

    color: 'gray',

  },

  shopNow: {

    color: 'black',

    // fontWeight: 'bold',

    alignSelf:'center',

   

    fontSize:8,

  },

  activeStepStyle:{

   Size:10,

   marginTop:100,

  },

});




export default LoyaltyAndDiscount;