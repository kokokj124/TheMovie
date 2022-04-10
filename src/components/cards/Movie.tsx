import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MovieInfor } from 'screens/page/slice';


const CardsMovie = (props: any) => {

  let movieInfor:MovieInfor = props.movieInfor;
  // console.log(movieInfor);
   

  return (
    <View style={styles.controler}>
        <Image source={{uri: "https://image.tmdb.org/t/p/w500" + movieInfor.poster_path}} style={styles.imagePoster}/>
        <Text style={styles.nameMovie}>{movieInfor.title}</Text>
        <View style={styles.voteAverage}>
          <Text>
            {movieInfor.vote_average}
          </Text>
        </View>
    </View>
  )
}

export default CardsMovie

const styles = StyleSheet.create({
  controler:{
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: "100%",
    width: "100%",
  },
  voteAverage: {
    position: "absolute",
    backgroundColor: "yellow",
    height: "20%",
    width: "20%",
    left:'70%',
    top: '5%',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePoster: {
    height: "100%",
    resizeMode: 'cover',
    aspectRatio: 1
  },
  nameMovie:{
    fontWeight: "bold",
    fontSize: 20,
    marginLeft:"5%",
    marginTop:"-26%",
    color: "ghostwhite"
  }
})