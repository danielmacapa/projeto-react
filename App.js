import * as Speech from "expo-speech";
import * as React from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';




export default function App() {

  const ditado = () => {
    let opt = Math.floor(Math.random() * 10);
    let frase;
    switch (opt) {
      case 0:
        frase = "Um bom começo é a metade";
        break;
      case 1:
        frase = "A primeira qualidade do estilo é a clareza";
        break;
      case 2:
        frase = "O belo é o esplendor da ordem";
        break;
      case 3:
        frase = "A cultura é o melhor conforto para a velhice";
        break;
      case 4:
        frase = "Ter muitos amigos é não ter nenhum";
        break;
      case 5:
        frase = "Todos os trabalhos pagos absorvem e degradam o espírito";
        break;
      case 6:
        frase = "O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz";
        break;
      case 7:
        frase = "A natureza não faz nada em vão";
        break;
      default:
        frase = "ca ca ca";
    }
    return frase;
  };

  const speak = () => {
    const thingToSay = ditado();
    Speech.speak(thingToSay);
  };
    
  return (
    <View style={StyleSheet.container}>
      <Button title="Clique para ouvir algumas palavras" onPress={speak}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
