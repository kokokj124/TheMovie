import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const WorkThrouth = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../../assets/images/BackGround.png')} resizeMode="cover" style={styles.backGroundImage}>
        <LinearGradient colors={["#F5D547", "transparent"]} start={{x:0.1, y:1}} end={{x:0.1, y:0.1}} style={styles.controler}>
          <StatusBar barStyle='light-content' />
          <View style={{position: 'absolute', direction: 'rtl', height: '100%', width: '100%'}}>
            <View style={{marginHorizontal: '5%', top: '65%'}}>
              <Text style={styles.fooderButtonText}>Know the movie is not worth Watching</Text>
              <Text style={[styles.fooderButtonText, {marginTop: '2%'}]}>ßStep1</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                // onPress={}
                style={[styles.fooderButton, {marginHorizontal: '20%', marginTop: '10%'}]}>
                <Text style={[styles.fooderButtonText, {color: "white"}]}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

    </View>
  )
}


export default WorkThrouth

const styles = StyleSheet.create({
    controler: {
        flex:1,
        opacity: 1,
    },
    backGroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    fooderButtonText: {
      fontFamily: 'Helvetica',
      fontSize: 36,
      color: '#FFFFFF',
      textAlign: 'center',
      letterSpacing: 0,
    },
    fooderButton: {
      height: '15%',
      borderColor: '#FFFFFF',
      borderWidth: 2,
      borderRadius: 27,
      justifyContent: 'center'
    }
})