import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import MinhaImagem from './assets/gegeconvrtida.png'; // Substitua pelo caminho correto da imagem

export default function App() {
  const [mamadaChecked, setMamadaChecked] = useState(false);
  const [cagadaChecked, setCagadaChecked] = useState(false);
  const [xixiChecked, setXixiChecked] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());


  const handleSaveData = () => {
    // Aqui você pode enviar as informações para o banco de dados
    // Por exemplo, enviar os estados das opções para um serviço ou API
    console.log('Mamada:', mamadaChecked);
    console.log('Cagada:', cagadaChecked);
    console.log('Xixi:', xixiChecked);
  };

  return (
    <View style={{ flex: 1,  backgroundColor: '#FFA2B8' }}>
      <Text style={{marginTop:30, padding: 20, textAlign: 'justify'}}>Vamos monitorar as mamadas e cagadas do seu bebê</Text>
      <View style={{ alignItems: 'center', marginVertical: 16 }}>
        <Image
          style={{ width: '100%', height: 200, resizeMode: 'contain' }}
          source={MinhaImagem}
        />
      </View>

      <Checkbox.Item
        label="Mamada"
        status={mamadaChecked ? 'checked' : 'unchecked'}
        onPress={() => setMamadaChecked(!mamadaChecked)}
      />
      <Checkbox.Item
        label="Cagada"
        status={cagadaChecked ? 'checked' : 'unchecked'}
        onPress={() => setCagadaChecked(!cagadaChecked)}
      />
      <Checkbox.Item
        label="Xixi"
        status={xixiChecked ? 'checked' : 'unchecked'}
        onPress={() => setXixiChecked(!xixiChecked)}
      />

      <Button mode="contained" onPress={handleSaveData} style={{ marginTop: 16 }}>
        Salvar
      </Button>
    </View>
  );
}
