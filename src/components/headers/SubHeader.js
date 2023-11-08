import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'

export default function SubHeader(props) {
  return (
    <Header style={styles} {...props}/>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:4,
        paddingVertical:12,
        backgroundColor:'#3E73B2'
    },
    text:{
        fontSize:16,
        fontWeight:600,
        color:'#ffffff'
    }
});