import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomRedComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D12D32',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomRedComponent;
