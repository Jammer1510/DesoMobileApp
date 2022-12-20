import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';



const ListingButton = ({onPress}) => {
  return (
    
        <View style = {styles.container}>
             <Icons 
                 name ="plus" 
                color={COLORS.primary} 
                size={35}
            />
            <Button title='' onPress={onPress}/>
        </View>



        
    


  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.white,
        borderColor : COLORS.primary,
        height: 60,
        width: 60,
        borderRadius: 40,
        borderWidth: 5,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
 

    }
  
});
export default ListingButton