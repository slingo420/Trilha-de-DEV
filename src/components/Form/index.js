import React, { useState } from "react"
import { View, Text, TextInput, Button, }from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./style"

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e a altura");
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
  return setImc((weight/((height/100)*(height/100))).toFixed(2))
}

function validationImc(){
  if(weight != null && height != null){
    imcCalculator()
    setWeight(null)
    setHeight(null)
    setMessageImc("Seu IMC é:")
    setTextButton("Calcular novamente")
    return
  }
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("Preencha o peso e altura")
}

  return(
    <View style ={styles.textContext}>
      <View>

        <Text>Altura</Text>
        <TextInput
        onChangeText={setHeight}
        value={height}
        placeholder="Ex. 185"
        keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex. 75"
        keyboardType="numeric"
        />
        <Button
        onPress={() => validationImc()}
        title={textButton}
        />  

      </View>
      <ResultImc  messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}