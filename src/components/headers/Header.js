import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header(props) {
  const {title, style={}} = props;
  return (
    <View style={{...styles.container, ...style.container}}>
      <Text style={{...styles.text, ...style.text}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})