import React from 'react';

 

// import StyleSheet from 'react-native-media-query';

 

import { View,Image,StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
const Circle = () => {
  const isSmallScreen = width <= 375;
  return(
<View style={[styles.circle, isSmallScreen && styles.circleSmall]}>
<Image style={styles.logo_RB} source={require('../Components/Images/logo.png')} />
</View>
  );
};
const styles = StyleSheet.create({
circle: {
    width: 470,
    height: 520,
    borderRadius: 238,
    alignItems:"center",
    alignSelf: 'center',
    marginTop:90,
    backgroundColor:'#D12D32',
     marginTop:-340,
    marginLeft: 3,
    // flexDirection: 'row',
    // flexShrink:''
  },
  circleSmall: {
    width: 150,
    height: 150,
  },
logo_RB:{
   height: 100,
    width:100,
    alignSelf:"center",
    borderRadius: 10,

    // marginBottom:70,
    zIndex:-2,
    marginTop:350,

 

    
  },
});
export default Circle;

 

 