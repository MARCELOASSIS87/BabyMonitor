// SegundaTela.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SegundaTela = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a Segunda Tela!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SegundaTela;
