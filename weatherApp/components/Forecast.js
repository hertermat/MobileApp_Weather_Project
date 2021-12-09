import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Forecast = () =>{
    return(
        <View style={styles.container}>
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
        </View>
    )
}

const FutureForecast = () =>{

    const img = {uri:'http://openweathermap.org/img/wn/10d@2x.png'};
    return(
        <View style={styles.futureForecastStyle}>
            <Text style={styles.day}>Mon</Text>
            <Image source={img} style={styles.image}/>
            <Text style={styles.temperature}>Night</Text>
            <Text style={styles.temperature}>Day</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    image:{
        width:100,
        height:100
    },
    futureForecastStyle:{
        justifyContent:'center',
        backgroundColor:'#00000033',
        borderRadius:10,
        borderColor:'white',
        borderWidth:1,
        padding:20,
        marginLeft: 10
    },
    day:{
        fontSize:20,
        color:'white',
        backgroundColor:'#3c3c44',
        padding:10,
        textAlign:'center',
        borderRadius:50,
        fontWeight:'200',
        marginBottom:15
    },
    temperature:{
        fontSize:16,
        color:'white',
        fontWeight:'100',
        textAlign:'center'
    }

})


export default Forecast