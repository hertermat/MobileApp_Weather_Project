import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet,FlatList,SafeAreaView,StatusBar} from 'react-native'
import moment from 'moment-timezone'
import FutureForecast from './FutureForecast'


const WeatherScroll = ({weatherData}) => {
    console.log(weatherData);
    
    const ForecastInfo = ({ img, dat ,main,celcius}) => (
        
        <View style={styles.futureForecastItemContainer}>
            
            <Image source= {{uri:"http://openweathermap.org/img/wn/"+img+"@2x.png"}} style={styles.image} />
            
            <Text  style={styles.day}>{moment(dat * 1000).format('ddd')}</Text>
            
            <Text style ={styles.temp} >{main}</Text>
            
            <Text style ={styles.celcius} >{celcius}C</Text>

        </View>
      );
      
    const renderItem = ({ item }) => (
        <>
        <FutureForecast data={item}></FutureForecast>
        <ForecastInfo img={item.weather[0].icon} dat={item.dt} main={item.weather[0].main} celcius={item.temp.day}/>
      </>
        );
        const SeparatorComponent = () => {
            return <View style={styles.separatorLine} />
          }
    
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          data={weatherData}
          
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={SeparatorComponent}
        />
      </SafeAreaView>
    
    )
}

const CurrentTempEl = ({data}) => {

    if(data && data.weather){
        const img = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
        return(
            <View style={styles.currentTempContainer}>
                <Image source={{img}}/>
                <View  style={styles.otherContainer}>
                    <Text  style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text  style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
                    <Text  style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
                </View>
            </View>
        )
    }else{
        return( 
            <View>

            </View>

        )
        
    }
   
}

const styles = StyleSheet.create({
   
    scrollView: {
        flex:0.4,
        backgroundColor: '#18181bcc',
        padding:30
    },
    image: {
        width: 100,
        height: 100
    },
    currentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth:1,
        padding: 15
    },
    day: {
        fontSize: 20,
        color:"white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        textAlignVertical:'top'
      
        
    },
    separatorLine: {
        height: 1,
        backgroundColor: 'black',
        paddingTop: 2,
      },
    futureForecastItemContainer: {
       
        justifyContent: 'center',
        backgroundColor: '#00000033',
      
        borderColor:"#eee",
        borderWidth:1,
       padding: 10,
        marginLeft: 10,
       
    }, 
    temp: {
       
        fontSize: 20,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
    },
    celcius: {
       
        fontSize: 24,
        color:"white",
        fontWeight:"100",
        textAlign:"right",
        marginTop:0
    },
    otherContainer: {
        paddingRight: 40
    },
    day: {
        fontSize: 20,
        color:"white",
        
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 10,
        marginTop:0
    },   
})

export default WeatherScroll
