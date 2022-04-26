import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackIcon from '@assets/images/back_Icon.svg'
import Fonts from '@assets/fonts/index'

const BackList = () => {
  return (
    <SafeAreaView>
      <View>
        <BackIcon/>
        <Text>Back</Text>
      </View>
      <Text>Now list</Text>
    </SafeAreaView>
  )
}

export default BackList

const styles = StyleSheet.create({
  txtBack:{
    fontFamily: Fonts.defaultHelvetica,
    fontSize: 20,
    color: "#222222",
    letterSpacing: 0,
    textAlign: 'justify'
  },
  textTitle:{
    fontFamily: Fonts.defaultHelvetica,
    fontSize: 20,
    color: "#666666",
    letterSpacing: -0.12,
  }
})
