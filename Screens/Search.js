import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from "@react-navigation/native";
import ProductCard from '../Components/ProductCard/ProductCard';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Animated } from "react-native";

const Search = ({navigation,route}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const inputRef= useRef();
  const [foundItems, setFoundItems] = useState([]);
  const [filterItem, setFilterItem] = useState("");
  const [products, setProducts] =useState([]);
  const handleBackPress = () => {
    navigation.navigate("Home",{categories:route.params.categories,allProductsnew:route.params.allProducts});
  };
  useEffect(() => {
    setProducts(route.params?.allProducts);
    console.log("set prods",products);
    updateProducts();
    setTimeout(()=>{inputRef.current?.focus()},0);
    console.log("set prods",products);
  }, []);
  useEffect(() => {
    
    console.log("change");
    console.log(products);
  }, [products]);
  useEffect(() => {
    
    filter();
  }, [searchQuery]);
  // const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const updateProducts = async ()=>{
    const listProd = await route?.params.allProducts;
    setProducts(listProd);
}
  const defaultCategories = [
    { id: 1, name: 'Mobile', price: 1000, image: require('../Components/Images/logo.png'), category: 'Mobile' },
    { id: 2, name: 'e-ciggerette', price: 20, image: require('../Components/Images/logo.png'), category: 'e-ciggerette' },
    { id: 3, name: 'Laptop', price: 50, image: require('../Components/Images/logo.png'), category: 'Laptop' },
    { id: 4, name: 'Camera', price: 1000, image: require('../Components/Images/logo.png'), category: 'Camera' },
      { id: 5, name: 'Electronics', price: 20, image: require('../Components/Images/logo.png'), category: 'Electronics' },
      { id: 6, name: 'MobileAccesories', price: 50, image: require('../Components/Images/logo.png'), category: 'MobileAccesories' },
  ];

  useEffect(() => {
    setSearchResults(defaultCategories);
  }, []);
  const images = [

    {
        source: require('../Components/Images/logo.png'),
        name: 'Mobile Holder',
        description: 'Ultimate Car Phone Holder Mount for Dashboard Winds.....',
        rating: '* * * * *',
        prize: '£27', 
        delivery:'Delivery Date',
    },

    {
        source: require('../Components/Images/logo.png'),
        name: 'Mobile phone grips',
        description: 'Cell Phone Ring Holder Stand, 360 Degree Rotation Finger.....',
        rating: '* * * * *',
        prize: '£8.99',
        delivery:'Delivery Date',
    },]
  const handleSearch = () => {

     setSearchResults(mockResults);
    setShowAllCategories(true);
  };
  const filter = () => {
    const keyword = searchQuery;
    if (keyword !== "") {
      const results = products?.filter((product) => {
        return product?.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setProducts(results);
    } else {
      setProducts(route.params?.allProducts);
    }
  };

  return (<>
   
    {/* // <View style={styles.container}>
                // </View> */}
    <View style={styles.container}>
    <Icon
          name="arrow-back"
          size={24}
          color="black"
          padding={5}
          onPress={handleBackPress}
          flexDirection="row"
        />
      <TextInput
        ref={inputRef}
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {/* <Button title="Search" onPress={handleSearch} /> */}
      <Text style={styles.text}>Most searched categories</Text>
      <ScrollView horizontal>
        {route.params.categories?.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={{
              uri: `${item.image?.src}`,
            }} style={styles.image} />
            <Text>{item.name}</Text>
            
            {/* <Text>Category: {item.category}</Text>
            <Text>Price: ${item.price}</Text> */}
          </View>
        ))}
      </ScrollView>
     <Text style={styles.text}>Popular Categories</Text>
     <ScrollView horizontal>
        {route.params.categories?.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={{
              uri: `${item.image?.src}`,
            }} style={styles.image} />
            <Text>{item.name}</Text>
            
          </View>))}
      </ScrollView>
      {/* <ScrollView horizontal>
        {searchResults.map((item) => (
          <View key={item.id} style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text>{item.name}</Text>
          {/* <Text>Category: {item.category}</Text>
        <Text>Price: ${item.price}</Text> */}
          {/* </View>
        ))}
        
        {showAllCategories &&
          <FlatList
          data={searchResults.slice(defaultCategories.length)}
          renderItem={({ item }) => (
            <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>Category: {item.category}</Text>
            {/* <Text>Price: ${item.price}</Text> */}
              {/* </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            />
          }
        </ScrollView> */}
    </View>
    <View style={styles.tworow}>{products?.map((product) => {

return (

  <ProductCard

    Id={product?.id}

    Title={product?.name}

    Description={product.description}

    SalePrice={product.sale_price}

    mrp={product.regular_price}

    Image1={product.images?.[0]?.src}

  />

);

})}</View>
        
    <View style={styles.card}>
    <View style={styles.row}>
    <View style={styles.column}>

      <View style={styles.card1}>
        <Text style={styles.text1}>Quality Products</Text></View></View>
      <View style={styles.column}>
      <View style={styles.card2}>
      <Text style={styles.text1}>Exclusive Loyalty Rewards</Text></View></View>
      <View style={styles.column}>
      <View style={styles.card2}>
      <Text style={styles.text1}>Easy Shipping</Text></View></View>
    </View></View>
    {/* <Image style={styles.img} source={require('../Components/Images/SearchPagebanner.png')}></Image> */}
    <Text style={styles.text}>New on TU</Text>
    <View style={styles.container1}>
      <View style={styles.row}>
        < View style={styles.column}>
        <Image source={images[0].source} style={styles.image1} />
        <Text style={styles.description}>{images[0].name}{images[0].description}{images[0].rating}{images[0].prize}{images[0].delivery}</Text>
      </View>

      <View style={styles.column}>
         <Image source={images[1].source} style={styles.image1} />
        <Text style={styles.description}>{images[1].name}{images[1].description}{images[1].rating}{images[1].prize}{images[1].delivery}</Text>
      </View>

    </View>
  </View>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 16,
    flexGrow:0,
  },
  tworow:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text:{
    fontSize: 25,
    fontWeight:'bold',
    textAlign:'left',
    padding: 15,
  },
  searchInput: {
    flexDirection:'column',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    width: 290,
    marginLeft: 50,
    marginTop:-30,
  },
  item: {
    flexDirection: 'column',
   justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    maxHeight: "80px",
    minWidth: "100px",
   // height: 40,
  },
  text1:{
    fontSize:10,
    fontWeight:'bold',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 8,
    padding: 10,
  },
  img:{
    alignItems:'center',
    height: 100,
    width:300,
    flex:1,  
    // opacity:1,
     justifyContent:'center',
    //margin:2,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
},
row1: {
  flexDirection: 'row',
  padding: 5,
  marginLeft:5,
  marginBottom: 10,
},

column: {
     flex: 1,
    alignItems: 'center',
    marginHorizontal: 12,

},

image1: {
    width: 200,
    height: 150,
    justifyContent: 'space-between',
},

description: {
  marginTop: 5,
  fontSize: 12,
  fontWeight: 100,
},

container1: {
  flex: 1,
  padding: 50,
  alignItems: 'center',
},
card: {

  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 8,
  backgroundColor: "#F8867A",
  padding: 20,
},
card1: {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 8,
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
},
card2: {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 8,
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
},
card3: {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 8,
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
},
gradient:{
  flex:1,
},
});

export default Search;
