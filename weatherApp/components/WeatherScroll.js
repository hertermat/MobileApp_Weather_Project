import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

import Forecast from "./Forecast";


const WeatherScroll = () =>{
    return(
        <ScrollView style={styles.scrollView} horizontal={true}>
            <CurrentTempElement />
            <Forecast />
        </ScrollView>
    )
}

const CurrentTempElement = () =>{

    const weatherImg = {uri:'http://openweathermap.org/img/wn/10d@2x.png'};
    return(
        <View style={styles.tempContainer}>
            <Image source={weatherImg} style={styles.img} />
            <View style={styles.subTempContainer}>
                <Text style={styles.day}>Sunday</Text>
                <Text style={styles.temperature}>Night</Text>
                <Text style={styles.temperature}>Day</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width:150,
        height:150
    },
    scrollView:{
        backgroundColor:'#18181bcc',
        padding:30,
        flex:0.4,
    },
    tempContainer:{
        flexDirection: 'row',
        backgroundColor:'00000033',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'#eee',
        borderWidth:1,
    },
    subTempContainer:{
        paddingRight: 40
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


export default WeatherScroll