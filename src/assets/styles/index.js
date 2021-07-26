import React from "react";
import {  StyleSheet} from "react-native";
const styles = StyleSheet.create({
    cardContainer:{
        width:'100%',
        padding:15,
        borderWidth:1,
        shadowColor: "#000",
        backgroundColor:'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius:3,
        marginVertical:10
    },
    textContainer:{
        marginVertical: 5,
        width: '100%',
    },
    title:{
        fontFamily: 'system',
        fontSize: 20,
        fontWeight: 'bold',
      },
    value:{
    fontFamily: 'system',
    fontSize: 20,
    },
    container:{
        flex:1,
        backgroundColor:'white',
        padding:10
    },
    inputStyle:{
        borderWidth:1,
        borderRadius:5,
        marginBottom:10,
        fontSize:20,
        paddingHorizontal:20,
    },
    noDataContainer:{
        position:"absolute",
        top:'50%',
        alignSelf:"center"
    },
    noDataTxt:{
        fontSize:20,
        fontFamily:'system'
    }
})
export default styles;