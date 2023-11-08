import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'

export default function MainHeader(props) {
  return (
    <Header style={styles} {...props}/>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:4,
        paddingVertical:12,
        backgroundColor:'#09284f'
    },
    text:{
        fontSize:24,
        fontWeight:600,
        color:'#ffffff'
    }
});