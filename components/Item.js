import {React} from 'react'
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native'


const Item = ({title,description,value,unit})=>{
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.informationContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <View style={styles.readingContainer}>
                <Text style={styles.pollutantReading}>{value}</Text>
                <Text style={styles.pollutantUnit}>{unit}</Text>
            </View>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        width: '50%',
        height: 200,
        margin: 5,
        borderRadius: 5,
        padding: 10
    },
    titleText: {
        color: 'darkblue',
        fontSize: 25,
        fontWeight: 'bold'
    },
    descriptionText: {
        color: 'lightgrey',
        fontWeight: 'bold',
    },
    informationContainer: {
        marginBottom: 40

    },
    readingContainer: {
        flexDirection: 'row'
    },
    pollutantReading: {
        color: '#75CE9F',
        fontSize: 40
    },
    pollutantUnit: {
        color: '#75CE9F',
        fontSize: 16
    }


})

export default Item