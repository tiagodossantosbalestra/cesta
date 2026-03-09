import React from "react"
import {styleSheet,text} from "react-native"

export default function Texto({children,style}){
    let estilo = estilos.texto;

    if(style?.font Weight === 'bold'){
    }
    RETURN<Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily:'montserratRegular',
        fontweight:'normal',
    },
    textoNegrito:{
        font Family:'montserratBold',
        fontweight:'normal',
    }
})