import React from "react"
import {styleSheet} from "react-native"

export default function Texto({children,style}){
    let estilo = estilos.texto;

    if(style?.font Weight === 'bold'){
    }
    RETURN<Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({}