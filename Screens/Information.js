import {React} from 'react'
import { View,StatusBar,StyleSheet,SafeAreaView,Text } from 'react-native'


const Information = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <Text>Hello Information</Text>
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

export default Information