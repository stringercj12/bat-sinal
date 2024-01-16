import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import logo from './assets/bat-circle.png';
import { useState } from 'react';

export default function App() {
  const [batSinal, setBatSinal] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [localizacao, setLocalizacao] = useState('')
  const [observacao, setObservacao] = useState('')


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={logo} style={batSinal && styles.logo} />

      {
        batSinal ?

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder='Nome'
            />
            <TextInput
              style={styles.input}
              value={telefone}
              onChangeText={setTelefone}
              placeholder='Telefone'
            />
            <TextInput
              style={styles.input}
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholder='Localização'
            />
            <TextInput
              style={[styles.input, styles.inputTextArea]}
              value={observacao}
              onChangeText={setObservacao}
              placeholder='Observação'
            />

            <TouchableOpacity style={styles.button} onPress={() => setBatSinal(false)}>
              <Text style={styles.text}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
          :
          <TouchableOpacity style={styles.button} onPress={() => setBatSinal(true)}>
            <Text style={styles.text}>activate bat signal</Text>
          </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 24
  },
  logo: {
    width: 90,
    height: 90,
    position: 'absolute',
    left: 24,
    top: 44
  },
  button: {
    backgroundColor: '#121212',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  form: {
    width: '100%',
  },
  input: {
    borderWidth: 2,
    borderColor: '#121212',
    width: '100%',
    marginBottom: 24,
    borderRadius: 10,
    height: 48,
    padding: 10
  },
  inputTextArea: {
    height: 100,
    verticalAlign: 'top'
  }
});
