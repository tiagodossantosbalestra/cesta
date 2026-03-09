import React from "react";
import {Text,Image, Dimensions,StyleSheet} from "react-native";

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width= Dimensions.get('screen').width;

export default function Cesta(){
    return<>
        <Image source={topo} />
        <Text style={estilos.titulo}>Detalhes da cesta</Text>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <Text>Jenny Jack Farm</Text>
        <Text style={estilos.descricao}>Uma Cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Text>
        <Text>R$: 40,00</Text>

    </>
}

const estilos = StyleSheet.create({
    topo:{
        width:"100%",
        height:578/768*width

    },
    titulo:{
        width:"100%",
        position:"absolute",
        textAlign:"center",
        fontSize:16,
        lineHeight:26,
        color:"white",
        fontWeight:"bold",
        padding: 16,
         },
         cesta:{
            paddingVertical:8,
            paddingHorizontal:16,
        },
        fazenda:{
            flexDirection:"row",
            paddingVertical: 12,
        },
        nomeFazenda:{
            fontSize: 16,
            lineHeight: 26,
        },
        descricao:{
            color:"#a3a3a3",

})