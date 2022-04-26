import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MovieInfor } from 'screens/page/slice';
import FastImage from 'react-native-fast-image'


const CardsMovie = (props: any) => {

  let movieInfor:MovieInfor = props.movieInfor;

  return (
    <View style={styles.controler}>
        <FastImage source={{uri: "https://image.tmdb.org/t/p/w500" + movieInfor.poster_path , priority: FastImage.priority.normal}} style={styles.imagePoster} />
        <View style={styles.viewContent}>
          <View style={styles.voteAverage}>
              <Text>
                {movieInfor.vote_average}
              </Text>
          </View>
          <Text style={styles.nameMovie}>{movieInfor.title}</Text>
        </View>
    </View>
  )
}

export default CardsMovie

const styles = StyleSheet.create({
  controler:{
    flexDirection: 'column',
    flex:1,
  },
  viewContent:{
    position: "absolute",
    height: '100%',
    width: '100%',
    justifyContent: 'space-between'
  },
  voteAverage: {
    backgroundColor: "yellow",
    height: "20%",
    width: "20%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: "5%",
    marginTop: "5%",
  },
  imagePoster: {
    width: "100%",
    resizeMode: 'cover',
    aspectRatio: 1
  },
  nameMovie:{
    fontWeight: "bold",
    fontSize: 20,
    color: "ghostwhite",
    marginLeft: "5%",
    marginBottom: "5%"
  }
})