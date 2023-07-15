import {React} from 'react'
import { View,StyleSheet,Text } from 'react-native'
import {FontAwesome,  SimpleLineIcons} from '@expo/vector-icons';


const SearchBar = ()=>{
    return(
        <View style={styles.container}>
            <SimpleLineIcons name='menu' color={'darkblue'} size={24}/>
            <Text style={styles.searchText}>Location</Text>
            <FontAwesome name='heart-o' color={'darkblue'} size={24}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'darkblue'  
    },
    searchText: {
        color: 'darkblue',
        fontSize: 24
    }
})

export default SearchBar