import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomWhiteComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'red',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomWhiteComponent;
