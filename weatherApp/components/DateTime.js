import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemText}>{title}</Text>
            <Text style={styles.weatherItemText}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = () =>{
    return(
        <View style={styles.container}>
            <View> 
                <View>
                    <Text style={styles.heading}>12:30am</Text>
                </View>
                <View>
                    <Text style={styles.subHeading}>Monday, June 7th</Text>
                </View>
                <View style={styles.weatherInfoContainer}>
                    <WeatherItem title="Humidity" value="79" unit="%" />
                    <WeatherItem />
                    <WeatherItem />
                    <WeatherItem />
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.country}>Country</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:20
    },
    heading:{
        fontSize:45,
        color: 'white',
        fontWeight: 100,
    },
    subHeading:{
        fontSize:25,
        color:'#eee',
        fontWeight:'300'
    },
    rightContainer:{
        textAlign:'right',
        marginTop:20,
    },
    country:{
        fontSize:20,
        color:'white'
    },
    weatherInfoContainer:{
        backgroundColor:"#18181b99",
        borderRadius:10,
        padding:10,
        marginTop:10
    },
    weatherItem:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    weatherItemText:{
        color:'white',
        fontSize:14,
        fontWeight:'100'
    },

})


export default DateTime;