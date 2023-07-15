import {React} from 'react'
import { View,StyleSheet,SafeAreaView,Text, StatusBar,  FlatList } from 'react-native'
import AirPollutionData from '../Data/AirPollutionData'
import Item from '../components/Item'
import SearchBar from '../components/SearchBar'

const Dashboard = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <View >
                    <Text style={styles.appName}>AIRCO</Text>
                </View>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.userName}>Welcome Joshua Joseph!</Text>
                </View>
                <SearchBar />
            </View>
            <View style={styles.infomationView}>
                <View style={styles.pollutantView}>
                    <Text style={styles.pollutantIndex}>34</Text>
                    <Text style={styles.pollutantCategory}>Good</Text>
                </View>
                <FlatList
                    data={AirPollutionData}
                    renderItem={({item}) => <Item title={item.title} 
                    description = {item.desc}
                    value = {item.reading}
                    unit = {item.unit}
                    />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
      backgroundColor: 'whitesmoke'
    },
    appName: {
        color: 'darkblue',
        fontSize: 40,
        fontWeight: 'bold',
    },
    userName: {
        color: 'darkblue',
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerView:{
        flex: 0.2,
        paddingHorizontal: 10
    },
    infomationView: {
        backgroundColor: '#F0F0F0',
        padding: 20,
        flex: 0.8 
    },
    pollutantView: {
        backgroundColor: '#75CE9F',
        height: 200,
        marginBottom: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pollutantIndex:{
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold'
    },
    pollutantCategory: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
  })

export default Dashboard