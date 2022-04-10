import { FlatList, RefreshControl, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hook'
import { actionRequestPage, MovieInfor } from './slice';
import CardsMovie from 'components/cards/Movie';

const Page = () => {
  const page = useAppSelector(state => state.pages);
  const dispath = useAppDispatch();
  const [numberPage, setNumberPage] = useState(1);
  const [refreshing, setRefreshing] = React.useState(false);

  const array = Array.from<MovieInfor>(page.data.results)
    
  useEffect(() => {    
    dispath(actionRequestPage(numberPage));
  }, [numberPage])

  let handlLoadMore = () => {
    setNumberPage(numberPage + 1);
  }


  const fetchData = () => {
    setNumberPage(numberPage);
    setRefreshing(false);
  };
  
  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const renderItem = ({item}: any) => {
    let movieInfor: MovieInfor = item;
    return ( // setting "noImplicitAny": false turn off notification set type
    <View style={styles.controler}>
      <TouchableHighlight
          key={movieInfor.id.toString()}
          onPress={() => {}}>
          <View>
              <CardsMovie movieInfor={movieInfor}/>
          </View>
      </TouchableHighlight>
    </View>
    )
  }

  const renderFooterItem = () => {
    let arrayFooter: Array<any> = [];
    for(let i=0;i<page.data.results.length;i+=2){
      let movieInfor1: MovieInfor = page.data.results[i];
      let movieInfor2: MovieInfor = page.data.results[i + 1];
      arrayFooter.push ( // setting "noImplicitAny": false turn off notification set type
      <View style={{flexDirection: "row"}}>
        <View style={styles.controler}>
        <TouchableHighlight
            key={movieInfor1.id.toString()}
            onPress={() => {}}>
            <View>
                <CardsMovie movieInfor={movieInfor1}/>
            </View>
        </TouchableHighlight>
        </View>

        <View style={styles.controler}>
        <TouchableHighlight
            key={movieInfor2.id.toString()}
            onPress={() => {}}>
            <View>
                <CardsMovie movieInfor={movieInfor2}/>
            </View>
        </TouchableHighlight>
        </View>
      </View>

      )
    }

    return (<>{arrayFooter}</>)
  }

  return (
    <>
      {page.loading == true ? (<Text>loading</Text>) : (
          <FlatList
          style={
            {height: "80%"}
          }
          ItemSeparatorComponent={
              ({highlighted}) => (<View style={[styles.itemSeparatorComponent]}/>)
          }
          // data={page.data.results}
          data={array}
          keyExtractor={item => item.id.toString()}
          horizontal={false}
          pagingEnabled
          renderItem={renderItem}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          onEndReached={handlLoadMore}
          onEndReachedThreshold={0}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}/>
          }
          ListFooterComponent={renderFooterItem}/>
      )}
    </>
  )

}

export default Page

const styles = StyleSheet.create({
  controler:{
      width: "50%",
      height: 200
  },

  itemSeparatorComponent:{
      height: 2,
      backgroundColor: '#CED0CE',
  },

  viewContent:{
      fontWeight: '400',
  }
})